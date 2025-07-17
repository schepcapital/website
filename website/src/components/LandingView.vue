<script setup lang="ts">
import { ref, onMounted } from 'vue'

const displayValue = ref(0)
const targetCAGR = 110.0
const duration = 2000 // ms

// Base of the logarithm — try values like 2, e, 10, etc.
const base = 2

function easeOutLog(t: number, base: number): number {
  if (base <= 1) return t // Avoid invalid or flat log behavior
  const logBase = (x: number) => Math.log(x) / Math.log(base)
  const numerator = logBase(1 + (base - 1) * t)
  const denominator = logBase(base) // = 1, but keeps it general
  return numerator / denominator
}

onMounted(() => {
  const startTime = performance.now()

  const animate = (time: number) => {
    const elapsed = time - startTime
    const rawProgress = Math.min(elapsed / duration, 1)
    const easedProgress = easeOutLog(rawProgress, base)

    displayValue.value = +(easedProgress * targetCAGR).toFixed(1)

    if (rawProgress < 1) {
      requestAnimationFrame(animate)
    } else {
      displayValue.value = targetCAGR
    }
  }

  requestAnimationFrame(animate)
})
</script>




<template>
  <div class="fullscreen-bg">
    <div class="text-center">
      <h1 class="slogan">Navigating complexity with simplicity</h1>
      <p class="cagr">CAGR: {{ displayValue }}%*</p>
      <p class="note">*Transaction costs of 0.1% included, out-of-sample.</p>
    </div>
  </div>
</template>

<style scoped>
.fullscreen-bg {
  background-color: black;
  color: white;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  flex-direction: column;
}

.slogan {
  font-size: clamp(2rem, 6vw, 5rem);
  font-weight: bold;
  margin-bottom: 1rem;
}

.cagr {
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.note {
  font-size: clamp(0.8rem, 2vw, 1rem);
  opacity: 0.7;
}
</style>
