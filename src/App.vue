<script setup>
import MultiStepForm from "./components/views/MultiStepForm.vue";
import MobileNavbar from "./components/views/MobileNavbar.vue";

import { useFormStore } from "@/store/formStore";
const formStore = useFormStore();
</script>

<template>
  <mobile-navbar />
  <MultiStepForm class="multi-step-form" />
  <base-card class="btn-card">
    <base-button
      class="next-btn"
      mode="primary"
      type="button"
      @click="formStore.nextStep"
    >
      Next Step
    </base-button>
  </base-card>

  <the-footer />
</template>

<style scoped>
.multi-step-form {
  padding-inline: 2rem;
}

.btn-card {
  display: none;
  padding: 4rem 0 0;
  place-self: center;
  width: 80vw;
}

@media (max-width: 770px) {
  .btn-card {
    display: flex;
  }
}
</style>
