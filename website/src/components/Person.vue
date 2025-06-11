<script setup lang="ts">
import photo from '../assets/photo.jpg'
</script>

<template>
  <section class="hero-container">
    <div class="hero-text">
      <h1>Complex financial markets, tackled with elegance</h1>
    </div>
    <div class="hero-photo">
      <img :src="photo" alt="Your Name" class="profile-photo" />
      <p class="name">Your Name</p>
    </div>
  </section>
</template>

<style scoped>
.hero-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  margin: 60px auto;
  padding: 20px;
  gap: 40px;
}

.hero-text h1 {
  font-size: 2rem;
  color: #333;
  font-weight: bold;
  max-width: 60%;
}

.hero-photo {
  text-align: center;
}

.profile-photo {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.name {
  margin-top: 12px;
  font-size: 1.1rem;
  color: #555;
  font-weight: 500;
}
</style>
