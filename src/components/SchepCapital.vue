<template>
  <nav class="navbar">
    <span class="brand-name">Schep Capital</span>
    <img src="../assets/logo.webp" alt="Logo" class="logo-image" />
  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap');




.brand-name {
  font-family: "Cormorant Garamond", serif;
  font-weight: bolder;
  font-size: 1.6rem;   /* slightly larger text */
  color: #1a1a1a;      /* dark gray, softer than pure black */
  letter-spacing: 1px; /* adds spacing between letters */
}

.navbar {
  background: white;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  box-sizing: border-box;
  padding: 0 1rem;
}


.logo-image {
  height: 40px;          /* Adjust logo height here */
  width: auto;
  object-fit: contain;
}
</style>
