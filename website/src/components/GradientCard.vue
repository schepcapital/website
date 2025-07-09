<template>
  <div class="gradient-card">
    <slot />
  </div>
</template>

<script setup lang="ts">
// No script needed here unless you want props later
</script>

<style scoped>
.gradient-card {
  background: linear-gradient(
      145deg,
      var(--color-background-gradient-start),
      var(--color-background-gradient-end)
  );
  border-radius: var(--border-radius-card);
  box-shadow: var(--shadow-light), var(--shadow-medium);
  padding: var(--spacing-card-padding-vertical) var(--spacing-card-padding-horizontal);
  max-width: 720px;
  margin: 1rem auto;
  color: var(--color-text-main);
  text-align: center;
  font-family: var(--font-family-base);
}

</style>
