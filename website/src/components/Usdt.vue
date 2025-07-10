<script setup lang="ts">
import Table from "./Table.vue";
import GradientCard from "./GradientCard.vue";
</script>

<template>
  <GradientCard>
    <h2 class="slogan">
      Historical returns in terms of <span class="highlight">USD</span>
    </h2>
    <div class="table-with-text">
      <Table metric="usdt" />
      <p style="text-align: left;" class="description">
        This second table shows the historical returns in terms of <strong>USD</strong>, since this is what matters directly to investors.
        The trading strategy doesn't directly optimize for USD returns, but as shown in the table, it still shows exquisite results.
        This fund is well suited for investors with <strong> substantial risk appetite</strong>  seeking <strong>tremendous returns</strong>.
        The strategy is designed such that it captures <strong>extraordinary gains</strong> which compensate all the losing trades.
        It operates strictly in the crypto market, <strong>fully automated</strong>. Trying to capture big moves in the market early is at
        the heart of the strategy, and it gets out with minimal losses if the market moves opposite. Therefore, this fund <strong>thrives in volatility</strong>,
        precisely what the crypto market is known for.
      </p>

    </div>
  </GradientCard>
</template>


<style scoped>
.slogan {
  font-size: var(--font-size-slogan);
  font-weight: 700;
  margin-bottom: 2rem;
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

.table-with-text {
  display: flex;
  flex-direction: row;
  align-items: center;     /* center horizontally */
  text-align: center;      /* optional: center text */
  gap: 2rem;
  max-width: 100%;
}

.table-with-text > * {
  flex: 1 1 300px;
  min-width: 250px;
}

/* stacks vertically on small screens */
@media (max-width: 768px) {
  .table-with-text {
    flex-direction: column;
  }
}


</style>
