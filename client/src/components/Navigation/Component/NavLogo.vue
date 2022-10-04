<template>
  <div class="default-container">
    <div class="sign">
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: String,
  },
});
</script>

<style lang="scss" scoped>
.default-container {
  display: flex;
  float: left;
  height: 100%;
  width: auto;
  padding: 0rem 2rem;

  .sign {
    align-self: center;
    font-size: 2.4em;
    color: #c6e2ff;
    animation: neon 1.5s ease-in-out infinite alternate;
    user-select: none;
  }

  @keyframes neon {
    from {
      text-shadow: 0 0 0px rgba(202, 228, 225, 0.621),
        0 0 30px rgba(202, 228, 225, 0.34), 0 0 12px rgba(30, 132, 242, 0.52),
        0 0 21px rgba(30, 132, 242, 0.92), 0 0 34px rgba(30, 132, 242, 0.78),
        0 0 54px rgba(30, 132, 242, 0.92);
    }
    to {
      text-shadow: 0 0 4px rgb(215, 232, 230),
        0 0 30px rgba(202, 228, 225, 0.42), 0 0 12px rgba(30, 132, 242, 0.58),
        0 0 22px rgba(30, 132, 242, 0.84), 0 0 38px rgba(30, 132, 242, 0.88),
        0 0 60px rgba(30, 132, 242, 1);
    }
  }
}
</style>