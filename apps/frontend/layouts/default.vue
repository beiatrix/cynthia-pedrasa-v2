<template>
  <div class="w-screen min-h-screen scroll-smooth bg-light">
    <AppBar />
    <div class="container py-16 px-6 md:px-18 lg:px-36">
      <slot />
    </div>
    <Footer />
  </div>
</template>
