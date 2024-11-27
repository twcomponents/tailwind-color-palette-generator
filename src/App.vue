<template>
  <Navbar />

  <main class="mt-[50px]">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
  import Navbar from '@/layouts/partials/Navbar.vue';
</script>
