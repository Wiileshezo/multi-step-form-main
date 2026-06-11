import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useFormStore = defineStore("form)", () => {
  // state
  const users = ref([]);

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

  // actions
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

    if (!valid) return;

    users.value.push({
      name: form.name,
      email: form.email,
      phone: form.phone,
    });

    form.name = "";
    form.email = "";
    form.phone = "";
  }

  const step = ref(1);

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
    users,
    form,
    errors,

    addUser,

    step,
    nextStep,
    prevStep,
  };
});
