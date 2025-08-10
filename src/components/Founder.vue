<script setup lang="ts">
import photo from '../assets/photo.jpg'
import GradientCard from './GradientCard.vue'
</script>

<template>
  <GradientCard>
    <a href="https://www.linkedin.com/in/rsrs/" target="_blank" rel="noopener noreferrer" class="founder-link">
      <div class="founder">
        <h1 class="slogan">Meet the <span class="highlight">founder</span></h1>

        <div class="profile">
          <img :src="photo" alt="Reinier Schep" class="photo" />
          <div class="info">
            <h2 class="name">Reinier Schep</h2>
            <p class="title">Founder of <strong>Schep Capital</strong></p>
          </div>
        </div>

        <p class="bio">
           My passion for finance, math and machine learning combined with my trading experience has led me to create this private fund.
        </p>
      </div>
    </a>
  </GradientCard>
</template>

<style scoped>
.founder-link {
  display: block;
  color: inherit;           /* keep text colors */
  text-decoration: none;    /* remove underline */
  cursor: pointer;
  /* Make it fill the card */
  width: 100%;
  height: 100%;
}

.founder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  text-align: center;
  max-width: 720px;
  margin: 0 auto;
}


/* Photo + Name/Title */
.profile {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  text-align: left;
}

.photo {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
}

/* On small screens (mobile) */
@media (max-width: 600px) {
  .photo {
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 0;
    margin-bottom: 0;
    width: 190px;
    height: 190px;
  }
}


/* Text block beside photo */
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;  /* centers vertically within its height */
  height: 160px;            /* same as photo height */
  gap: 0.3rem;              /* small vertical gap between name and title */
}

@media (max-width: 600px) {
  .info {
    height: auto;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 0;
    margin-bottom: 0;
  }
}

.name {
  font-size: 2.3rem;
  font-weight: 700;
  color: var(--color-text-main);
  margin: 0;
  /* remove padding or margin here */
}

.title {
  font-size: 1.05rem;
  color: var(--color-text-main);
  margin: 0;
  align-self: center;       /* center horizontally */
}



.title strong {
  color: var(--color-primary);
  font-weight: 600;
}

/* Bio below everything */
.bio {
  font-size: var(--font-size-description);
  font-weight: 500;
  color: var(--color-text-secondary);
  max-width: 620px;
  margin: 0 auto;
  line-height: 1.5;
}
</style>
