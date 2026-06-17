<script setup>
import MultiStepForm from "./components/views/MultiStepForm.vue";
import MobileNavbar from "./components/views/MobileNavbar.vue";

import { useFormStore } from "@/store/formStore";
const formStore = useFormStore();
</script>

<template>
  <mobile-navbar />
  <MultiStepForm class="multi-step-form" />
  <base-card class="btn-card btn-position display-flex gap1">
    <base-button
      type="button"
      mode="flat"
      @click="formStore.prevStep"
      v-if="formStore.showGoBack"
    >
      Go Back
    </base-button>
    <base-button
      class="next-btn"
      type="button"
      @click="formStore.handleNext"
      v-if="formStore.showNextStep"
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
  padding: 1rem 2rem;
  border-radius: 0;
  background-color: var(--Blue50);
  margin-top: 5rem;
  /* place-self: center;
  width: 80vw; */
}
.next-btn {
  margin-left: auto;
}

@media (max-width: 770px) {
  .btn-card {
    display: flex;
  }
}
</style>
