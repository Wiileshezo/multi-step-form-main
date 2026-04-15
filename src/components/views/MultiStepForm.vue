<script setup>
import StepNavigation from "./StepNavigation.vue";
import SidebarSteps from "./SidebarSteps.vue";
</script>

<template>
  <base-card class="multi-step-container display-flex direction-row card">
    <sidebar-steps></sidebar-steps>
    <step-navigation></step-navigation>
  </base-card>
</template>

<style scoped>
.multi-step-container {
  margin-top: 7vw;
  padding: 1.5rem;

  gap: 1rem;
}
.card {
  background: var(--White);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
