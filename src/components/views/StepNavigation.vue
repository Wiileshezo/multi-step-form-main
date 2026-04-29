<script setup>
import StepPersonalInfo from "../steps/StepPersonalInfo.vue";
</script>

<template>
  <div class="step-navigation-container display-flex direction-column gap1">
    <step-personal-info></step-personal-info>
  </div>
</template>

<style scoped>
.step-navigation-container {
  flex-grow: 1;
}
</style>
