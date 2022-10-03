import { createStore } from "vuex";

const store = createStore({
  plugins: [],
  modules: {},
  state() {
    return {
      playerState: false, // 播放时为true
    };
  },
  mutations: {},
  actions: {},
  getters: {},
});

export default store;
