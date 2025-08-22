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
    Click the button below to access a private Google Form where you can express your interest in joining the fund.
    Completing the form does <strong>not commit you</strong> and also does <strong>not guarantee</strong> you a possible spot into the fund.
    Your interest is greatly valued, and I look forward to the possibility of welcoming you into this select circle.
  </p>

  <Button></Button>
</GradientCard>
</template>

<style scoped>
.description {
  text-align: left;
}
</style>