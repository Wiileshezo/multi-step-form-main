<script setup>
import { computed } from "vue";
import { useFormStore } from "@/store/formStore";

const formStore = useFormStore();

const arcadeClass = computed(() => ({
  selectedPlan: formStore.Arcade,
}));

const advancedClass = computed(() => ({
  selectedPlan: formStore.Advanced,
}));

const proClass = computed(() => ({
  selectedPlan: formStore.Pro,
}));

const monthlyClass = computed(() => ({
  "text-active": formStore.isMonthly,
  "text-inactive": !formStore.isMonthly,
}));

const yearlyClass = computed(() => ({
  "text-active": !formStore.isMonthly,
  "text-inactive": formStore.isMonthly,
}));
</script>

<template>
  <div class="display-flex justify-content-center direction-column gap1">
    <h1 class="title-step">Select your plan</h1>
    <p class="desc-step">You have the option of monthly or yearly billing.</p>
    <div class="plan-container gap1">
      <base-card
        class="plan-card display-flex gap1"
        @click="formStore.selectArcade()"
        :class="arcadeClass"
      >
        <img
          src="@/images/icon-arcade.svg"
          alt="Arcade Icon"
          class="icon-img"
        />
        <div class="display-flex direction-column">
          <h3 class="plan-title">Arcade</h3>
          <p class="plan-price">
            {{ formStore.arcadePrice }}
          </p>
          <p class="plan-promo" v-if="formStore.isYearly">2 months free</p>
        </div>
      </base-card>
      <base-card
        class="plan-card display-flex gap1"
        @click="formStore.selectAdvanced()"
        :class="advancedClass"
      >
        <img
          src="@/images/icon-advanced.svg"
          alt="Advanced Icon"
          class="icon-img"
        />
        <div class="display-flex direction-column">
          <h3 class="plan-title">Advanced</h3>
          <p class="plan-price">
            {{ formStore.advancedPrice }}
          </p>
          <p class="plan-promo" v-if="formStore.isYearly">2 months free</p>
        </div>
      </base-card>
      <base-card
        class="plan-card display-flex gap1"
        @click="formStore.selectPro()"
        :class="proClass"
      >
        <img src="@/images/icon-pro.svg" alt="Pro Icon" class="icon-img" />
        <div class="display-flex direction-column">
          <h3 class="plan-title">Pro</h3>
          <p class="plan-price">{{ formStore.proPrice }}</p>
          <p class="plan-promo" v-if="formStore.isYearly">2 months free</p>
        </div>
      </base-card>
    </div>
    <div
      class="display-flex align-items-center justify-content-center gap1 toggle-container"
    >
      <h3 :class="monthlyClass">Monthly</h3>
      <label class="switch">
        <input type="checkbox" v-model="formStore.isMonthly" />
        <span class="slider"></span>
      </label>
      <h3 :class="yearlyClass">Yearly</h3>
    </div>
  </div>
</template>

<style scoped>
.plan-container {
  margin-block: 2rem;
}
.plan-card {
  padding: 1rem 2rem 1rem 1rem;
  border: solid var(--Grey500) 1px;
  border-radius: 10px;
  cursor: pointer;
  flex-direction: row;
  margin-bottom: 1rem;
}
.icon-img {
  width: 3rem;
}
.plan-title {
  margin-top: 0;
}
.plan-promo {
  color: var(--Blue950);
}
.text-active {
  color: var(--Blue950);
  transition: 0.3s ease;
}

.text-inactive {
  color: var(--Grey500);
  transition: 0.3s ease;
}

h3,
p {
  line-height: 1.5rem;
}

.selectedPlan {
  border: 3px solid var(--Blue950);
}

/* The container/track */
.toggle-container {
  background-color: var(--Blue100);
  padding: 1rem;
  border-radius: 10px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide the default checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider track */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--Blue950); /* Neutral Grey */
  transition: 0.4s;
  border-radius: 34px; /* Makes it round */
}

/* The knob inside the slider */
.slider::before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50px; /* Makes the knob a circle */
}

/* --- THE TOGGLE STATES --- */

/* Change track color when checked */
input:checked + .slider {
  background-color: var(--Blue950); /* Modern Blue */
}

/* Move the knob to the right when checked */
input:checked + .slider::before {
  transform: translateX(0px);
}
.slider::before {
  transform: translateX(26px);
}

@media (min-width: 770px) {
  .plan-container {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .plan-card {
    flex-direction: column;
  }
  .plan-title {
    margin-top: 2rem;
  }
}
</style>
