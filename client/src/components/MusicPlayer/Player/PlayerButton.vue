<template>
  <div>
    <audio ref="audio">
      <source src="" />
    </audio>
    <div class="default-container">
      <span class="span-col-3">
        <el-progress :percentage="percentage" :show-text="false" />
      </span>
      <span class="default-playerButton">
        <svg
          t="1664448896987"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="11096"
          width="64"
          height="64"
        >
          <path
            d="M885.333333 938.713333a53.58 53.58 0 0 0 53.333334-53.433333V138.72a53.333333 53.333333 0 0 0-80.886667-45.666667L239.133333 466.333333a53.333333 53.333333 0 0 0 0 91.333334l618.666667 373.28a53.16 53.16 0 0 0 27.533333 7.766666z m-0.046666-810.666666a10.98 10.98 0 0 1 5.333333 1.42 10.466667 10.466667 0 0 1 5.42 9.286666v746.526667a10.666667 10.666667 0 0 1-16.18 9.133333l-618.666667-373.28a10.666667 10.666667 0 0 1 0-18.266666l618.666667-373.28a10.386667 10.386667 0 0 1 5.406667-1.586667zM85.333333 917.333333V106.666667a21.333333 21.333333 0 0 1 42.666667 0v810.666666a21.333333 21.333333 0 0 1-42.666667 0z"
            fill="#2c2c2c"
            p-id="11097"
          ></path>
        </svg>
      </span>
      <span
        v-show="!store.music.isPlay"
        @click="playMusic"
        class="default-playerButton"
      >
        <svg
          t="1664447707705"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="7769"
          width="64"
          height="64"
        >
          <path
            d="M512 42.666667C252.793333 42.666667 42.666667 252.793333 42.666667 512s210.126667 469.333333 469.333333 469.333333 469.333333-210.126667 469.333333-469.333333S771.206667 42.666667 512 42.666667z m0 896c-235.64 0-426.666667-191.026667-426.666667-426.666667s191.026667-426.666667 426.666667-426.666667 426.666667 191.026667 426.666667 426.666667-191.026667 426.666667-426.666667 426.666667z m-74.666667-213.38a53.373333 53.373333 0 0 1-53.333333-53.333334V352.066667A53.333333 53.333333 0 0 1 467.373333 308L702 467.933333a53.333333 53.333333 0 0 1 0 88.133334L467.373333 716a53.286667 53.286667 0 0 1-30.04 9.286667z m0.08-383.933334a11.093333 11.093333 0 0 0-5.08 1.28 10.446667 10.446667 0 0 0-5.666666 9.433334v319.866666a10.666667 10.666667 0 0 0 16.666666 8.82l234.666667-159.94a10.666667 10.666667 0 0 0 0-17.626666l-234.666667-159.933334a10.313333 10.313333 0 0 0-5.906666-1.92z"
            fill="#2c2c2c"
            p-id="7770"
          ></path>
        </svg>
      </span>
      <span
        v-show="store.music.isPlay"
        @click="playMusic"
        class="default-playerButton"
      >
        <svg
          t="1664453303494"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="12183"
          width="64"
          height="64"
        >
          <path
            d="M512 42.666667C252.793333 42.666667 42.666667 252.793333 42.666667 512s210.126667 469.333333 469.333333 469.333333 469.333333-210.126667 469.333333-469.333333S771.206667 42.666667 512 42.666667z m0 896c-235.64 0-426.666667-191.026667-426.666667-426.666667s191.026667-426.666667 426.666667-426.666667 426.666667 191.026667 426.666667 426.666667-191.026667 426.666667-426.666667 426.666667z m106.666667-213.333334a21.333333 21.333333 0 0 1-21.333334-21.333333V320a21.333333 21.333333 0 0 1 42.666667 0v384a21.333333 21.333333 0 0 1-21.333333 21.333333z m-213.333334 0a21.333333 21.333333 0 0 1-21.333333-21.333333V320a21.333333 21.333333 0 0 1 42.666667 0v384a21.333333 21.333333 0 0 1-21.333334 21.333333z"
            fill="#2c2c2c"
            p-id="12184"
          ></path>
        </svg>
      </span>
      <span class="default-playerButton">
        <svg
          t="1664448864261"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="10142"
          width="64"
          height="64"
        >
          <path
            d="M138.666667 938.713333a53.58 53.58 0 0 1-53.333334-53.433333V138.72a53.333333 53.333333 0 0 1 80.886667-45.666667l618.666667 373.28a53.333333 53.333333 0 0 1 0 91.333334l-618.666667 373.28a53.16 53.16 0 0 1-27.553333 7.766666z m0.046666-810.666666a10.98 10.98 0 0 0-5.333333 1.42 10.466667 10.466667 0 0 0-5.38 9.253333v746.56a10.666667 10.666667 0 0 0 16.18 9.133333l618.666667-373.28a10.666667 10.666667 0 0 0 0-18.266666l-618.666667-373.28a10.386667 10.386667 0 0 0-5.446667-1.586667zM938.666667 917.333333V106.666667a21.333333 21.333333 0 0 0-42.666667 0v810.666666a21.333333 21.333333 0 0 0 42.666667 0z"
            fill="#2c2c2c"
            p-id="10143"
          ></path>
        </svg>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store/index.ts";

export default defineComponent({
  components: {},
  setup() {
    const store = useStore();
    return {
      store
    }
  },
  data() {
    return {
      percentageTimer: 0, // ??????????????????
      percentage: 0,
    };
  },
  mounted() {
    const audio = this.$refs.audio as HTMLAudioElement;
    this.percentageTimer = window.setInterval(() => {
      this.percentage = (audio.currentTime / audio.duration) * 100;
    }, 500);
  },
  unmounted() {
    if (this.percentage) {
      clearInterval(this.percentageTimer);
    }
  },
  methods: {
    playMusic() {
      const audio = this.$refs.audio as HTMLAudioElement;

      // ??????store??????
      this.store.$state = {
        music: {
          isPlay: !this.store.music.isPlay,
        }
      };
      this.store.music.isPlay ? audio.play() : audio.pause();
    },
  },
});
</script>

<style lang="scss" scoped>
.default-container {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem 5rem;
  box-sizing: border-box;
  width: 100%;
  padding-top: 4rem;

  .span-col-3 {
    grid-column: span 3 / auto;
  }

  .default-playerButton {
    :hover {
      cursor: pointer;
    }
  }
}
</style>
