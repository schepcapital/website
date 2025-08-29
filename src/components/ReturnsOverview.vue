<script setup lang="ts">
import { computed } from 'vue'
import Table from "./Table.vue"
import GradientCard from "./GradientCard.vue"
import { TRANSACTION_COST_NOTE } from '../constants.ts'

const props = defineProps<{
  metric: 'usdt' | 'btc'
}>()

const metricLabel = computed(() => {
  return props.metric === 'btc' ? 'Bitcoin' : 'USD'
})
</script>

<template>
  <GradientCard>
    <h2 class="slogan">
      Returns in <span class="highlight">{{ metricLabel }}</span>
    </h2>
    <div class="table-with-text">
      <div class="table-container">
        <div class="table-wrapper">
          <Table :metric="props.metric" />
        </div>
        <p>
          {{ TRANSACTION_COST_NOTE}}
        </p>
      </div>
      <div class="description">
        <slot />
      </div>
    </div>
  </GradientCard>
</template>


<style scoped>
.table-container {
  display: flex;
  flex-direction: column;
  align-items: center;     /* center horizontally */
  justify-content: center; /* center vertically inside container */
  margin: 0;
  padding-bottom: 0;
}

.table-wrapper {
  overflow-x: auto; /* horizontal scroll for table only */
  max-width: 100%;
}


.table-with-text {
  display: flex;
  flex-direction: row;
}

.table-with-text > .table-container {
  padding: 3rem 3rem 0;
  flex: 1; /* take remaining space */
  min-width: 0; /* prevents overflow issues */
}

.description {
  flex: 0 0 1300px; /* fixed width of 300px */
  padding-left: 4rem;
}


/* On small screens, stack vertically */
@media (max-width: 1200px) {
  .table-with-text {
    flex-direction: column;
  }

  .description {
    padding-left: 0.5rem;
    flex: unset;   /* let height be auto */
    width: auto;   /* ignore the fixed 1300px */
  }

}
</style>
