<script setup>
import { ref, onMounted } from 'vue'

const stats = ref(null)

onMounted(async () => {
  const res = await fetch('/stats.json')
  stats.value = await res.json()
})
</script>

<template>
  <div v-if="stats" class="stats-container">
    <h2>Performance Ratios (since June 2024)</h2>
    <table>
      <thead>
      <tr>
        <th>Metric</th>
        <th class="usdt">Schep Capital</th>
        <th class="sp500">S&P 500</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Sortino Ratio</td>
        <td class="usdt">{{ stats.sortino_usdt_june2024.toFixed(4) }}</td>
        <td class="sp500">{{ stats.sortino_sp500_june2024.toFixed(4) }}</td>
      </tr>
      <tr>
        <td>Sterling Ratio</td>
        <td class="usdt">{{ stats.sterling_usdt_june2024.toFixed(4) }}</td>
        <td class="sp500">{{ stats.sterling_sp500_june2024.toFixed(4) }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.stats-container {
  max-width: 600px;
  margin: 1.5rem auto 2rem auto;
  padding: 1rem;
  font-family: system-ui, sans-serif;
  text-align: center;
}

.stats-container h2 {
  margin-bottom: 1rem;
  font-weight: 600;
  font-size: 1.25rem;
}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 12px; /* vertical spacing between rows */
  font-size: 1rem;
}

thead th {
  text-align: left;
  padding-bottom: 0.5rem;
  font-weight: 700;
  border-bottom: 2px solid #ddd;
}

tbody td {
  padding: 0.6rem 0.75rem;
  background: white;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.05);
  border-radius: 6px;
}

tbody tr td:first-child {
  font-weight: 600;
  color: #333;
}

.usdt {
  color: rgba(54, 162, 235, 1);
  font-weight: 700;
}

.sp500 {
  color: rgba(255, 99, 132, 1);
  font-weight: 700;
}
</style>
