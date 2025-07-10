<script setup lang="ts">

</script>

<template>
  <div class="logo-container">
    <img src="/logo.webp" alt="Logo" class="logo-image" />
  </div>
</template>

<style>
.logo-container {
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 0;
}

.logo-image {
  width: 70vw;
  max-width: 40%;
  height: auto;
  padding: 0;
}

@media (max-width: 600px) {
  .logo-image {
    width: 70vw;
    max-width: 1000px;
    height: auto;
    padding: 0;
  }
}
</style>
