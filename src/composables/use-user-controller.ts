import invariant from "tiny-invariant";
import { ComputedRef, ref, unref } from "vue";
import {
  EmailType,
  NextActionType,
  NextActionTypes,
  useAuthNumber,
  useEmailCheck,
  useJoinLogin,
  useReissue,
} from "@/composables/use-user-api";
import { useAccessTokenStore } from "@/store";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { ElNotification } from "element-plus";

export const SignFormStepType = {
  PREV_EMAIL: "PREV_EMAIL",
  EMAIL: "EMAIL",
  REQUEST_EMAIL_VERIFY: "REQUEST_EMAIL_VERIFY",
  CHECK_EMAIL_NUMBER: "CHECK_EMAIL_NUMBER",
  PASSWORD: "PASSWORD",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
} as const;
export type SignFormStepTypes = keyof typeof SignFormStepType;

export type SignFormData = {
  email: string;
  password: string;
  verifyNumber: string;
};

/** 로그인 & 회원가입 페이지의 composable */
export const useJoinLoginProcess = (linkId: ComputedRef<string | undefined>) => {
  const router = useRouter();

  /** 이미 브라우저의 localstorage에 access token이 존재하면,
   * 자동로그인이므로, reissue를 요청하고, 성공시 메인 페이지로 이동
   */
  onMounted(() => {
    const { mutate: reissue } = useReissue({
      onSuccess: (data) => {
        setAccessToken(data.data.data.accessToken);
        router.push({ name: "ChukaPokaMain" });
      },
      onError: (error) => {
        /** useReissue는 localstorage에 access token 값이 존재할 때만 진행되는데  */
        console.error(error);
        if (getAccessToken()) {
          clearAccessToken();
        }
      },
    });

    /** localstorage에 access token 값이 존재할 때만 reissue 호출 */
    if (getAccessToken()) {
      reissue();
    }
  });

  /** 현재 로그인 & 회원가입 스텝
   * PREV_EMAIL, EMAIL, REQUEST_EMAIL_VERIFY, CHECK_EMAIL_NUMBER, PASSWORD, LOGIN_SUCCESS
   */
  const signFormCurrentStep = ref<SignFormStepTypes>(
    SignFormStepType.PREV_EMAIL,
  );
  /**
   * 현재 로그인 & 회원가입 스텝의 입력받은 데이터
   */
  const formData = ref<SignFormData>({
    email: "",
    password: "",
    verifyNumber: "",
  });

  /**
   * 각 스텝에서 확인버튼 클릭시
   */
  const handleSend = (
    currentType: SignFormStepTypes,
    value?: string | number,
  ) => {
    switch (currentType) {
      case SignFormStepType.EMAIL: {
        invariant(typeof value === "string");
        formData.value.email = value;
        break;
      }
      case SignFormStepType.CHECK_EMAIL_NUMBER: {
        invariant(typeof value === "string");
        formData.value.verifyNumber = value;
        break;
      }
      case SignFormStepType.PASSWORD: {
        invariant(typeof value === "string");
        formData.value.password = value;
        break;
      }
    }
    apiProcess(currentType);
  };

  /**
   * 스텝별 결과에 따라 필요한 api 요청을 통합한 메서드
   */
  const apiProcess = (currentType: SignFormStepTypes) => {
    switch (currentType) {
      case SignFormStepType.EMAIL: {
        requestEmailCheck({
          email: formData.value.email,
          emailType: EmailType.DEFAULT,
        });
        break;
      }
      case SignFormStepType.REQUEST_EMAIL_VERIFY: {
        // api로 현재 입력받은 이메일로 verify number 전송
        requestEmailVerify({
          email: formData.value.email,
        });
        // 일단 인증번호 전송 화면으로 이동
        navigate(SignFormStepType.CHECK_EMAIL_NUMBER);
        break;
      }
      case SignFormStepType.CHECK_EMAIL_NUMBER: {
        if (formData.value.verifyNumber === authNumber.value) {
          navigate(SignFormStepType.PASSWORD);
        } else {
          notify("잘못된 인증번호입니다. 다시 입력해주세요.");
        }
        break;
      }
      case SignFormStepType.PASSWORD: {
        // login
        // 추후 api 연동 필요
        if (currentNextAction.value) {
          requestJoinLogin({
            email: formData.value.email,
            emailType: EmailType.DEFAULT,
            password: formData.value.password,
            actionType: currentNextAction.value,
          });
        }
        break;
      }
    }
  };

  /**
   * 회원가입인가? 로그인인가? (JOIN, LOGIN)
   * 이메일 입력 및 확인을 통해 결정된 이후 스텝
   */
  const currentNextAction = ref<NextActionTypes | undefined>(undefined);

  /**
   * 입력받은 이메일이 등록된 이메일인지 확인
   * 결과에 따라 currentNextAction 갱신 및 추후 스텝으로 이동
   * LOGIN시 비밀번호 입력폼으로
   * JOIN시 이메일 인증번호 요청폼으로
   */
  const { mutate: requestEmailCheck } = useEmailCheck({
    onSuccess(res) {
      const nextAction = res.data.data.nextAction;
      currentNextAction.value = nextAction;
      // 등록된 이메일
      if (nextAction === NextActionType.LOGIN) {
        // 비밀번호 입력 폼 이동
        navigate(SignFormStepType.PASSWORD);
      }
      // 등록되지 않은 이메일
      if (nextAction === NextActionType.JOIN) {
        // 이메일 인증번호 요청 폼 이동
        navigate(SignFormStepType.REQUEST_EMAIL_VERIFY);
      }
    },
    onError(error) {
      console.error(error.response?.data);
    },
  });

  const { mutate: requestEmailVerify, authNumber, isLoading: isLoadingRequestEmailVerify } = useAuthNumber({
    onSuccess: () => {

    },
    onError: (error) => {
      console.error(error.response?.data);

      // TODO: api/user/authNumber 실패중
      navigate(SignFormStepType.CHECK_EMAIL_NUMBER);
    },
  });

  /**
   * 스텝을 통해 이메일과 비밀번호를 모두 입력받은 후,
   * 회원가입 & 로그인을 진행
   * 결과에 따라 리턴받은 accessToken을 브라우저에 저장함
   */
  const { mutate: requestJoinLogin } = useJoinLogin({
    onSuccess(res) {
      const accessToken = res.data.data.token.accessToken;
      if (accessToken !== undefined && accessToken !== "") {
        setAccessToken(accessToken);

        const _linkId = unref(linkId);
        if (!_linkId) {
          router.push({ name: "ChukaPokaMain" });
        } else {
          /** link 페이지에서 이동된 경우 */
          router.push({ name: "ChukaPokaLink", params: { linkId: _linkId } });
        }

      }
    },
    onError(error) {
      notify("로그인에 실패했습니다. 다시 입력해주세요.");
      console.error(error.response?.data);
      if (getAccessToken()) {
        clearAccessToken();
      }
    },
  });
  const { setAccessToken, getAccessToken, clearAccessToken } =
    useAccessTokenStore();

  const navigate = (target: SignFormStepTypes) => {
    signFormCurrentStep.value = target;
  };

  const back = () => {
    // 뒤로가기 버튼 클릭시

    switch (signFormCurrentStep.value) {
      case SignFormStepType.EMAIL: {
        navigate(SignFormStepType.PREV_EMAIL);
        break;
      }
      case SignFormStepType.REQUEST_EMAIL_VERIFY: {
        navigate(SignFormStepType.EMAIL);
        break;
      }
      case SignFormStepType.CHECK_EMAIL_NUMBER: {
        navigate(SignFormStepType.REQUEST_EMAIL_VERIFY);
        break;
      }
      case SignFormStepType.PASSWORD: {
        // 등록된 아이디의 비밀번호 입력인 경우 : 아이디 입력폼으로
        if (currentNextAction.value === NextActionType.LOGIN) {
          navigate(SignFormStepType.EMAIL);
        }
        // 등록되지 않은 아이디의 비밀번호 입력인 경우 : 이메일 인증번호 입력폼 ?? TODO: 돌아가지 않는게 맞는데...
        if (currentNextAction.value === NextActionType.JOIN) {
          navigate(SignFormStepType.CHECK_EMAIL_NUMBER);
        }
        break;
      }
    }
  };

  const notify = (text: string) => {
    ElNotification({
      title: text,
      // message: text,
    });
  };

  return {
    authNumber,
    signFormCurrentStep,
    formData,
    handleSend,
    currentNextAction,
    setAccessToken,
    getAccessToken,
    apiProcess,
    requestEmailVerify,
    navigate,
    back,
    notify,
    isLoadingRequestEmailVerify,
  };
};
