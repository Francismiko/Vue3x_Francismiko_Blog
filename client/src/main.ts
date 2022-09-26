import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createStore } from "vuex";
import ElementPlus from "element-plus";
import axios from "axios";
import "element-plus/dist/index.css";

const app = createApp(App);
const store = createStore({});

app.use(router);
app.use(ElementPlus);
app.mount("#app");

// 全局挂载axios
app.config.globalProperties.$axios = axios;