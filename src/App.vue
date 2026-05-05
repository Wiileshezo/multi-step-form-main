<script setup>
import MultiStepForm from "./components/views/MultiStepForm.vue";
import MobileNavbar from "./components/views/MobileNavbar.vue";
</script>

<template>
  <mobile-navbar>
    <MultiStepForm class="multi-step-form" />
  </mobile-navbar>

  <base-card class="btn-card">
    <base-button class="next-btn" mode="primary" type="submit">
      Next Step
    </base-button>
  </base-card>

  <the-footer />
</template>

<style>
.multi-step-form {
  padding-inline: 2rem;
}

.btn-card {
  display: none;
  padding: 6rem 2rem 0 0;
  z-index: 999;
}
</style>
