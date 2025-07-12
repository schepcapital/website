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
  flex: 1 1 400px;      /* grows and shrinks but starts at 400px */
  min-width: 320px;     /* minimum size */
  max-width: 100%;      /* optional max to avoid overflow */
  display: flex;
  justify-content: center;
  align-items: center;

}

.table-with-text {
  display: flex;
  flex-direction: row;
}

.table-with-text > .table-container {
  flex: 1 1 40%;     /* table gets 40% of horizontal space */
  min-width: 450px;
  max-width: 880px;  /* optional: prevent table from growing too large */
}

.table-with-text > .description {
  flex: 1 1 60%;     /* text gets 60% of space */
  padding-left: 1.5rem; /* spacing between table and text */
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
