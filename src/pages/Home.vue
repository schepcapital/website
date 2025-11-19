<script setup lang="ts">
import { ref, onMounted } from 'vue'

import Founder from '../components/Founder.vue'
import CagrStripped from '../stripped_components/CagrStripped.vue'
import EquityCurve from '../components/EquityCurve.vue'
import ReturnsOverview from '../components/ReturnsOverview.vue'
import FinalQuote from '../components/FinalQuote.vue'
import ShowInterestStripped from '../stripped_components/ShowInterestStripped.vue'
import LandingViewStripped from '../stripped_components/LandingViewStripped.vue'
import Disclaimer from "../components/Disclaimer.vue";
import Wealth from "../stripped_components/Wealth.vue";

interface Stats {
  'cagr_usdt_before_june2024_%': number
  'cagr_usdt_after_june2024_%': number
}

const cagrBefore = ref<number | null>(null)
const cagrAfter = ref<number | null>(null)


onMounted(async () => {
  try {
    const res = await fetch('/stats.json')
    if (!res.ok) throw new Error('Failed to load stats.json')

    const data: Stats = await res.json()
    cagrBefore.value = data['cagr_usdt_before_june2024_%']
    cagrAfter.value = data['cagr_usdt_after_june2024_%']
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <LandingViewStripped></LandingViewStripped>
  <div class="background">
    <div class="card-layout">
      <CagrStripped :cagr-before="cagrBefore" :cagr-after="cagrAfter"  />
      <Founder />
    </div>
    <div class="card-layout"></div>
    <div class="card-layout">
      <Wealth :cagr-before="cagrBefore" :cagr-after="cagrAfter"  />
      <ShowInterestStripped></ShowInterestStripped>
    </div>
  </div>
</template>


<style scoped>
.background {
  min-height: 100vh;
  background:
      radial-gradient(circle at 30% 40%, rgba(50, 119, 245, 0.5), transparent 90%),
      radial-gradient(circle at 70% 60%, rgba(180, 240, 230, 0.4), transparent 90%);
  background-repeat: no-repeat;
  background-size: cover;
}


</style>



