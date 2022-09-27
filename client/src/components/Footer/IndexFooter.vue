<template>
  <div>
    <div class="default-container">
      <a
        href="https://beian.miit.gov.cn/"
        class="default-link-style"
        target="_blank"
        >苏ICP备2022035063号</a
      >
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
  display: grid;
  align-items: center;
  justify-items: center;
  box-sizing: border-box;
  width: 100%;
  min-height: 10vh;
  .default-link-style {
    text-decoration: none;
    border-bottom-style: dashed;
    border-bottom-width: 1px;
    color: rgb(76, 123, 211);
    transition: all 0.2s ease-in-out;
    &:hover {
      color: rgb(143, 179, 246);
    }
  }
}
</style>
