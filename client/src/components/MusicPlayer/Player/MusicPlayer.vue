<template>
  <div>
    <main class="default-container">
      <AlbumPhoto />
    </main>
    <main class="default-container">
      <PlayerButton />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PlayerButton from "./PlayerButton.vue";
import AlbumPhoto from "./AlbumPhoto.vue";

export default defineComponent({
  components: {
    PlayerButton,
    AlbumPhoto,
  },
  data() {
    return {};
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.default-container {
  display: grid;
  justify-content: center;
}
</style>
