<template>
  <div class="default-container">
    <div class="options-text">
      {{ text }}
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: String,
  },
});
</script>

<style lang="scss" scoped>
$default-font-size: 1.2rem;
$default-font-color: #c4d3d1;
$hover-font-color: rgb(0, 206, 113);
$font-transition-time: 0.3s;
.default-container {
  display: flex;
  float: right;
  height: 100%;
  width: auto;
  padding: 0 1.5rem 0 0;

  .options-text {
    align-self: center;
    color: $default-font-color;
    text-decoration: none;
    font-size: $default-font-size;
    transition: all $font-transition-time ease-in;

    &:hover {
      cursor: pointer;
      color: $hover-font-color;
      transition: all $font-transition-time ease-in-out;
    }
  }
}
</style>