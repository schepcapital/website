<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SchepCapital from "./SchepCapital.vue";

const displayValue = ref("0.0") // now a string
const targetCAGR = 110.1
const duration = 5000 // ms


function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

onMounted(() => {
  const startTime = performance.now()

  const animate = (time: number) => {
    const elapsed = time - startTime
    const rawProgress = Math.min(elapsed / duration, 1)
    const easedProgress = easeOutExpo(rawProgress)

    displayValue.value = (easedProgress * targetCAGR).toFixed(1)

    if (rawProgress < 1) {
      requestAnimationFrame(animate)
    } else {
      displayValue.value = targetCAGR.toFixed(1)
    }
  }

  requestAnimationFrame(animate)
})
</script>



<template>
  <div class="fullscreen-bg">
    <SchepCapital></SchepCapital>
    <video autoplay muted loop playsinline class="background-video">
      <source src="../assets/landingview.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div class="overlay"></div> <!-- NEW -->

    <div class="text-overlay">
      <div class="branding">
<!--        <img src="../assets/logo.webp" alt="Logo" class="logo-image" />-->
        <h1 class="slogan">Navigating complexity with simplicity</h1>
<!--        <h1 class="slogan">Navigating the waves of finance with rock solid strategy</h1>-->
      </div>
      <p class="cagr">CAGR: {{ displayValue }}%*</p>
      <p class="note">*Transaction costs of 0.1% included, out-of-sample performance.</p>
    </div>

  </div>
</template>


<style scoped>

.fullscreen-bg {
  position: relative;
  height: 100vh;
  width: 99.9vw;
  overflow: hidden;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -2;
  animation: fadeLoop 10s linear infinite; /* Adjust timing to match your video length */
}



.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* Darkens video for text contrast */
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
}

.branding {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10vh;
}

.logo-image {
  border-radius: 10px; /* rounds all corners by 10px */
  width: 30vw;
  height: auto;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8));
  transition: transform 0.3s ease, filter 0.3s ease;
}

.logo-image:hover {
  transform: scale(1.05);
  filter: drop-shadow(0 0 14px rgba(0, 255, 255, 0.9));
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
