<script setup>
import { useFormStore } from "@/store/formStore";

const formStore = useFormStore();
</script>

<template>
  <form
    class="display-flex justify-content-center direction-column gap1"
    @submit.prevent="formStore.addUser()"
  >
    <h1 class="title-step1">Personal Info</h1>
    <p class="desc-step1">Please provide your name, email, and phone number.</p>
    <base-card class="form-group">
      <label>Name</label>
      <input
        type="text"
        placeholder="e.g. Stephen King"
        class="text-input"
        :class="{ error: formStore.errors.name }"
        v-model="formStore.form.name"
        required
      />
    </base-card>
    <base-card class="form-group">
      <label>Email Address</label>
      <input
        type="email"
        placeholder="e.g. stephenking@lorem.com"
        class="text-input"
        :class="{ error: formStore.errors.email }"
        v-model="formStore.form.email"
        required
      />
    </base-card>
    <base-card class="form-group">
      <label>Phone Number</label>
      <input
        type="tel"
        placeholder="e.g. +1 234 567 890"
        class="text-input"
        :class="{ error: formStore.errors.phone }"
        v-model="formStore.form.phone"
        required
      />
    </base-card>
    <base-card class="btn-card">
      <base-button class="next-btn" mode="primary" type="submit">
        <!-- @click="formStore.addUser()" -->
        Next Step
      </base-button>
    </base-card>
  </form>
</template>

<style scoped>
input,
button,
select,
textarea {
  font: inherit;
}

.title-step1 {
  font-size: 2.3rem;
  font-weight: 700;
  color: var(--Blue950);
  padding-top: 3rem;
}
.desc-step1 {
  color: var(--Grey500);
  font-size: clamp(1rem, 3vw, 1.3rem);
}
.form-group {
  display: grid;
  padding-block: 0.3rem;
}
label {
  font-weight: 500;
  color: var(--Blue950);
  padding: 0.5rem 0;
}

.text-input {
  padding: 0.8rem;
  border-radius: 0.5rem;
  border: 1px solid var(--Grey500);
  transition: all 0.3s ease;
  outline: none;
}
.text-input:focus {
  outline: 2px solid var(--Purple600);
  /* border: 1px solid var(--Purple600); */
}
.next-btn {
  margin-top: 5rem;
}

.error {
  outline: 2px solid var(--Red500);
}

@media (max-width: 1300px) {
  .desc-step1 {
    font-size: 0.8rem;
  }
}
@media (max-width: 770px) {
  .desc-step1 {
    font-size: 1rem;
  }
  .btn-card {
    display: none;
  }
}
</style>
