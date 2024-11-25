<script setup lang="ts">
  import { Github } from 'lucide-vue-next';
</script>

<template>
  <div
    class="fixed top-0 left-0 py-4 w-full bg-white/80 dark:bg-zinc-900/80 border-b dark:border-zinc-800 z-50 backdrop-blur-md"
  >
    <nav class="flex items-center justify-between default-container">
      <div class="font-extrabold text-3xl">
        <a href="https://tailwindcomponents.dev" class="text-twc-theme-400">
          UI
        </a>
        / Palette
      </div>

      <a
        href="https://github.com/twcomponents/tailwind-color-palette-generator"
        class="size-10 rounded-md border border-zinc-700 hover:bg-zinc-600 duration-200 flex items-center justify-center"
      >
        <Github class="size-5 dark:text-white" />
      </a>
    </nav>
  </div>
</template>
