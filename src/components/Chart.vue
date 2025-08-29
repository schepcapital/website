<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
} from 'chart.js'

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler
)

const accumulate = (returns) => {
  const result = []
  let current = initialAmount
  for (const r of returns) {
    current *= (1 + r / 100)   // keep full precision
    result.push(current)       // push number, not string
  }
  return result
}


const chartRef = ref(null)

const chartData = ref({
  labels: [],
  datasets: []
})

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'USD Monthly Returns (Since June 2024)' },
  },
  scales: {
    x: {
      ticks: {
        callback: function(value, index, ticks) {
          // Always show only first and last label
          if (index === 0 || index === ticks.length - 1) {
            return this.getLabelForValue(value);
          }
          return '';
        },
        maxRotation: 0, // always horizontal
        minRotation: 0,
        autoSkip: false, // ensure Chart.js doesn't skip the last one
      }
    },
    y: {
      ticks: {
        callback: function(value) {
          return '$' + Number(value).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        }
      }
    }
  }
})


onMounted(async () => {
  const res = await fetch('/data.json')
  const data = await res.json()

  const monthOrder = [
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december'
  ]

  const years = Object.keys(data)
      .filter(y => parseInt(y) >= 2024)
      .sort()

  const labels = []
  const usdtReturns = []
  const sp500Returns = []

  for (const year of years) {
    for (const month of monthOrder) {
      if (data[year][month] && data[year][month].usdt !== undefined) {
        if (parseInt(year) === 2024 && monthOrder.indexOf(month) < monthOrder.indexOf('june')) continue

        labels.push(`${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`)
        usdtReturns.push(data[year][month].usdt)
        sp500Returns.push(data[year][month].sp500 ?? 0)
      }
    }
  }

  const initialAmount = 100000
  const accumulate = (returns) => {
    const result = []
    let current = initialAmount
    for (const r of returns) {
      current *= (1 + r / 100)
      result.push(current.toFixed(2))
    }
    return result
  }

  const usdtPortfolio = accumulate(usdtReturns)
  const sp500Portfolio = accumulate(sp500Returns)

  chartData.value = {
    labels,
    datasets: [
      {
        label: 'Schep Capital Portfolio Value ($)',
        data: usdtPortfolio,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: false,
        tension: 0.3,
      },
      {
        label: 'S&P 500 Portfolio Value ($)',
        data: sp500Portfolio,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: false,
        tension: 0.3,
      }
    ]
  }

  await nextTick()
  chartRef.value?.chart?.update()
})
</script>

<template>
  <div class="chart-scroll-wrapper">
    <div class="chart-container">
      <Line ref="chartRef" :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<style scoped>
.chart-scroll-wrapper {
  width: 100%;
  height: 100%; /* Fills the height of parent */
  overflow-x: auto;
}

.chart-container {
  min-width: 600px;
  height: 100%; /* Full height of wrapper */
  min-height: 500px;
  padding: 1rem;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}


@media (max-width: 768px) {
  .chart-container {
    min-width: 100%;
    height: 50vh;
    padding: 0.75rem;
  }
}
</style>
