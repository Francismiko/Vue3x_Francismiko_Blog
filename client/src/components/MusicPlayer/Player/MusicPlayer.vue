<template>
  <div>
    <albumPhoto />
    <playerButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import playerButton from "./PlayerButton.vue";
import albumPhoto from "./AlbumPhoto.vue";

export default defineComponent({
  components: {
    playerButton,
    albumPhoto,
  },
});
</script>

<style lang="scss" scoped></style>
