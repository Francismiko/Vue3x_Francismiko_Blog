<template>
  <div class="default-container first-container">
    <h1 class="default-font-style-head">www.Francismiko.top</h1>
    <profilePhoto />
    <p class="default-font-style">
      本网站采用<a :href="Vue.url" target="_blank" class="default-link-style">{{
        Vue.name
      }}</a
      >+<a :href="Typescript.url" target="_blank" class="default-link-style">{{
        Typescript.name
      }}</a
      >技术栈，未来将陆续更新<a
        :href="React.url"
        target="_blank"
        class="default-link-style"
        >{{ React.name }}</a
      >、'ES6'、'Nuxt3'、'SCSS'、'Node.js'参考文档内容供来访者学习。菜鸡练手之作，有不足之处望多多包涵
    </p>
    <p class="default-font-style">联系方式：1485059943@qq.com</p>
    <div class="default-icon-box">
      <GithubIcon />
      <WechatIcon />
      <QQIcon />
      <TwitterIcon />
    </div>
  </div>
  <div class="default-container second-container">
    <div class="second-container-box-1">
      <p>123</p>
    </div>
    <div class="second-container-box-2">
      <p>666</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GithubIcon from "@/components/Elements/GithubIcon.vue";
import WechatIcon from "@/components/Elements/WechatIcon.vue";
import QQIcon from "@/components/Elements/QQIcon.vue";
import TwitterIcon from "@/components/Elements/TwitterIcon.vue";
import getMethods from "@/utils/getMethods.ts";
import profilePhoto from "@/components/Elements/ProfilePhoto.vue";

export default defineComponent({
  components: {
    GithubIcon,
    WechatIcon,
    QQIcon,
    TwitterIcon,
    profilePhoto,
  },
  data() {
    return {
      wheelState: true, // 滚轮监听状态是否开启
      Vue: {
        url: "https://cn.vuejs.org/",
        name: "Vue3",
      },
      Typescript: {
        url: "https://www.typescriptlang.org/",
        name: "TypeScript",
      },
      React: {
        url: "https://reactjs.org/",
        name: "React",
      },
    };
  },
  mounted() {
    if (this.$route.path == "/")
      // 主页监听鼠标滚轮监听器
      window.addEventListener("wheel", this.wheeling);
  },
  beforeRouteLeave() {
    // 路由跳转后销毁监听器
    window.removeEventListener("wheel", this.wheeling);
  },
  methods: {
    wheeling() {
      if (this.wheelState) {
        let oldScrollTop: number = getMethods.getScrollTop();
        let newScrollTop: number;
        document.body.style.overflow = "hidden";
        setTimeout(() => {
          newScrollTop = getMethods.getScrollTop();
          let scrollStep: number = newScrollTop - oldScrollTop;
          if (scrollStep < 0) {
            // 上滚
            window.scrollTo({
              top: newScrollTop - getMethods.getScreenHeight(),
              behavior: "smooth",
            });
          } else if (scrollStep > 0) {
            // 下滚
            window.scrollTo({
              top: newScrollTop + getMethods.getScreenHeight(),
              behavior: "smooth",
            });
          } else {
            return;
          }
        }, 20);
        // 节流阀
        this.wheelState = false;
        setTimeout(() => {
          this.wheelState = true;
          document.body.style.overflow = "visible";
        }, 500);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
$default-font-size: 1.6rem;
$default-font-weight: 400;
$default-font-size-head: 2.8rem;
$default-font-weight-head: 700;
$default-font-line-height: 3rem;

.default-container {
  display: block;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;

  .default-link-style {
    text-decoration: none;
    border-bottom-style: dashed;
    border-bottom-width: 1px;
    color: rgb(76, 123, 211);
    transition: all 0.2s ease-in-out;
    &:hover {
      color: rgb(143, 179, 246);
    }
  }

  .default-font-style-head {
    display: block;
    width: auto;
    min-height: 2rem;
    margin: 0rem 0rem 2rem 0rem;
    color: rgb(255, 255, 255);
    text-align: center;
    font-weight: $default-font-weight-head;
    font-size: $default-font-size-head;
  }

  .default-font-style {
    width: auto;
    min-height: 2rem;
    color: rgb(255, 255, 255);
    word-break: break-all;
    line-height: $default-font-line-height;
    font-weight: $default-font-weight;
    font-size: $default-font-size;
  }

  .default-icon-box {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    box-sizing: border-box;
    padding: 0 10%;
  }
}

.first-container {
  padding: 8rem 25% 1rem 25%;
}

.second-container {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  padding: 10% 0;
  background-color: #1a3358;

  .second-container-box-1 {
    display: gird;
  }

  .second-container-box-2 {
    display: inline-block;
  }
}
</style>