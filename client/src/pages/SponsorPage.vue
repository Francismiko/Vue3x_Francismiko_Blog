<template>
  <div>
    <button class="test" @click="test()">点击进行测试</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  components: {},
  methods: {
    test() {
      axios({
        method: "get",
        url: "http://localhost:3000",
      }).then((res) => {
        console.log(res);
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
  background-color: aqua;
}
</style>
