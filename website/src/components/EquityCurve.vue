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
    <div class="card-layout">
      <Chart />
      <div class="">
        <Ratios></Ratios>
        <RatiosText></RatiosText>
      </div>
    </div>

  </GradientCard>
</template>

