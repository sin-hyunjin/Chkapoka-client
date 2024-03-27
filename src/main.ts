import { createApp } from "vue";
import App from "@/App.vue";
import { VueQueryPlugin } from "vue-query";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "@/router";
import { createPinia } from "pinia";
import "@/assets/colors.scss";
import "@/assets/typography.scss";
import "@/assets/variables.scss";

const pinia = createPinia();
const app = createApp(App);
app.use(VueQueryPlugin);
app.use(ElementPlus);
app.use(pinia);
app.use(router);
app.mount("#app");
