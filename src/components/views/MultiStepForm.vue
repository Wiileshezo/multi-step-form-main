<script setup>
import StepNavigation from "./StepNavigation.vue";
import SidebarSteps from "./SidebarSteps.vue";
</script>

<template>
  <base-card class="multi-step-container display-flex direction-row gap1">
    <sidebar-steps></sidebar-steps>
    <step-navigation></step-navigation>
  </base-card>
</template>

<style scoped>
.multi-step-container {
  margin-top: 10vw;
  padding: 1.5rem;
  width: 80vw;
  height: 70vh;
}
</style>
