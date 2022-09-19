<template>
  <div>
    <a href="https://github.com/Francismiko" target="_blank">
      <i class="fa fa-github"></i>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Lato);
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);
.fa-github {
  font-size: 4rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active {
    cursor: pointer;
    color: rgb(255, 255, 255);
  }
}
</style>