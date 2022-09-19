<template>
  <div>
    <div class="navContainer">
      <navOptions>
        <GithubIcon></GithubIcon>
      </navOptions>
      <navLogo :text="logo" />
      <navSearch />
      <router-link @click="checkScreenHeight" to="/sponsor">
        <navOptions :text="tag_5" />
      </router-link>
      <router-link @click="checkScreenHeight" to="">
        <navOptions :text="tag_4" />
      </router-link>
      <router-link @click="checkScreenHeight" to="">
        <navOptions :text="tag_3" />
      </router-link>
      <router-link @click="checkScreenHeight" to="/exercise">
        <navOptions :text="tag_2" />
      </router-link>
      <router-link @click="checkScreenHeight" to="/">
        <navOptions :text="tag_1" />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import navOptions from "@/components/Navigation/Component/NavOptions.vue";
import navLogo from "@/components/Navigation/Component/NavLogo.vue";
import GithubIcon from "@/components/Elements/GithubIcon.vue";
import navSearch from "@/components/Navigation/Component/NavSearch.vue";

export default defineComponent({
  components: {
    navOptions,
    navLogo,
    GithubIcon,
    navSearch,
  },
  data() {
    return {
      logo: "Francismiko",
      tag_1: "主页",
      tag_2: "模拟刷题",
      tag_3: "小工具",
      tag_4: "资源",
      tag_5: "赞助",
    };
  },
  methods: {
    checkScreenHeight() {
      // 导航到顶部位置
      window.scrollTo({
        top: 0,
      });
    },
  },
});
</script>

<style lang="scss" scoped>
/deep/.fa-github {
  font-size: 2rem;
}
.navContainer {
  position: fixed;
  box-sizing: border-box;
  z-index: 4;
  overflow: hidden;
  width: 100%;
  height: 4rem;
  padding: 0 3%;
  background-color: #161b22;
}
</style>