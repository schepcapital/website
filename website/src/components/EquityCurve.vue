<script setup>
import Chart from './Chart.vue'
import GradientCard from './GradientCard.vue'
import Ratios from "./Ratios.vue";
import RatiosText from "./RatiosText.vue";
</script>


<template>
  <GradientCard>
    <h1 class="slogan">
      Equity curve of <span class="highlight">returns</span>
    </h1>
    <Chart />
    <div class="card-layout">
      <Ratios></Ratios>
      <RatiosText></RatiosText>
    </div>
  </GradientCard>
</template>

