<script setup lang="ts">

import GradientCard from "../components/GradientCard.vue";
import Button from "../components/Button.vue";
</script>

<template>
<GradientCard>
  <h1 class="slogan">
    Show your <span class="highlight">interest</span>
  </h1>
  <p class="description">
    <p>
      Click the button below to access a private Google Form where you can express your interest in learning more about the fund.
      Completing the form does <strong>not commit you</strong> and also does <strong>not guarantee</strong> any participation.
      Your interest is greatly valued, and I look forward to the possibility of sharing more information with you. <br><br>

      By filling out the form, you can receive additional details about the strategy, methodology, and relevant performance information for informational purposes only.
    </p>

  </p>

  <Button></Button>
</GradientCard>
</template>

<style scoped>
.description {
  text-align: left;
}
</style>