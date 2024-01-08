<template>
  <cp-button type="solid" width="100px" height="50px" @click="goToInit"
    >Logout</cp-button
  >
  <div>ChukaPokaMain</div>

  <div class="border">Tree & Tree Item List</div>
  <div class="border">
    <div>
      treeId: <input v-model="treeId" type="text" />
      <cp-button
        type="solid"
        width="175px"
        height="50px"
        @click="navigate('tree')"
        >Go To Tree {{ treeId }}</cp-button
      >
    </div>
    <div>
      <cp-button
        type="solid"
        width="175px"
        height="50px"
        @click="navigate('tree-create')"
        >Go To Tree Create</cp-button
      >
    </div>
  </div>
  <div class="border">
    <div>
      treeItemId: <input v-model="treeItemId" type="text" />
      <cp-button
        type="solid"
        width="175px"
        height="50px"
        @click="navigate('treeitem')"
      >
        Go To TreeItem {{ treeItemId }}
      </cp-button>
    </div>
    <div>
      <cp-button
        type="solid"
        width="175px"
        height="50px"
        @click="navigate('treeitem-create')"
      >
        Go To TreeItem Create
      </cp-button>
    </div>
    <div>
      treeItemId: <input v-model="treeItemId" type="text" />

      <cp-button
        type="solid"
        width="175px"
        height="50px"
        @click="navigate('treeitem-edit')"
      >
        Go To TreeItem Edit {{ treeItemId }}
      </cp-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChukaPokaMain",
});
</script>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import CpButton from "@/components/commons/CpButton.vue";

const router = useRouter();

const treeId = ref("");
const treeItemId = ref("");
const navigate = (type: string) => {
  switch (type) {
    case "tree": {
      if (treeId.value.length === 0) return;
      router.push({
        name: "TreeDetail",
        params: {
          id: treeId.value,
        },
      });
      break;
    }
    case "tree-create": {
      router.push({
        name: "TreeCreate",
      });
      break;
    }
    case "treeitem": {
      if (treeItemId.value.length === 0) return;
      router.push({
        name: "TreeItemDetail",
        params: {
          id: treeItemId.value,
        },
      });
      break;
    }
    case "treeitem-create": {
      router.push({
        name: "TreeItemCreate",
      });
      break;
    }
    case "treeitem-edit": {
      if (treeItemId.value.length === 0) return;
      router.push({
        name: "TreeItemEdit",
        params: {
          id: treeItemId.value,
        },
      });
      break;
    }
  }
};

const goToInit = () => {
  router.push({
    name: "ChukaPokaInit",
  });
};
</script>

<style scoped lang="scss">
.border {
  border: solid 1px black;
  margin: 16px 0px;
}
</style>
