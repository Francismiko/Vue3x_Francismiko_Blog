<template>
  <div>
    <el-scrollbar height="60vh">
       <span @click="getMusic">123123</span>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
// import axios from "axios";

export default defineComponent({
  components: {},
  data() {
    return {
    };
  },
  methods: {
    getMusic() {
      axios({
        method: "get",
        url: "https://francismiko-1312276558.cos.ap-shanghai.myqcloud.com/music-player/image/ddb18e04386fc163fa152d45266c21d5.jfif",
      }).then((res) => {
        console.log(res);
      });
    }
  },
});
</script>

<style lang="scss" scoped>
</style>
