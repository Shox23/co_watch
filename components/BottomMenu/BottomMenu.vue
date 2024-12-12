<template>
  <div class="bottom-menu">
    <nav class="bottom-menu__nav">
      <IconButton v-for="item in 5" :key="item" icon="search" />
    </nav>
  </div>
</template>

<style lang="scss">
.bottom-menu {
  padding: 4px;
  width: max-content;
  border-radius: 8px;
  background-color: $primary-color;

  &__nav {
    display: flex;
    gap: 4px;
  }
}
</style>
