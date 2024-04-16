<template>
  <div class="relative bg-white">
    <NuxtLayout>
      <Header />
      <NuxtPage />
      <Footer />
    </NuxtLayout>
  </div>
</template>

<style>
/* Add any global styles here */
body {
  font-family: 'Montserrat', sans-serif;
}

.font-island {
  font-family: 'Island Moments', cursive;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>