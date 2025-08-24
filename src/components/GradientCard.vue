<script setup lang="ts">
</script>

<template>
  <div class="gradient-card">
    <slot />
  </div>
</template>

<style scoped>
.gradient-card {
  background: linear-gradient(
      145deg,
      var(--color-background-gradient-start),
      var(--color-background-gradient-end)
  );
  border-radius: var(--border-radius-card);
  box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.15),
      0 12px 32px rgba(0, 0, 0, 0.25);


  padding: var(--spacing-card-padding-vertical) var(--spacing-card-padding-horizontal);
  margin: 2rem;
  color: var(--color-text-main);
  text-align: center;
  font-family: var(--font-family-base);

  animation: fadeInDown 1.5s ease forwards;
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

