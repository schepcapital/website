<script setup lang="ts">
import { ref, onMounted, onUnmounted} from 'vue'
import SchepCapital from './SchepCapital.vue'
import { TRANSACTION_COST_NOTE } from '../constants'

function setVh() {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

onMounted(() => {
  setVh()
  window.addEventListener('resize', setVh)
})

onUnmounted(() => {
  window.removeEventListener('resize', setVh)
})


interface Stats {
  'cagr_usdt_before_june2024_%': number
  'cagr_usdt_after_june2024_%': number
}

const displayValue = ref('0.0')
const targetCAGR = ref<number | null>(null)
const duration = 5000 // ms

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

function startAnimation() {
  const startTime = performance.now()

  const animate = (time: number) => {
    const elapsed = time - startTime
    const rawProgress = Math.min(elapsed / duration, 1)
    const easedProgress = easeOutExpo(rawProgress)

    displayValue.value = ((targetCAGR.value ?? 0) * easedProgress).toFixed(2)

    if (rawProgress < 1) {
      requestAnimationFrame(animate)
    } else {
      displayValue.value = (targetCAGR.value ?? 0).toFixed(2)
    }
  }

  requestAnimationFrame(animate)
}

onMounted(async () => {
  try {
    const res = await fetch('/stats.json')
    if (!res.ok) throw new Error('Failed to load stats.json')
    const data: Stats = await res.json()

    targetCAGR.value = data['cagr_usdt_after_june2024_%']

    startAnimation()
  } catch (err) {
    console.error(err)
  }
})
</script>

<template>
  <div class="fullscreen-bg">
    <SchepCapital />
    <video autoplay muted loop playsinline class="background-video">
      <source src="../assets/repeat_wave.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>

    <div class="overlay"></div>

    <div class="text-overlay">
      <div class="branding">
        <h1 class="slogan">Private wealth, <br /> built for you</h1>
      </div>
      <p class="cagr">CAGR: {{ displayValue }}%*</p>
      <p class="note">{{ TRANSACTION_COST_NOTE }}</p>
    </div>
  </div>
</template>

<style scoped>
.fullscreen-bg {
  position: relative;
  height: calc(var(--vh, 1vh) * 110);
  width: 100vw;
  overflow: hidden;
}

.background-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 110%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: -2;
  background: black;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background: rgba(0, 0, 0, 0.4);
  z-index: -1;
}

.text-overlay {
  position: relative;
  z-index: 1;
  color: white;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  padding: 2rem 1rem;
  padding: 0;
}

.branding {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10vh;
}

.slogan {
  font-size: clamp(2rem, 6vw, 5rem);
  font-weight: bold;
  margin-bottom: 0.1vh;
}

.cagr {
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: 600;
  margin-bottom: 0.1vh;
}

.note {
  font-size: clamp(0.8rem, 2vw, 1rem);
  opacity: 0.7;
}

</style>
