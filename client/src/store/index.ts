import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => {
    return {
      music: {
        isPlay: false, // 播放时为true
        ImgUrl: "",
      },
    };
  },
});
