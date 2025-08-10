<script setup lang="ts">
function handleClick() {
  window.open('https://your-google-form-link.com', '_blank')
}
</script>

<template>
  <button class="primary-button" @click="handleClick">
    Open the Google Form
  </button>
</template>


<style scoped>
.primary-button {
  padding: .55rem 1.2rem;
  margin: 6rem 2rem;
  background-color: var(--color-primary);
  color: white;
  font-family: var(--font-family-base), serif;
  font-size: 1.5rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  box-shadow: var(--shadow-light);
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.2s ease;
}

.primary-button:hover {
  background-color: var(--color-primary-hover);
  box-shadow: var(--shadow-medium);
}

.primary-button:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

@media (max-width: 800px) {
  .primary-button {
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    margin: 2rem 1rem;
  }
}

</style>
