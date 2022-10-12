<template>
  <div>
    <main class="default-container">
      <div :class="{ rotateStyle: store.music.playerState }" class="albumPhotoStyle">
        <img/>
        <div class="red-core"></div>
      </div>
    </main>
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
});
</script>

<style lang="scss" scoped>
.default-container {
  display: flex;
  width: 100%;
  height: auto;
  padding: 20% 0%;
  margin: 0 auto;

  .albumPhotoStyle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    border: 1rem solid rgb(32, 32, 32);
    background-color: black;

    .red-core {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: rgb(194, 29, 29);
  }
  }

  .rotateStyle {
    animation: rotate 25s linear infinite;
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
