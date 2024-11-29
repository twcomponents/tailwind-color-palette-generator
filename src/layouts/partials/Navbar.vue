<template>
  <div
    class="fixed top-0 left-0 py-4 w-full bg-white/80 dark:bg-zinc-900/80 border-b dark:border-zinc-800 z-50 backdrop-blur-md"
  >
    <nav class="flex items-center justify-between default-container">
      <RouterLink to="/" class="font-extrabold text-3xl">
        <span class="text-twc-theme-400">UI</span>
        /
        <span class="text-twc-theme2-400">Palette</span>
      </RouterLink>

      <div class="flex items-center gap-2.5">
        <a
          href="https://github.com/twcomponents/tailwind-color-palette-generator"
          class="size-10 rounded-md border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 duration-200 flex items-center justify-center"
        >
          <Github class="size-5 dark:text-white" />
        </a>
        <ThemeSwitcher />
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
  import ThemeSwitcher from '@/components/features/ThemeSwitcher.vue';
  import { Github } from 'lucide-vue-next';
</script>
