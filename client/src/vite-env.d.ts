/* eslint-disable */
import { ComponentCustomProperties } from "@/vite-env";
import { Store } from "vuex";

/// <reference types="vite/client" />

declare module "@vue/runtime-core" {
  // declare your own store states
  interface State {
    playerState;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
