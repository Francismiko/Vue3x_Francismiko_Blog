<template>
  <BackGround/>
  <NavigationBar/>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BackGround from "../src/components/BackGround/BackGround.vue";
import NavigationBar from "../src/components/Navigation/NavigationBar.vue";

export default defineComponent({
  name: 'App',
  components: {
    BackGround,
    NavigationBar,
  },
});
</script>

<style>
@import "../src/assets/css/init.css";
</style>
