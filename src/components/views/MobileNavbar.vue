<script setup></script>

<template>
  <div
    class="sidebar-container-mobile display-flex direction-column align-items-center gap1"
  >
    <div class="display-flex direction-row gap1">
      <h2 class="number">1</h2>
      <h2 class="number">2</h2>
      <h2 class="number">3</h2>
      <h2 class="number">4</h2>
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
    justify-content: flex-start;

    /* place-items: center; */
    z-index: 999;
    width: 100vw;
    min-height: 30vh;
    background-repeat: no-repeat;
    background-size: cover;

    background-position: center;
  }
}
</style>
