<script setup></script>

<template>
  <div class="sidebar-container display-flex direction-column gap1">
    <div class="display-flex direction-row gap1 align-items-center">
      <h2 class="number">1</h2>
      <div class="display-flex direction-column">
        <p class="step">STEP 1</p>
        <p class="step-title">YOUR INFO</p>
      </div>
    </div>
    <div class="display-flex direction-row gap1 align-items-center">
      <h2 class="number">2</h2>
      <div class="display-flex direction-column">
        <p class="step">STEP 2</p>
        <p class="step-title">SELECT PLAN</p>
      </div>
    </div>
    <div class="display-flex direction-row gap1 align-items-center">
      <h2 class="number">3</h2>
      <div class="display-flex direction-column">
        <p class="step">STEP 3</p>
        <p class="step-title">ADD-ONS</p>
      </div>
    </div>
    <div class="display-flex direction-row gap1 align-items-center">
      <h2 class="number">4</h2>
      <div class="display-flex direction-column">
        <p class="step">STEP 4</p>
        <p class="step-title">SUMMARY</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar-container {
  background-image: url(@/images/bg-sidebar-desktop.svg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 20vw;
  box-sizing: border-box;
  padding: 2.5rem;
  gap: 2rem;
}

.number {
  color: var(--White);
  padding: 0.7rem 1rem;
  border: 1px solid var(--White);
  border-radius: 50%;
  font-size: 1rem;
}
.step {
  color: var(--Grey500);
}
.step-title {
  color: var(--White);
  font-weight: 500;
}
</style>
