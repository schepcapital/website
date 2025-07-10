<script setup lang="ts">
import { ref, onMounted } from 'vue'
import GradientCard from './GradientCard.vue'

interface Stats {
  'cagr_usdt_before_june2024_%': number
  'cagr_usdt_after_june2024_%': number
}

const cagrBefore = ref<number | null>(null)
const cagrAfter = ref<number | null>(null)

onMounted(async () => {
  try {
    const res = await fetch('/stats.json')
    if (!res.ok) throw new Error('Failed to load stats.json')
    const data: Stats = await res.json()
    cagrBefore.value = data['cagr_usdt_before_june2024_%']
    cagrAfter.value = data['cagr_usdt_after_june2024_%']
  } catch (error) {
    console.error(error)
  }
})
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
      *transaction costs of 0.1% included, out-of-sample.
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


</style>
