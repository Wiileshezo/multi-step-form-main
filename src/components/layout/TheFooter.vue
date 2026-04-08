<script setup></script>

<template>
  <footer>
    <div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="https://github.com/Wiileshezo">Wiileshezo</a>.
    </div>
  </footer>
</template>

<style scoped>
footer {
  z-index: 999;
  display: flex;
  justify-content: center;
}
.attribution {
  font-size: 0.6rem;
  text-align: center;
  padding-block: 3rem;
}
.attribution a {
  color: hsl(228, 45%, 44%);
}
@media screen and (min-width: 1000px) {
  .attribution {
    font-size: 0.8rem;
  }
}
@media screen and (min-width: 1400px) {
  .attribution {
    font-size: 1rem;
  }
}
</style>
