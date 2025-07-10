<script setup lang="ts">
import Table from "./Table.vue";
import GradientCard from "./GradientCard.vue";
</script>

<template>
  <GradientCard>
    <h2 class="slogan">
      Historical returns in terms of <span class="highlight">Bitcoin</span>
    </h2>
    <div class="table-with-text">
        <Table />
        <p style="text-align: left;" class="description">
          The table shows the historical returns made by the trading strategy in terms of <strong>Bitcoin</strong>.
          The strategy was deployed into the real world at the start of <strong>June 2024</strong>.
          The trading strategy is centered
          around the idea that accumulating more Bitcoin is profitable way to make money. The strategy aims to acquire
          more Bitcoin, regardless of what the USD price of a Bitcoin is at any given time.
          The accumulation of more Bitcoin, along a price increase in Bitcoin in terms of USD leads to <strong>exponential growth</strong>
          in bull markets and it <strong>mitigates losses</strong> in bear markets.
          In the long term, growth far exceeds traditional investing methods as shown by these metrics.
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
  gap: 2rem;               /* vertical space between table and text */
  max-width: 100%;         /* ensure it doesn't overflow */
}

.table-with-text > * {
  flex: 1 1 300px;         /* flexible width, minimum 300px */
  min-width: 250px;        /* prevent too narrow */
}

/* On small screens, stack vertically */
@media (max-width: 768px) {
  .table-with-text {
    flex-direction: column;
  }
}


</style>
