<template>
  <span class="first-container">
    <h1 class="default-font-style-head">Francismiko's 前端驿站</h1>
    <ProfilePhoto />
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
    <div class="icon-box">
      <GithubIcon />
      <WechatIcon />
      <QQIcon />
      <TwitterIcon />
    </div>
  </span>
  <span class="second-container">
    <div class="glass-container">
      <div class="second-container-box-1">
        <MusicPlayer />
      </div>
      <div class="second-container-box-2">
        <div class="itemList-container">
          <MusicLists />
        </div>
      </div>
    </div>
  </span>
  <span class="third-container">
    
  </span>
  <IndexFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GithubIcon from "@/components/Elements/GithubIcon.vue";
import WechatIcon from "@/components/Elements/WechatIcon.vue";
import QQIcon from "@/components/Elements/QQIcon.vue";
import TwitterIcon from "@/components/Elements/TwitterIcon.vue";
import ProfilePhoto from "@/components/Elements/ProfilePhoto.vue";
import IndexFooter from "@/components/Footer/IndexFooter.vue";
import MusicPlayer from "@/components/MusicPlayer/Player/MusicPlayer.vue";
import MusicLists from "@/components/MusicPlayer/Lists/MusicLists.vue";

export default defineComponent({
  components: {
    GithubIcon,
    WechatIcon,
    QQIcon,
    TwitterIcon,
    ProfilePhoto,
    IndexFooter,
    MusicPlayer,
    MusicLists,
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
    // if (this.$route.path == "/")
    //   // 主页监听鼠标滚轮监听器
    //   window.addEventListener("wheel", this.wheeling);
  },
  beforeRouteLeave() {
    // // 路由跳转后销毁监听器
    // window.removeEventListener("wheel", this.wheeling);
  },
  methods: {
    wheeling() {
      if (this.wheelState) {
        let oldScrollTop: number = window.pageYOffset;
        let newScrollTop: number;
        document.body.style.overflow = "hidden";
        setTimeout(() => {
          newScrollTop = window.pageYOffset;
          let scrollStep: number = newScrollTop - oldScrollTop;
          if (scrollStep < 0) {
            // 上滚
            window.scrollTo({
              top: newScrollTop - window.innerHeight,
              behavior: "smooth",
            });
          } else if (scrollStep > 0) {
            // 下滚
            window.scrollTo({
              top: newScrollTop + window.innerHeight,
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

@mixin default-container() {
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
}

.first-container {
  background-color:#0d1117;
  @include default-container();
  padding: 8rem 25% 1rem 25%;

  .icon-box {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    box-sizing: border-box;
    padding: 0 10%;
  }
}

.second-container {
  @include default-container();
  padding: 16vh 30vh 8vh 30vh;

  .glass-container {
    display: grid;
    box-sizing: border-box;
    width: 100%;
    height: 100vh - 12vh * 2;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10rem;
    background: rgba(255, 255, 255, 0.393);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    box-shadow: inset 7px 7px 14px rgba(255, 255, 255, 0.393),
                inset -7px -7px 14px #ffffffc5;

    .second-container-box-1 {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
    .second-container-box-2 {
      display: inline-block;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 2rem 4rem 2rem 2rem;
      .itemList-container {
        display: block;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 1rem 2rem 0 3rem;
        border-radius: 4px;
        background: #e1e1e1;
        box-shadow: inset 6px 6px 12px #757575,
                    inset -6px -6px 12px #ffffff99;
      }
    }
  }
}

.third-container {
  @include default-container();
  padding: 16vh 30vh 8vh 30vh;
  background: linear-gradient(to bottom, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
