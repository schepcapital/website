<script setup lang="ts">
import photo from '../assets/afm.webp'
</script>

<template>
  <div class="disclaimer">
    <img :src="photo" alt="Disclaimer" />
  </div>
</template>

<style scoped>
.disclaimer {
  width: 100%;
  padding: 1rem 0; /* space above and below */
  display: flex;
  justify-content: center;
}

.disclaimer img {
  width: 100%;
  max-width: 1200px; /* optional, keeps it from stretching too wide */
  height: auto;
}
</style>
