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
      <p style="text-align: left;" class="description">
        This second table shows the historical returns in terms of <strong>USD</strong>, since this is what matters directly to investors.
        The trading strategy doesn't directly optimize for USD returns, but as shown in the table, it still shows exquisite results.
        This fund is well suited for investors with a large risk appetite seeking tremendous returns.
      </p>
      <Table metric="usdt" />
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
  flex-wrap: wrap;         /* allow wrapping to next line */
  gap: 1.5rem;
  align-items: flex-start; /* align items at the top */
  justify-content: space-between; /* space between horizontally */
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
