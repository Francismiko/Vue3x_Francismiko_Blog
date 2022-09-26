<template>
  <div class="test">
    <button @click="test()">点击进行测试</button>
    <p>{{ demo }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  components: {},
  data: function () {
    return {
      demo: "",
    };
  },
  methods: {
    test() {
      axios({
        method: "get",
        url: "http://localhost:3000",
      }).then((res) => {
        console.log(res);
        this.demo = res.data;
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.test {
  position: absolute;
  top: 50%;
  left: 50%;

  p {
    color: aliceblue;
  }
}
</style>
