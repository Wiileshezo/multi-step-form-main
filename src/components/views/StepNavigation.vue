<script setup>
import { computed, KeepAlive } from "vue";

import Step1 from "../steps/Step1.vue";
import Step2 from "../steps/Step2.vue";
import Step3 from "../steps/Step3.vue";
import Step4 from "../steps/Step4.vue";
import ThankYou from "../steps/ThankYou.vue";

import { useFormStore } from "@/store/formStore";

const formStore = useFormStore();

const steps = {
  1: Step1,
  2: Step2,
  3: Step3,
  4: Step4,
  5: ThankYou,
};

const currentComponent = computed(() => steps[formStore.step]);
</script>

<template>
  <div class="step-navigation-container display-flex gap1">
    <form @submit.prevent>
      <KeepAlive>
        <component :is="currentComponent" />
      </KeepAlive>
      <base-card class="btn-card btn-position display-flex gap1">
        <base-button
          type="button"
          mode="flat"
          @click="formStore.prevStep"
          v-if="formStore.step !== 1 && formStore.step !== 5"
        >
          Go Back
        </base-button>
        <base-button
          class="next-btn"
          type="button"
          @click="formStore.nextStep"
          v-if="formStore.step < 5"
        >
          Next Step
        </base-button>
      </base-card>
    </form>
  </div>
</template>

<style scoped>
.step-navigation-container {
  justify-content: center;
  flex-grow: 1;
}

.next-btn {
  margin-top: 5rem;

  margin-left: auto;
}

@media (max-width: 770px) {
  .btn-card {
    display: none;
  }
}
</style>
