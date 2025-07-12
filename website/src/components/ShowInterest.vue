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
    Below is a button which will take you to a Google Form where interest in participation in the fund can be expressed.
  </p>
  <Button></Button>
</GradientCard>
</template>

<style scoped>
.description {
  text-align: left;
}
</style>