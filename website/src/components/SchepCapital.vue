<template>
  <nav class="navbar">
    <img src="../assets/logo.webp" alt="Logo" class="logo-image" />
  </nav>
</template>

<style scoped>
.navbar {
  background: white;
  width: 100%;
  height: 70px;           /* Adjust navbar height here */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1); /* subtle shadow */
  box-sizing: border-box;
  padding: 0 1rem;       /* horizontal padding */
}

.logo-image {
  height: 50px;          /* Adjust logo height here */
  width: auto;
  object-fit: contain;
}
</style>
