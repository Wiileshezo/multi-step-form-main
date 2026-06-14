<script setup>
import { useFormStore } from "@/store/formStore";

const formStore = useFormStore();
</script>

<template>
  <div class="display-flex justify-content-center direction-column gap1">
    <h1 class="title-step2">Select your plan</h1>
    <p class="desc-step2">You have the option of monthly or yearly billing.</p>
    <div class="plan-container">
      <base-card class="plan-card display-flex gap1">
        <!-- :class="formStore.plan === 'Arcade' ? 'active' : ''"
        @click="formStore.plan = 'Arcade'" -->
        <img
          src="@/images/icon-arcade.svg"
          alt="Arcade Icon"
          class="icon-img"
        />
        <div class="display-flex direction-column">
          <h3 class="plan-title">Arcade</h3>
          <p class="plan-price">
            <!-- {{ formStore.isYearly ? "$90/yr" : "$9/mo" }} -->
            $9/mo
          </p>
          <p class="plan-promo">2 months free</p>
        </div>
      </base-card>
      <base-card class="plan-card display-flex gap1">
        <!-- :class="formStore.plan === 'Advanced' ? 'active' : ''"
        @click="formStore.plan = 'Advanced'" -->
        <img
          src="@/images/icon-advanced.svg"
          alt="Advanced Icon"
          class="icon-img"
        />
        <div class="display-flex direction-column">
          <h3 class="plan-title">Advanced</h3>
          <p class="plan-price">
            <!-- {{ formStore.isYearly ? "$120/yr" : "$12/mo" }} -->
            $12/mo
          </p>
          <p class="plan-promo">2 months free</p>
        </div>
      </base-card>
      <base-card class="plan-card display-flex gap1">
        <!-- :class="formStore.plan === 'Pro' ? 'active' : ''"
        @click="formStore.plan = 'Pro'" -->
        <img src="@/images/icon-pro.svg" alt="Pro Icon" class="icon-img" />
        <div class="display-flex direction-column">
          <h3 class="plan-title">Pro</h3>
          <!-- {{ formStore.isYearly ? "$150/yr" : "$15/mo" }} -->
          <p class="plan-price">$15/mo</p>
          <p class="plan-promo">2 months free</p>
        </div>
      </base-card>
    </div>
    <div class="display-flex align-items-center justify-content-center gap1">
      <h3>Monthly</h3>
      <label class="switch">
        <input type="checkbox" />
        <span class="slider"></span>
      </label>
      <h3>Yearly</h3>
    </div>
  </div>
</template>

<style scoped>
.plan-container {
  gap: 2rem;
  margin-block: 2rem;
}
.plan-card {
  padding: 2rem 1rem;
  border: solid var(--Grey500) 1px;
}
.icon-img {
  width: 3rem;
}

/* The container/track */
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
  background-color: #ccc;
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
  transform: translateX(26px);
}

@media (min-width: 770px) {
  .plan-container {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
