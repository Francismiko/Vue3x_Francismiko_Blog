<template>
  <div class="default-img-container">
    <a href="https://github.com/Francismiko" target="_blank">
      <img
      src="https://avatars.githubusercontent.com/u/90331869?v=4"
      class="profile-img-style"
      alt="哎呀加载失败了"
    />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
.default-img-container {
  text-align: center;
  .profile-img-style {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    transition: 0.6s all ease;
    box-shadow:  0px 0px 50px #4278b2;
    &:hover {
      box-shadow: 0px 0px 15px 2px #85eea7;
    }
  }
}
</style>