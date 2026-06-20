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

  const Arcade = ref(true); // default selected
  const Advanced = ref(false);
  const Pro = ref(false);

  const isMonthly = ref(true); // default
  const isYearly = computed(() => !isMonthly.value);

  const selectedPlan = ref("Arcade");

  const arcadePrice = computed(() => (isMonthly.value ? "$9/mo" : "$90/yr"));

  const advancedPrice = computed(() =>
    isMonthly.value ? "$12/mo" : "$120/yr",
  );

  const proPrice = computed(() => (isMonthly.value ? "$15/mo" : "$150/yr"));

  // =================
  // actions - validation
  // =================

  // =================
  // step 1
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

  // =================
  // step 2
  // =================

  function selectArcade() {
    Arcade.value = true;
    Advanced.value = false;
    Pro.value = false;

    selectedPlan.value = "Arcade";
  }

  function selectAdvanced() {
    Arcade.value = false;
    Advanced.value = true;
    Pro.value = false;

    selectedPlan.value = "Advanced";
  }

  function selectPro() {
    Arcade.value = false;
    Advanced.value = false;
    Pro.value = true;

    selectedPlan.value = "Pro";
  }

  function addPlan() {
    if (!selectedPlan.value) {
      isStep2Valid.value = false;
      return false;
    }

    isStep2Valid.value = true;
    return true;
  }

  // =================
  // step 3
  // =================

  function addAddOns() {
    isStep3Valid.value = true;
    return true;
  }

  // =================
  // step 4
  // =================

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

  const nextBtn = computed(() => {
    return step.value === 4 ? "Confirm" : "Next Step";
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

    Arcade,
    Advanced,
    Pro,
    isMonthly,
    isYearly,
    arcadePrice,
    advancedPrice,
    proPrice,
    selectedPlan,

    // validation state
    isStep1Valid,
    isStep2Valid,
    isStep3Valid,
    isStep4Valid,

    // ui
    showGoBack,
    showNextStep,
    nextBtn,

    // actions
    addUser,
    addPlan,
    addAddOns,
    addSummary,

    selectArcade,
    selectAdvanced,
    selectPro,

    handleNext,
    nextStep,
    prevStep,
  };
});
