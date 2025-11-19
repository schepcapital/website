<script setup lang="ts">
import GradientCard from '../components/GradientCard.vue'

defineProps<{
  cagrBefore: number | null
  cagrAfter: number | null
}>()
</script>

<template>
  <GradientCard>
    <h1 class="slogan">
      Turning insight
      into <span class="highlight">growth</span>
    </h1>

<!--    <h2 class="cagr-value" v-if="cagrAfter !== null">{{ `CAGR: ${cagrAfter}%` }}*</h2>-->
<!--    <h2 class="cagr-value" v-else>Loading CAGR...</h2>-->

    <p class="description">
      The strategy has been live in the real world since June 2024.
      Its approach relies on <strong>early</strong> detection of market trends and quickly closing positions when the market moves against them, helping manage risk effectively.

      <br><br>

      The strategy is <strong>fully automated</strong> and focuses exclusively on trading cryptocurrencies.
      It is designed to take advantage of volatile markets, which are a defining feature of the crypto space.
    </p>

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
  text-align: left;
}



</style>
