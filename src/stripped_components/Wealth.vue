<script setup lang="ts">
import GradientCard from '../components/GradientCard.vue'
import { TRANSACTION_COST_NOTE } from '../constants'

defineProps<{
  cagrBefore: number | null
  cagrAfter: number | null
}>()
</script>

<template>
  <GradientCard>
    <h1 class="slogan">
      Building long-term <span class="highlight">wealth</span>
    </h1>

<!--    <h2 class="cagr-value" v-if="cagrAfter !== null">{{ `CAGR: ${cagrAfter}%` }}*</h2>-->
<!--    <h2 class="cagr-value" v-else>Loading CAGR...</h2>-->

    <p class="description">
      The strategy is based on the <strong>core idea</strong> that steadily adding to your Bitcoin holdings over time can be one of the most effective ways to build <strong>long-term wealth</strong>.
      Instead of relying on trying to time the market or taking risky bets, it focuses on gradually increasing Bitcoin by trading other cryptocurrencies in a careful and measured way, aiming to make the most of opportunities while avoiding unnecessary risk.
      <br><br>
      By slowly growing Bitcoin holdings while also benefiting from potential price increases, the strategy seeks to create <strong>compounded growth</strong> over time.
      In bullish markets, this can help amplify gains, while in more volatile or bearish conditions, the approach is designed to help protect capital, reduce sudden losses, and maintain a steady path toward long-term growth.
      <br><br>
      Overall, it’s a methodical approach that emphasizes consistency, patience, and <strong>disciplined portfolio management</strong>, allowing investors to stay focused on long-term goals even when markets are unpredictable.
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
