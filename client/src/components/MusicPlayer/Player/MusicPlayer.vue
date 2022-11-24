<template>
  <div>
    <main class="default-container">
      <AlbumPhoto :rotateState="rotateState" />
    </main>
    <main class="default-container">
      <ProgressBar />
    </main>
    <main class="default-container">
      <PlayerButton @changeState="playMusic" />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PlayerButton from "./PlayerButton.vue";
import AlbumPhoto from "./AlbumPhoto.vue";
import ProgressBar from "./ProgressBar.vue";

export default defineComponent({
  components: {
    PlayerButton,
    AlbumPhoto,
    ProgressBar,
  },
  data() {
    return {
      rotateState: false,
    };
  },
  methods: {
    // $emit.changeState的方法
    playMusic(playerState: boolean) {
      this.rotateState = !playerState;
    },
  },
});
</script>

<style lang="scss" scoped>
.default-container {
  display: grid;
  justify-content: center;
}
</style>
