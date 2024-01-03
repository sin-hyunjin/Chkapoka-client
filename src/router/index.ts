import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ChukaPokaInit from "@/views/init/index.vue";
import ChukaPokaMain from "@/views/main/index.vue";
import TreeDetail from "@/views/tree/detail/index.vue";
import TreeCreate from "@/views/tree/create/index.vue";
import TreeItemDetail from "@/views/treeitem/detail/index.vue";
import TreeItemCreate from "@/views/treeitem/create/index.vue";
import TreeItemEdit from "@/views/treeitem/edit/index.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "ChukaPokaInit", component: ChukaPokaInit },
  { path: "/main", name: "ChukaPokaMain", component: ChukaPokaMain },
  { path: "/tree/:id", name: "TreeDetail", component: TreeDetail, props: true },
  { path: "/tree/create", name: "TreeCreate", component: TreeCreate },
  {
    path: "/treeitem/:id",
    name: "TreeItemDetail",
    component: TreeItemDetail,
    props: true,
  },
  {
    path: "/treeitem/create",
    name: "TreeItemCreate",
    component: TreeItemCreate,
  },
  {
    path: "/treeitem/:id/edit",
    name: "TreeItemEdit",
    component: TreeItemEdit,
    props: true,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
