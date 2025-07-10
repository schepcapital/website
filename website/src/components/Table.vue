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

  if (value === undefined && hasAnyBefore) {
    return '?';
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
    getCellClass(months[month]?.[props.metric], months, month, index),
    (year === '2024' && month === 'june') ? 'thick-border-left' : ''
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
.thick-vertical-border-left {
  border-left: 4px solid rgba(0, 0, 0, 0.8);
}


.bg-positive {
  background-color: rgba(0, 255, 0, 0.3);
}

.bg-negative {
  background-color: rgba(255, 0, 0, 0.15);
}

.unknown {
  background-color: rgba(0, 0, 0, 0.05);
}

td {
  color: #333;
}


.table-wrapper {

  display: flex;
  justify-content: center;
}


table {
  border-collapse: collapse;
  width: auto;
  font-family: sans-serif;
  font-size: 0.75rem;
  text-align: center;
  background: white;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.08);
}

th, td {
  padding: 0.4rem 0.4rem;
  border: 1px solid #ddd;
  white-space: nowrap;
}

th {
  background-color: #f0f0f0;
  font-weight: 600;
}

td {
  color: #333;
}
</style>
