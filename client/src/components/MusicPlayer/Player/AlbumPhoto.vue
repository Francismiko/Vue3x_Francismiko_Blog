<template>
  <div>
    <main class="default-container">
      <div
        :class="{ rotateStyle: $store.state.playerState }"
        class="albumPhotoStyle"
      ></div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
});
</script>

<style lang="scss" scoped>
.default-container {
  display: inline-block;
  width: 100%;
  height: auto;
  padding: 20% 0%;
  margin: 0 auto;

  .albumPhotoStyle {
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    border: 20px solid rgb(32, 32, 32);
    background-image: url("@/assets/images/music-img/老人与海.jpg");
    background-size: cover;
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
