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
    Click the button below to access a <strong>private Google Form</strong> where you can express your interest in joining the fund.
    Completing the form does <strong>not commit you</strong>, but it ensures I can reach out if a rare opening becomes available.
    Your interest is greatly valued, and I look forward to the possibility of <strong>welcoming you into this select circle</strong>.
  </p>

  <Button></Button>
</GradientCard>
</template>

<style scoped>
.description {
  text-align: left;
}
</style>