<!-- * v-model vs :model-value, @update:model-value
    - v-model (in native element)
      - value 속성에 값을 할당하는 v-bind와 input 이벤트 시 값을 입력하는 v-on 두 개의 directive가 햡쳐져서 동작
      - 사용자로부터 값을 입력 받는 <input>,<select>,<textarea> 등에서 사용
      - value 값에 모델의 값을 표시, 입력 값을 변경하면 자동으로 모델에 반영
      - <input>에서 type이 checkbox or <select>에서 multiple 속성인 경우
        -> 선택된 값이 배열 객체와 연결, 나머지는 단일 값과 연결
      - 디렉티브에 수식어를 사용할 수 o (v-model.lazy.number or v-model.trim 등)
        ! native element에서만 적용 component x
        lazy: 입력 폼에서 change 이벤트가 발생하면 데이터 동기화
              기본은 key 이벤트가 발생할 때마다 반영
        number: 입력 값을 parseInt 또는 parseDouble을 이용해 number 타입으로 저장
                기본은 string
        trim: 입력 문자열의 앞,뒤 공백을 자동으로 제거
      ex)
      <template>
        <h3>age</h3>
        // v-model.number로 작성되어 연산도 가능
        // {{user.age+10}} 
        <input type="text" v-model.lazy.trim.numer="user.age" />
        // major를 입력받기 위한 checkbox는 다중선택 가능
        <h3>전공</h3>
        <input type="checkbox" v-modelr="user.major" /><label>컴퓨터공학</label>
        <input type="checkbox" v-modelr="user.major" /><label>기계공학</label>
        <input type="checkbox" v-modelr="user.major" /><label>기타</label>
      </template>
      <script setup>
      // 다중선택이 가능한 checkbox의 개별 정보를 받기 위해서는 미리 값의 타입이 배열임을 선언!
      // 그렇지 않은 경우 하나의 체크박스 선택 시 다른 체크박스 모두 선택
        const user = reactive({major: []})
        return{
          user
        }.mount("#app")
      </script>

      ex)
      <input v-model="text" />
      text 값이 바뀌면 input의 value 값이 바뀌고,
      input의 value 값이 바뀌면 text 값이 바뀜
      -> v-on, v-bind를 조합하여 사용한 것과 동일한 결과
        <input :value="text" @input:"text = $event.target.value" />

      => but component에 v-model을 적용하려면?
    * component에서의 v-model
      <CustomInput :model-value="text" @update:model-value = "newValue => text = newValue" />
      -> 달라진 부분
         :value -> model-value
         @input -> @update:model-value
         커스텀 이벤트로 바뀌었기 때문에 전달받은 값(newValue)로 갱신
      ∴ component에서 v-model을 사용하려면 model-value, @update:model-value 
         명칭을 사용해서 컴포넌트의 props와 emit 이용
    - :model-value
      로컬 ref의 값과 동기화 되는 props
    - @update:model-value
      로컬 ref의 값이 변경될 때 발생하는 이벤트
    - $event
 -->
<!-- * Vue keyboard event
    - keyup
      @keyup = "keyHandle()"
      key를 눌렀다가 떼면 keyHandle method 실행
      ! 영문 입력 시 바로 나타나는 게 가능하지만 한글은 한 박자 늦게 나타남(IME 때문)
   
    - keydown
      @keydown = "keyHandle()"
      key를 눌렀을 때 동작 / but keydown을 입력하는 경우 결과에는 keydow로 출력
    
    - keypress
      @keypress = "keyHandle()"
      key 누르고 있을 때 동작 / 결과는 keydown과 같음 
    
    - input
      @input = "keyHandle()"
      특수문자, 영문, 한글이 입력과 동시에 결과 값에 반영, 중복 데이터 x

    ** 한글 입력 -> keyup, keydown
    ** keyup, keydown 한글 + enter 입력 시 중복 적용
       -> 한 글자만 입력하고 enter 입력 시 중복 적용,
       keypress는 입력 시 동작x, enter 누르는 경우 동작!
       중복 없이 한 번만 찍을 수 o
  
  * Key Aliases (입력키 별칭)
    일반적으로 사용되는 키에 대한 별칭 제공
    - .enter / .tab / .delete("Delete" 및 "Backspace") / .esc / 
      .space / .up / .down / .left / .right
    KeyboardEvent.key를 통해 유효한 입력키 이름을 kebab-case로 변환하여 수식어로 사용할 수 o
    - <input @keyup.page-down = "onPageDown" />
      핸들러는 $event.key가 'pageDown'인 경우에만 호출
  
  * System Modifier Keys (시스템 입력키 수식어)
    마우스 또는 키보드 이벤트 리스너 -> 해당 입력키 누를 때만 크리거 되도록 할 수 o
    - .ctrl / .alt / .shift / .meta (mac - command / window - window key)
    - keyup + system modifier keys 함께 쓰는 경우
      키가 눌러져 있어야 이벤트 발생! 
      keyup.ctrl -> ctrl 누른 상태에서 다른 입력키를 뗄 때 트리거. ctrl만 떼면 트리거 x
-->

<template>
  <div class="wrap">
    <!-- 
      v-for="(_,idx) in 6" -> idx값만 사용하고 배열의 요소 값은 신경x
                              0-5 idx를 이용하여 6번의 반복 생성
      :autofocus="idx === 0" -> 첫 번째 입력 필드에 자동으로 focus 설정
      :model-value="splitModelValue(modelValue, idx)"
        -> modelValue : 사용자가 입력한 값, idx : 현재 입력 필드의 인덱스
        splitModelValue() : 사용자가 입력한 값을 6개의 필드에 분할하여 표시해주는 함수
      :disabled="modelValue.length < idx"
        -> 현재 입력된 값의 길이가 인덱스보다 작으면 입력필드 비활성화
      @keyup="handleKeyup($event, idx)"
        -> keyup 이벤트 발생 시 handleKeyup 함수 호출
      @paste="handlePaste($event, idx)"
        -> paste 이벤트 발생 시 handlePaste 함수 호출
    -->
    <el-input
      v-for="(_, idx) in 6"
      ref="inputRefs"
      :key="idx"
      :autofocus="idx === 0"
      type="text"
      maxlength="1"
      @keyup="handleKeyup($event, idx)"
      @paste="handlePaste($event, idx)"
    />
    <!--       
      :model-value="splitModelValue(modelValue, idx)"
      :disabled="modelValue.length < idx" 
    -->
  </div>
</template>
<!-- * ref, unref, computed
  * ref
    - Vue3 이전의 ref -> Vue 템플릿의 DOM이나 컴포넌트를 가리키는 속성
      Vue3 -> reactive reference
              Composition API에서는 각각 함수로 제공
              => setup()함수 내에서 ref를 import 하여 사용 o
                  ref, unref,toRef 등
    - 내부에 값을 가지면서 반응적이고 변경 가능한 ref 객체 반환
      ref 객체는 단 하나의 프로퍼티를 가지는데 내부 값을 가지는 .value
    - How to use ref?
      1. <script>에 import {ref} from "vue"
      2. 변수를 선언하고 값을 ref()로 감싸주기
      3. 변수 값을 변경할 때 변수.value에 변경할 값 넣어주기!
      ex) 
      <template>
        <div>
          <div class="name">{{ name }}</div>
          <button @click="updateName">Click</button>
        </div>
      </template>
     <script>
        import { ref } from "vue";

        export default {
          setup() {
            const name = ref("nunusichi");

            const updateName = () => {
              name.value = "nubao";
            };
            return {
              name,
              updateName,
            };
          },
        };
        </script>

    - typescript에서의 ref
      const A = ref<string | number>('A')
      A.value = 123 // permissible

  * unref
    주어진 인자가 ref라면 내부 값을 반환하고 아니라면 인수 자체를 반환
    function useFoo(x: number | Ref<number>){
      const unwrapped = unref(x)
      // unwrapped 값은 number일 것을 보장
      // x 가 Ref라면 x.value를 return 아니면 x 자체를 return  
    }

  * computed
    - Vue가 가지는 함수형 속성

    - parameter는 로직을 가지고 값을 계산한 후 리턴하는 함수

    - 반환 값은 parameter 함수가 반환하는 값을 가지는 proxy 객체의 일종
      -> data가 변경되면 자동으로 새로운 값을 계산하고 화면에 반영

    - Vue2에서 filter로 data formating -> Vue3에서는 computed가 filter 역할 수행
      ex)
      const price = 100000000

      const pretty = computed(() => {
        const option = { style: "currency", currency: "KRW"}
        return new Int1.NumberFormat("ko-KR", option).format(price)
      })

    - method처럼 함수를 정의하고 사용하고 싶은 값을 반환
      ! computed에서 반환된 값은 데이터로 다루기 때문에 methods와 달리 ()가 들어가지 x

    - caching
      일반 script와의 큰 차이점: 값을 caching
      template에서 script(함수)를 직접 실행하는 경우 사용되는 횟수만큼 함수가 동작
      computed는 한 번 동작한 후 그 값을 caching해서 사용
      -> 종속 대상이 변경되지 않으면 다시 계산x
      사용된 데이터의 값이 없데이트 될 때까지 기존의 값을 재활용
      한 번 computed되면 그 뒤로 몇 번을 부르던 똑같은 값을 사용
        ex) 
          <div>
            <li>method: 두 번 호출 : {{sumM()}}, {{sumM()}}</li>
            <li>compted 두 번 사용 : {{sumC}}, {{sumC}}</li>
          </div>
        -> sumM은 단순 method이기 때문에 () 붙여서 실행
           sumC는 마치 data처럼 사용 되어 () x!
        >> 실행결과 : 
           sumM: 45
           sumM: 45 (method는 두 번 동작)
           sumC: 45 (computed는 한 번만 동작)
           
    - 수정 가능한 계산된 속성
      computed는 이미 계산된 속성이기 때문에 read only 형태로 사용
      새로운 값을 할당하려고 하면 runtime error 발생
      ex) const computedName1 = computed(() => {
        return `${user.first}(${user.last})`
      })
      // runtime error - 실제 반영 x
      computedName1.value = "some"
      
      * 꼭 수정해야 할 경우
        -> computed를 수동으로 업데이트
        computed에 get과 set 함수를 가진 객체 전달, set함수에서 값을 변경
        get() : 읽을 때 이 값을 사용
              ex) babo +' '+ nunu => babo nunu
        set() : 값을 쓸 때 사용
                ex) newValue = babo nunu
                firstName = babo
                lastName = nunu
        const user = reactive({
          first: "nunu"
          last: "babo"
        })

        const computedName2 = computed({
          get() {
            return `${user.first}(${user.last})`
          },
          set(newVal) {
            [user.first, user.last] = newVal
          }
        })
        // setter 호출 - 전체적인 값의 변화 발생
        computedName2.value = ["nu", "bao"]
      
        => but computed는 readOnly로 쓰는게 제일 좋음!
      
    ∴ computed를 통해 가독성, 성능 향상 가능
       computed의 용도는 다른 값을 가져와서 더 단순하게 만들어 사용하는 것
       되도록 값을 수동으로 업데이트 x, 내부적으로 request요청, DOM 변화 등의 side-effect 없도록

 -->
<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
import { ElInput } from "element-plus";

const props = defineProps<{
  modelValue: string;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

// const splitModelValue = (modelValue: string, idx: number) => {
//   // el-input에서 받아온 modelValue(입력 값), idx(필드 인덱스)
//   const len = modelValue.length; // 받아온 입력 값의 길이 확인
//   if (idx <= len - 1) {
//     // 입력 필드의 인덱스가 사용자가 입력한 길이를 초과하지 않는다면
//     return modelValue[idx];
//     // 인덱스 값에 따른 해당 위치의 문자 반환
//     // 입력한 값을 6개의 입력 필드로 분할하여 표시
//   } else {
//     return ""; // 인덱스가 입력 값의 길이보다 크거나 같으면 빈 입력필드 표시
//   }
// };

const inputRefs = ref<InstanceType<typeof ElInput>[]>();

// 키보드 이벤트 처리
const handleKeyup = (event: KeyboardEvent, idx: number) => {
  if (allowKeys.includes(event.key)) {
    // backspace일 경우, 현재 인풋의 데이터의 ""으로 만들고, disabled을 추가한다.
    if (event.key === "Backspace") {
      clearInput(idx);
      focusInput(idx - 1);
    }
    // 숫자일 경우, 현재 인풋의 데이터에 한글자 숫자를 집어넣고, 다음 인풋의 disabled을 해제한다.
    else {
      setInputValue(idx, event.key);
      focusInput(idx + 1);
    }
  }
};

const allowKeys = [
  "Backspace",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

// 입력 필드 clear
// idx는 자울 입력 필드의 인덱스
const clearInput = (idx: number) => {
  // 현재 입력 필드 이전의 문자열은 유지, 지우려는 입력 필드 이후의 문자열 잘라냄
  const newValue = props.modelValue.slice(0, idx - 1);
  // 잘라낸 값을 부모 컴포넌트로 업데이트
  emits("update:modelValue", newValue);
};

// 입력 필드에 새로운 값을 설정하고 해당 값 업데이트
// idx: 설정할 입력 필드의 인덱스, value: 설정할 새로운 값
const setInputValue = (idx: number, value: string) => {
  // 현재 입력필드 이전의 문자열과 새로운 값을 합쳐서 새로운 문자열 생성
  const newValue = props.modelValue.slice(0, idx) + value;
  // 생성된 새로운 문자열을 부모 컴포넌트로 업데이트
  emits("update:modelValue", newValue);
};

// 지정된 입력 필드에 포커스 설정
// targetIdx: 포커스를 설정할 입력 필드의 인덱스
const focusInput = (targetIdx: number) => {
  if (inputRefs.value) {
    // 입력 필드가 존재한다면?
    // targetIdx가 0보다 크거나 &&
    // targetIdx가 입력 필드의 총 개수보다 작거나 같은지 확인
    // 즉, targetIdx의 유효성 확인
    if (0 <= targetIdx && targetIdx <= inputRefs.value.length - 1) {
      // 유효하다면 해당 인덱스의 입력 필드에 포커스 설정
      inputRefs.value[targetIdx].focus();
    }
  }
};

const handlePaste = (event: ClipboardEvent, idx: number) => {
  // Paste event is only in the first input
  if (idx !== 0) return;
  const pastedValue = event.clipboardData?.getData("text");

  // exist clipboard data & 6 letter & only number
  if (pastedValue && pastedValue.length === 6 && !isNaN(Number(pastedValue))) {
    emits("update:modelValue", pastedValue);
    focusInput(5);
  }
};
</script>

<style scoped lang="scss">
.wrap {
  display: flex;
  flex-direction: row;
}
</style>
