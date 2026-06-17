<script setup>
import { useFormStore } from "@/store/formStore";

const formStore = useFormStore();
</script>

<template>
  <div class="display-flex justify-content-center direction-column gap1">
    <h1 class="title-step">Finishing up</h1>
    <p class="desc-step">Double-check everything looks OK before confirming.</p>
  </div>
</template>

<style scoped></style>
