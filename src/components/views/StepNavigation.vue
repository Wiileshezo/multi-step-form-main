<script setup>
import { ref, computed } from "vue";

import Step1 from "../steps/Step1.vue";
import Step2 from "../steps/Step2.vue";
import Step3 from "../steps/Step3.vue";
import Step4 from "../steps/Step4.vue";
// import ThankYou from "../steps/ThankYou.vue";

import { useFormStore } from "@/store/formStore";

const formStore = useFormStore();

const step = ref(1);

const steps = {
  1: Step1,
  2: Step2,
  3: Step3,
  4: Step4,
};

const currentComponent = computed(() => steps[step.value]);

function nextStep() {
  if (step.value < 4) {
    step.value++;
  }
}

function prevStep() {
  if (step.value > 1) {
    step.value--;
  }
}
</script>

<template>
  <div class="step-navigation-container display-flex gap1">
    <form @submit.prevent="formStore.addUser()">
      <component :is="currentComponent" />
      <!-- <thank-you v-if="step === 5"></thank-you> -->

      <base-card class="btn-card">
        <base-button
          class="next-btn"
          type="submit"
          v-if="step > 1"
          @click="prevStep"
        >
          Go Back
        </base-button>
        <base-button
          class="next-btn"
          mode="flat"
          type="submit"
          v-if="step > 1"
          @click="nextStep"
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
}

@media (max-width: 770px) {
  .btn-card {
    display: none;
  }
}
</style>
