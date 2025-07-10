<script setup lang="ts">
import Founder from "./components/Founder.vue";
import Cagr from "./components/Cagr.vue";
import SchepCapital from "./components/SchepCapital.vue";
import EquityCurve from "./components/EquityCurve.vue";
import ReturnsOverview from "./components/ReturnsOverview.vue";
import Ratios from "./components/Ratios.vue";
</script>

<template>
  <div class="background">
    <SchepCapital />
    <div class="card-layout">
      <Cagr />
      <Founder />
    </div>
    <ReturnsOverview metric="btc">
      <p>
        The table shows the historical returns made by the trading strategy in terms of <strong>Bitcoin</strong>.
        The strategy was deployed into the real world at the start of <strong>June 2024</strong>.
        The trading strategy is centered around the idea that accumulating more Bitcoin is a profitable way to make money.
        The accumulation of more Bitcoin, along with a price increase in Bitcoin in terms of USD, leads to <strong>exponential growth</strong>
        in bull markets and <strong>mitigates losses</strong> in bear markets. In the long term, this growth far exceeds traditional investing methods.
      </p>
    </ReturnsOverview>
    <div class="card-layout"></div>
    <ReturnsOverview metric="usdt">
      <p>
        This second table shows the historical returns in terms of <strong>USDT</strong>, since this is what matters directly to investors.
        The trading strategy doesn't directly optimize for USDT returns, but as shown in the table, it still shows exquisite results.
        This fund is well suited for investors with <strong> substantial risk appetite</strong>  seeking <strong>tremendous returns</strong>.
        The strategy is designed such that it captures <strong>extraordinary gains</strong> which compensate all the losing trades.
        It operates strictly in the crypto market, <strong>fully automated</strong>. Trying to capture big moves in the market early is at
        the heart of the strategy, and it gets out with minimal losses if the market moves opposite. Therefore, this fund <strong>thrives in volatility</strong>,
        precisely what the crypto market is known for.
      </p>
    </ReturnsOverview>
    <div class="card-layout"></div>
    <EquityCurve></EquityCurve>
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
</style>
