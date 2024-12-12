<template>
  <button class="icon-btn">
    <img :src="`/icons/${icon}.svg`" alt="icon" />
  </button>
</template>

<script lang="ts" setup>
import type { IconButtonProps } from "./interfaces";

defineProps<IconButtonProps>();
</script>

<style lang="scss">
.icon-btn {
  padding: 8px;
  border-radius: 8px;

  & img {
    width: 20px;
    height: 20px;
    color: #000;
  }
}
</style>
