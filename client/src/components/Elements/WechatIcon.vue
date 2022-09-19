<template>
  <div>
    <i class="fa fa-wechat"></i>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Lato);
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);
.fa-wechat {
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