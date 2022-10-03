import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import axios from "axios";
import store from "./store";
import "element-plus/dist/index.css";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(ElementPlus);
app.mount("#app");

// 全局挂载axios
app.config.globalProperties.$axios = axios;
