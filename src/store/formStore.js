import { defineStore } from "pinia";
import { reactive, ref, computed } from "vue";

export const useFormStore = defineStore("form", () => {
  // =================
  // state
  // =================
  const users = ref([]);

  const step = ref(1);

  const isStep1Valid = ref(false);
  const isStep2Valid = ref(false);
  const isStep3Valid = ref(false);
  const isStep4Valid = ref(false);

  const form = reactive({
    name: "",
    email: "",
    phone: "",
  });

  const errors = reactive({
    name: false,
    email: false,
    phone: false,
  });

  // =================
  // actions - validation
  // =================
  function addUser() {
    errors.name = false;
    errors.email = false;
    errors.phone = false;

    let valid = true;

    if (!form.name || /\d/.test(form.name)) {
      errors.name = true;
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      errors.email = true;
      valid = false;
    }

    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(form.phone)) {
      errors.phone = true;
      valid = false;
    }

    isStep1Valid.value = valid;

    if (!valid) return false;

    users.value.push({
      name: form.name,
      email: form.email,
      phone: form.phone,
    });

    return true;
  }

  function addPlan() {
    isStep2Valid.value = true;
    return true;
  }

  function addAddOns() {
    isStep3Valid.value = true;
    return true;
  }

  function addSummary() {
    isStep4Valid.value = true;
    return true;
  }

  // =================
  // computed UI state
  // =================
  const showGoBack = computed(() => {
    return step.value > 1 && step.value < 5;
  });

  const showNextStep = computed(() => {
    return step.value < 5;
  });

  // =================
  // navigation logic
  // =================
  function handleNext() {
    switch (step.value) {
      case 1:
        if (addUser()) nextStep();
        break;

      case 2:
        if (addPlan()) nextStep();
        break;

      case 3:
        if (addAddOns()) nextStep();
        break;

      case 4:
        if (addSummary()) nextStep();
        break;
    }
  }

  function nextStep() {
    if (step.value < 5) {
      step.value++;
    }
  }

  function prevStep() {
    if (step.value > 1) {
      step.value--;
    }
  }

  return {
    // state
    users,
    step,
    form,
    errors,

    // validation state
    isStep1Valid,
    isStep2Valid,
    isStep3Valid,
    isStep4Valid,

    // ui
    showGoBack,
    showNextStep,

    // actions
    addUser,
    addPlan,
    addAddOns,
    addSummary,

    handleNext,
    nextStep,
    prevStep,
  };
});
