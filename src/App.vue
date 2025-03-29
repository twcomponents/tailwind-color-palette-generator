<template>
  <Navbar />

  <main class="mt-[50px]">
    <RouterView />
  </main>

  <!-- To keep these classes in bundled CSS -->
  <!-- Also, in v4 safelist is not supported -->
  <div class="hidden">
    <div class="bg-twc-theme-50"></div>
    <div class="bg-twc-theme-100"></div>
    <div class="bg-twc-theme-200"></div>
    <div class="bg-twc-theme-300"></div>
    <div class="bg-twc-theme-400"></div>
    <div class="bg-twc-theme-500"></div>
    <div class="bg-twc-theme-600"></div>
    <div class="bg-twc-theme-700"></div>
    <div class="bg-twc-theme-800"></div>
    <div class="bg-twc-theme-900"></div>
    <div class="bg-twc-theme-950"></div>
    <div class="bg-twc-theme2-50"></div>
    <div class="bg-twc-theme2-100"></div>
    <div class="bg-twc-theme2-200"></div>
    <div class="bg-twc-theme2-300"></div>
    <div class="bg-twc-theme2-400"></div>
    <div class="bg-twc-theme2-500"></div>
    <div class="bg-twc-theme2-600"></div>
    <div class="bg-twc-theme2-700"></div>
    <div class="bg-twc-theme2-800"></div>
    <div class="bg-twc-theme2-900"></div>
    <div class="bg-twc-theme2-950"></div>
  </div>
</template>

<script setup lang="ts">
  import Navbar from '@/layouts/partials/Navbar.vue';
</script>
