<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { PropType } from 'vue';

interface MonthlyReturns {
  btc?: number;
  usdt?: number;
  sp500?: number;
}

interface YearlyData {
  [month: string]: MonthlyReturns;
}

interface DataSet {
  [year: string]: YearlyData;
}

const props = defineProps({
  metric: {
    type: String as PropType<'btc' | 'usdt' | 'sp500'>,
    default: 'btc',
  },
});

const allMonths = [
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december', 'total'
];

const tableData = ref<DataSet>({});

onMounted(async () => {
  const res = await fetch('/data.json');
  tableData.value = await res.json();
});

function format(val: number | undefined): string {
  return typeof val === 'number' ? `${val.toFixed(2)}%` : '?';
}

function showValue(months: YearlyData, month: string, index: number): string {
  const keysBefore = allMonths.slice(0, index);
  const hasAnyBefore = keysBefore.some(k => months[k]?.[props.metric] !== undefined);
  const value = months[month]?.[props.metric];

  if (value === undefined) {
    if (hasAnyBefore) {
      return '?';  // show question mark only if there was actual data before
    } else {
      return '';   // show empty if no data before
    }
  }
  return format(value);
}


function getCellClass(val: number | undefined, months: YearlyData, month: string, index: number): string {
  const keysBefore = allMonths.slice(0, index);
  const hasAnyBefore = keysBefore.some(k => months[k]?.[props.metric] !== undefined);
  if (val === undefined && !hasAnyBefore) return '';
  if (val === undefined && hasAnyBefore) return 'unknown';
  if (val > 0) return 'bg-positive';
  if (val < 0) return 'bg-negative';
  return '';
}


</script>

<template>
  <div class="table-wrapper">
    <table>
      <thead>
      <tr>
        <th>Year</th>
        <th v-for="month in allMonths" :key="month">
          {{ month.slice(0, 3).toUpperCase() }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(months, year) in tableData" :key="year">
        <td><strong>{{ year }}</strong></td>
        <td
            v-for="(month, index) in allMonths"
            :key="month"
            :class="[
            getCellClass(months[month]?.[props.metric], months, month, index)
          ]"
        >
          {{ showValue(months, month, index) }}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

/* Highlighting */
.bg-positive {
  background-color: rgba(0, 255, 0, 0.3);
}

.bg-negative {
  background-color: rgba(255, 0, 0, 0.15);
}

.unknown {
  background-color: rgba(0, 0, 0, 0.05);
}

.table-wrapper {
  width: 100%;
  max-width: 60vw;      /* max width of the table container */
  margin: 1rem auto;
  overflow-x: auto;      /* scroll only if needed */
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

table {
  width: 100%;           /* table fills container */
  border-collapse: collapse;
  table-layout: auto;    /* columns sized by content */
}

thead {
  background-color: #f5f5f5;
}

th, td {
  padding: 0.4rem 0.6rem;
  text-align: center;
  border: 1px solid #ddd;
  white-space: normal;   /* allow wrapping so table can shrink */
  font-size: 0.85rem;
  color: #333;
  word-wrap: break-word; /* break long words if needed */
  max-width: 80px;       /* optional: limit max cell width */
}

th {
  font-weight: 600;
  color: #222;
  background-color: #f0f0f0;
}

td strong {
  font-weight: 700;
}

td.highlight {
  background-color: #d1e7dd;
  color: #0f5132;
}


</style>