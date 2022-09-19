<template>
  <div>
    <div class="leftContainer"></div>
    <div class="rightContainer">
      <ItemContent />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ItemContent from "@/components/Content/ItemContent.vue";

export default defineComponent({
  components: {
    ItemContent,
  },
});
</script>

<style lang="scss" scoped>
.leftContainer {
  display: block;
  position: fixed;
  width: 16%;
  height: 100vh;
}

.rightContainer {
  display: block;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  padding: 5vw 20vw 0 20vw;
}
</style>