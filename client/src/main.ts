import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import axios from "axios";
import "element-plus/dist/index.css";

const app = createApp(App);
const store = createPinia();

app.use(router);
app.use(store);
app.use(ElementPlus);
app.mount("#app");

// 全局挂载axios
app.config.globalProperties.$axios = axios;
