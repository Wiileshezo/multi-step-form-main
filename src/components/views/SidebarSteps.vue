<script setup></script>

<template>
  <div class="sidebar-container-desktop border-radius">
    <div class="display-flex direction-row gap1 align-items-center">
      <h2 class="number">1</h2>
      <div class="display-flex direction-column step-side">
        <p class="step">STEP 1</p>
        <p class="step-title">YOUR INFO</p>
      </div>
    </div>
    <div class="display-flex direction-row gap1 align-items-center">
      <h2 class="number">2</h2>
      <div class="display-flex direction-column step-side">
        <p class="step">STEP 2</p>
        <p class="step-title">SELECT PLAN</p>
      </div>
    </div>
    <div class="display-flex direction-row gap1 align-items-center">
      <h2 class="number">3</h2>
      <div class="display-flex direction-column step-side">
        <p class="step">STEP 3</p>
        <p class="step-title">ADD-ONS</p>
      </div>
    </div>
    <div class="display-flex direction-row gap1 align-items-center">
      <h2 class="number">4</h2>
      <div class="display-flex direction-column step-side">
        <p class="step">STEP 4</p>
        <p class="step-title">SUMMARY</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar-container-desktop {
  background-image: url(@/images/bg-sidebar-desktop.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 2rem;
  flex-grow: 0.3;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 10vw;
}

.step-side {
  flex-grow: 0.5;
}

.step {
  color: var(--Grey500);
}
.step-title {
  color: var(--White);
  font-weight: 500;
}
@media (max-width: 600px) {
  .sidebar-container-desktop {
    display: none;
  }
}
</style>
