<script setup>
import { useFormStore } from "@/store/formStore";

const formStore = useFormStore();
</script>

<template>
  <div class="display-flex justify-content-center direction-column gap1">
    <h1 class="title-step">Pick add-ons</h1>
    <p class="desc-step">Add-ons help enhance your experience.</p>
  </div>
  <div class="add-on-container display-flex direction-column gap1">
    <base-card
      class="add-on-card display-flex direction-row gap1 justify-content-space-between align-items-center"
    >
      <div class="display-flex direction-row gap1">
        <input type="checkbox" name="" id="" />
        <div class="add-on-info display-flex direction-column">
          <h3>Online service</h3>
          <p>Access to multiplayer games</p>
        </div>
      </div>
      <p class="add-on-price">+$1/mo</p>
    </base-card>
    <base-card
      class="add-on-card display-flex direction-row gap1 justify-content-space-between align-items-center"
    >
      <div class="display-flex direction-row gap1">
        <input type="checkbox" name="" id="" />
        <div class="add-on-info display-flex direction-column">
          <h3>Large storage</h3>
          <p>Extra 1TB of cloud save</p>
        </div>
      </div>
      <p class="add-on-price">+$2/mo</p>
    </base-card>
    <base-card
      class="add-on-card display-flex direction-row gap1 justify-content-space-between align-items-center"
    >
      <div class="display-flex direction-row gap1">
        <input type="checkbox" name="" id="" />
        <div class="add-on-info display-flex direction-column">
          <h3>Customizable profile</h3>
          <p>Custom theme on your profile</p>
        </div>
      </div>
      <p class="add-on-price">+$2/mo</p>
    </base-card>
  </div>
</template>

<style scoped>
.add-on-container {
  margin-top: 2rem;
}
.add-on-card {
  /* justify-content: space-between; */
  padding: 1rem;
  border: solid var(--Grey500) 1px;
  border-radius: 10px;
  cursor: pointer;
}
.add-on-info {
  align-items: flex-start;
}
.add-on-price {
  color: var(--Purple600);
}
</style>
