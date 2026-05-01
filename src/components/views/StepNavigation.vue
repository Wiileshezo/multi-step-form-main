<script setup>
import StepPersonalInfo from "../steps/StepPersonalInfo.vue";
</script>

<template>
  <div class="step-navigation-container gap1">
    <step-personal-info></step-personal-info>
  </div>
</template>

<style scoped>
.step-navigation-container {
  display: grid;
  flex-grow: 1;
}
</style>
