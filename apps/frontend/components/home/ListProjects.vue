<template>
  <div class="grid grid-cols-12 gap-4 py-6">
    <div class="col-span-12 md:col-span-3 tracking-wide flex">
      <h2 class="text-4xl font-bold font-serif p-4">
        Projects
      </h2>
    </div>
    <div class="col-span-12 md:col-span-9 p-4 content-center">
      <ItemProject v-for="i in 5" :key="`item-project-${i}`" />
    </div>
  </div>
</template>
