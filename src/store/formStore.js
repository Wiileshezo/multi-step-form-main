import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
  state: () => ({
    step: 1,

    personalInfo: {
      name: "",
      email: "",
      phone: "",
    },

    plan: {
      type: "",
      billing: "monthly",
    },

    addons: [],
  }),

  actions: {
    nextStep() {
      if (this.step < 5) this.step++;
    },

    prevStep() {
      if (this.step > 1) this.step--;
    },

    setPlan(plan) {
      this.plan.type = plan;
    },

    toggleAddon(addon) {
      const index = this.addons.indexOf(addon);
      if (index === -1) {
        this.addons.push(addon);
      } else {
        this.addons.splice(index, 1);
      }
    },
  },
});
