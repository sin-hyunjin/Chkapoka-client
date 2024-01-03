import { createApp } from "vue";
import App from "@/App.vue";
import { VueQueryPlugin } from "vue-query";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "@/router";

const app = createApp(App);
app.use(VueQueryPlugin);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
