<script setup lang="ts">
import Founder from "./components/Founder.vue";
import Cagr from "./components/Cagr.vue";
</script>

<template>
  <div class="card-layout">
    <Cagr></Cagr>
    <Founder></Founder>
  </div>
</template>

<style scoped>
.card-layout {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

@media (min-width: 768px) {
  .card-layout {
    flex-direction: row;
    align-items: stretch;
  }

  .card-layout > * {
    flex: 1;
    max-width: 50%;
  }
}
</style>
