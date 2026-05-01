<script setup>
import StepNavigation from "./StepNavigation.vue";
import SidebarSteps from "./SidebarSteps.vue";
</script>

<template>
  <div
    class="sidebar-container-mobile display-flex justify-content-center gap1"
  >
    <div><h2 class="number">1</h2></div>
    <div><h2 class="number">2</h2></div>
    <div><h2 class="number">3</h2></div>
    <div><h2 class="number">4</h2></div>
  </div>
  <base-card class="multi-step-container display-flex card">
    <sidebar-steps></sidebar-steps>
    <step-navigation></step-navigation>
  </base-card>
  <base-card class="btn-card">
    <base-button class="next-btn" mode="primary" type="submit">
      Next Step
    </base-button>
  </base-card>
</template>

<style scoped>
.multi-step-container {
  margin-top: 6vw;
  padding: 1.5rem;
  gap: 1rem;
  flex-direction: row;
  width: 70vw;
}
.card {
  background: var(--White);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.sidebar-container-mobile {
  display: none;
}

.btn-card {
  display: none;
}

@media (max-width: 600px) {
  .multi-step-container {
    flex-direction: column;
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
  .btn-card {
    display: flex;
  }
}
</style>
