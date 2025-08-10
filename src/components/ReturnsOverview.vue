<script setup lang="ts">
import { computed } from 'vue'
import Table from "./Table.vue"
import GradientCard from "./GradientCard.vue"

const props = defineProps<{
  metric: 'usdt' | 'btc'
}>()

const metricLabel = computed(() => {
  return props.metric === 'btc' ? 'Bitcoin' : 'USDT'
})
</script>

<template>
  <GradientCard>
    <h2 class="slogan">
      Historical returns in terms of <span class="highlight">{{ metricLabel }}</span>
    </h2>
    <div class="table-with-text">
      <div class="table-container">
        <Table :metric="props.metric" />
      </div>
      <div class="description">
        <slot />
      </div>
    </div>
  </GradientCard>
</template>


<style scoped>
.table-container {
  display: flex;        /* use flexbox */
  align-items: center;  /* vertical centering */
  justify-content: center; /* horizontal alignment to left */
  margin: 0;
}



.table-with-text {
  display: flex;
  flex-direction: row;
}

.table-with-text > .table-container {
  flex: 1 1 40%;     /* table gets 40% of horizontal space */
  max-width: 880px;  /* optional: prevent table from growing too large */
}

.description {
  padding-left: 4rem;
}

/* On small screens, stack vertically */
@media (max-width: 1200px) {
  .table-with-text {
    flex-direction: column;
  }

  .description {
    padding-left: 0.5rem;
  }

}
</style>
