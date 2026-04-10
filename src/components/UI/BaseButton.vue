<script setup>
defineProps({
  type: String,
  mode: String,
});
</script>

<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  border: none;
  background: var(--Blue950);
  color: var(--White);
  cursor: pointer;
  border-radius: 0.6rem;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-family: "Ubuntu", sans-serif;
}

@media screen and (min-width: 768px) {
}
</style>
