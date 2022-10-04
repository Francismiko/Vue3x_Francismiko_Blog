<template>
  <div class="exContainer">
    <h3>
      科目：
      <p>{{ subject }}</p>
    </h3>
    <h3>
      知识点：
      <p>{{ points }}</p>
    </h3>
    <h3>
      题型：
      <p>{{ type }}</p>
    </h3>
    <h3>
      年份：
      <p>{{ date }}</p>
    </h3>
    <h3>
      题号：
      <p>{{ number }}</p>
    </h3>
    <h3>
      内容：
      <p>{{ content }}</p>
    </h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["subject", "points", "type", "date", "number", "content"],
  components: {},
});
</script>

<style lang="scss" scoped>
.exContainer {
  display: block;
  box-sizing: border-box;
  width: 600px;
  min-height: 0px;
  padding: 1px 50px;
  border-radius: 10px;
  background-color: rgba(255, 247, 233, 0.821);
  margin: 30px auto;

  animation: change-button 0.8s linear 1;
  @keyframes change-button {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.85;
    }
    100% {
      opacity: 1;
    }
  }

  h3 {
    font-size: 20px;
    line-height: 0px;
    p {
      font-size: 18px;
      display: inline-block;
      line-height: 0px;
    }
  }
}
</style>