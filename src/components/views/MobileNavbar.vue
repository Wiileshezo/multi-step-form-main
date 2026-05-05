<script setup></script>

<template>
  <div
    class="sidebar-container-mobile display-flex direction-column justify-content-center gap1"
  >
    <div class="display-flex direction-row justify-content-center gap1">
      <h2 class="number">1</h2>
      <h2 class="number">2</h2>
      <h2 class="number">3</h2>
      <h2 class="number">4</h2>
    </div>
    <div class="display-flex direction-column">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.sidebar-container-mobile {
  display: none;
}
@media (max-width: 770px) {
  .sidebar-container-mobile {
    background-image: url(@/images/bg-sidebar-mobile.svg);
    display: flex;

    padding-top: 3rem;

    place-items: center;
    z-index: 999;
    width: 100vw;
    min-height: 30vh;
    background-repeat: no-repeat;
    background-size: cover;

    background-position: center;
  }
}
</style>
