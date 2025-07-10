<script setup lang="ts">
import Founder from "./components/Founder.vue";
import Cagr from "./components/Cagr.vue";
import SchepCapital from "./components/SchepCapital.vue";
import Btc from "./components/Btc.vue";
import Usdt from "./components/Usdt.vue";
</script>

<template>
  <div class="background">
    <SchepCapital />
    <div class="card-layout">
      <Cagr />
      <Founder />
    </div>
    <Btc></Btc>
    <div class="card-layout"></div>
    <Usdt></Usdt>
    <div class="card-layout"></div>
  </div>
</template>


<style scoped>
.background {
  background: linear-gradient(
      135deg,
      #0f2027 0%,    /* very dark blue */
      #203a43 30%,   /* medium dark blue */
      #2c5364 60%,   /* steel blue */
      #4a7587 90%    /* lighter blue */
  );
  min-height: 100vh;
}



.card-layout {
  display: flex;
  flex-direction: column;
  margin: 0;
  align-items: center;
  justify-content: center;
}

@media (min-width: 768px) {
  .card-layout {
    flex-direction: row;
    align-items: stretch;
  }

  .card-layout > * {
    flex: 1;
    max-width: 50%;
  }
}
</style>
