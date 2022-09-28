<template>
  <div>
    <div class="default-container">
      <div class="albumPhotoStyle"></div>
    </div>
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
  width: 100%;
  height: 50%;

  .albumPhotoStyle {
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    background-image: url('@/assets/images/music-img/老人与海.jpg');
    background-size: cover;
  }
}
</style>
