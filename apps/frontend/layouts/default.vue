<template>
  <div class="w-screen min-h-screen scroll-smooth bg-light">
    <AppBar />
    <div class="container pt-16 pb-20 px-6 md:px-18 lg:px-36">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  /* Custom Loader Animation */
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .loader {
    border: 4px solid var(--color-powder-blue);
    border-top: 4px solid var(--color-aqua-blue);
    border-radius: 50%;
    width: 36px;
    height: 36px;
    animation: spin 1s linear infinite;
  }
</style>
