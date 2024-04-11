import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ChukaPokaInit from "@/views/init/index.vue";
import ChukaPokaMain from "@/views/main/index.vue";
import ChukaPokaLink from "@/views/link/index.vue";
import TreeDetail from "@/views/tree/detail/index.vue";
import TreeCreate from "@/views/tree/create/index.vue";
import TreeEdit from "@/views/tree/edit/index.vue";


const routes: RouteRecordRaw[] = [
  { path: "/", name: "ChukaPokaInit", component: ChukaPokaInit, props: true, },
  { path: "/main", name: "ChukaPokaMain", component: ChukaPokaMain },
  { path: "/tree/:id", name: "TreeDetail", component: TreeDetail, props: true },
  { path: "/tree/edit/:id", name: "TreeEdit", component: TreeEdit, props: true },
  { path: "/tree/create", name: "TreeCreate", component: TreeCreate },
  { path: "/link/:linkId", name: "ChukaPokaLink", component: ChukaPokaLink, props: true },

];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
