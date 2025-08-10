<script setup lang="ts">
import GradientCard from './GradientCard.vue'
import { TRANSACTION_COST_NOTE } from '../constants'

defineProps<{
  cagrBefore: number | null
  cagrAfter: number | null
  note: string | null
}>()
</script>

<template>
  <GradientCard>
    <h1 class="slogan">
      <span class="highlight">Complex</span> financial markets,<br />
      navigated <span class="highlight">simply</span>
    </h1>

    <h2 class="cagr-value" v-if="cagrAfter !== null">{{ `CAGR: ${cagrAfter}%` }}*</h2>
    <h2 class="cagr-value" v-else>Loading CAGR...</h2>

    <p class="description" v-if="cagrBefore !== null && cagrAfter !== null">
      {{ TRANSACTION_COST_NOTE }}
    </p>
    <p v-else>Loading data...</p>
  </GradientCard>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

/* Typography Utilities */
.slogan {
  font-size: var(--font-size-slogan);
  font-weight: 700;
  margin-bottom: 4rem;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.highlight {
  color: var(--color-primary);
  transition: color 0.3s ease;
}

.highlight:hover {
  color: var(--color-primary-hover);
  cursor: default;
}

.cagr-value {
  font-size: var(--font-size-cagr);
  font-weight: 800;
  margin: 0 0 1.8rem;
  letter-spacing: 0.03em;
  color: #1f2937;
  text-shadow: 1px 1px 3px rgba(42, 113, 208, 0.3);
}

.description {
  text-align: center;
}



</style>
