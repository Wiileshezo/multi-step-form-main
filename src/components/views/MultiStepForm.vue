<script setup>
import StepNavigation from "./StepNavigation.vue";
import DesktopSidebar from "./DesktopSidebar.vue";
</script>

<template>
  <base-card class="multi-step-container display-flex card">
    <desktop-sidebar></desktop-sidebar>
    <step-navigation></step-navigation>
  </base-card>
</template>

<style scoped>
.multi-step-container {
  padding: 1.5rem;
  gap: 1rem;
  flex-direction: row;
  width: 70vw;
  height: 70vh;
  margin-top: 5rem;
}
.card {
  background: var(--White);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

@media (max-width: 770px) {
  .multi-step-container {
    flex-direction: column;
    margin-top: -17vh;
    height: max-content;
  }

  .sidebar-container-mobile {
    background-image: url(@/images/bg-sidebar-mobile.svg);
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 30vh;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 3rem;
  }
}
</style>
