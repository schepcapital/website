<script setup lang="ts">

import GradientCard from "./GradientCard.vue";
import Button from "./Button.vue";
</script>

<template>
<GradientCard>
  <h1 class="slogan">
    Show your <span class="highlight">interest</span>
  </h1>
  <p class="description">
    Click the button below to visit a <strong>Google Form</strong> where you can express your interest in participating in the fund.
    Completing the form does <strong>not obligate</strong> you, but it allows me to contact you if a spot becomes available.
    I appreciate your interest and look forward to possibly <strong>welcoming you aboard</strong>.
  </p>

  <Button></Button>
</GradientCard>
</template>

<style scoped>
.description {
  text-align: left;
}
</style>