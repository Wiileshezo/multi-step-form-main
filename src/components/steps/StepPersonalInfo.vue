<script setup></script>

<template>
  <form class="display-flex direction-column gap1">
    <h1 class="title-step1">Personal Info</h1>
    <p class="desc-step1">Please provide your name, email, and phone number.</p>
    <base-card class="card display-flex direction-column">
      <label>Name</label>
      <input type="text" placeholder="e.g. Stephen King" class="text-input" />
    </base-card>
    <base-card class="card display-flex direction-column">
      <label>Email Address</label>
      <input
        type="email"
        placeholder="e.g. stephenking@lorem.com"
        class="text-input"
      />
    </base-card>
    <base-card class="card display-flex direction-column">
      <label>Phone Number</label>
      <input type="tel" placeholder="e.g. +1 234 567 890" class="text-input" />
    </base-card>
    <base-card class="btn-card display-flex">
      <base-button class="next-btn" mode="primary" type="submit">
        Next Step
      </base-button>
    </base-card>
  </form>
</template>

<style scoped>
.title-step1 {
  font-size: 2.3rem;
  font-weight: 700;
  color: var(--Blue950);
  padding-top: 3.5rem;
}
.desc-step1 {
  color: var(--Grey500);
  font-size: 1rem;
  padding-bottom: 2rem;
}
.card {
  padding-block: 0.3rem;
}
label {
  font-weight: 500;
  color: var(--Blue950);
  padding: 0.5rem 0;
}
.btn-card {
  align-items: flex-end;
  padding-top: 3.5rem;
}
.text-input {
  padding: 0.8rem;
  border-radius: 0.5rem;
  width: 40vw;
  border: 1px solid var(--Grey500);
}
</style>
