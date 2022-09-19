<template>
  <div class="demo-input-size default-container">
    <el-input
      v-model="input"
      class="w-50 m-2 el-input__inner"
      placeholder="搜索"
      :suffix-icon="Search"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";

const input = ref("");
</script>

<style lang="scss" scoped>
.default-container {
  display: flex;
  float: left;
  box-sizing: border-box;
  height: 100%;
  width: 5rem;
  margin-left: 3rem;
  padding: 1rem 0;
  transition: all 0.5s ease-in-out;
  &:hover,
  &:focus-within {
    width: 16rem;
  }

  /deep/.el-input__suffix {
    :hover {
      cursor: pointer;
    }
  }

  /deep/.el-input__inner {
    transition: all 0.5s ease-in-out;
    color: rgb(225, 225, 225);
  }

  /deep/.el-input__wrapper {
    background-color: transparent !important;
    box-shadow: 0 0 0 1px #4c895e;
    &:hover {
      box-shadow: 0 0 0 1px #85eea7;
    }
  }

  /deep/.is-focus {
    box-shadow: 0 0 0px 1px #85eea7;
  }
}
</style>