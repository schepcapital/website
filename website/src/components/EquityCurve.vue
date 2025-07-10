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
import GradientCard from "./GradientCard.vue"

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

const chartRef = ref(null)

const chartData = ref({
  labels: [],
  datasets: [
    {
      label: 'USDT Returns',
      data: [],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      fill: false,
      tension: 0.3,
    }
  ]
})

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'USDT Monthly Returns (June 2024 to Present)' },
  },
})

onMounted(async () => {
  const res = await fetch('/data.json')
  const data = await res.json()

  console.log('Raw data:', data)

  const monthOrder = [
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december'
  ]

  // Filter years >= 2024
  const years = Object.keys(data)
      .filter(y => parseInt(y) >= 2024)
      .sort()

  const labels = []
  const returns = []

  for (const year of years) {
    for (const month of monthOrder) {
      if (data[year][month] && data[year][month].usdt !== undefined) {
        if (parseInt(year) === 2024 && monthOrder.indexOf(month) < monthOrder.indexOf('june')) {
          continue
        }
        labels.push(`${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`)
        returns.push(data[year][month].usdt)
      }
    }
  }

  console.log('Filtered labels:', labels)
  console.log('Filtered returns:', returns)

  // Calculate cumulative portfolio values starting at 10,000
  const initialAmount = 10000
  const portfolioValues = []
  let currentValue = initialAmount

  for (const ret of returns) {
    currentValue = currentValue * (1 + ret / 100)
    portfolioValues.push(currentValue.toFixed(2))
  }

  console.log('Cumulative portfolio values:', portfolioValues)

  // Replace entire chartData object for reactivity
  chartData.value = {
    labels,
    datasets: [
      {
        label: 'USDT Portfolio Value ($)',
        data: portfolioValues,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
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
  <GradientCard>
    <div style="height: 400px; width: 700px;">
      <Line ref="chartRef" :data="chartData" :options="chartOptions" />
    </div>
  </GradientCard>
</template>
