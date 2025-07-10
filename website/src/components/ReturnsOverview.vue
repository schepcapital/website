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
      <Table :metric="props.metric" />
      <div class="description">
        <slot />
      </div>
    </div>
  </GradientCard>
</template>

<style scoped>

.table-with-text {
  display: flex;
  flex-direction: row;
}

.table-with-text > * {
  flex: 1 1 300px;
  min-width: 250px;
}

.description {
  text-align: left;
}

/* On small screens, stack vertically */
@media (max-width: 768px) {
  .table-with-text {
    flex-direction: column;
  }
}
</style>
