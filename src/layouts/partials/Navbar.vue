<template>
  <div
    class="fixed top-0 left-0 py-4 w-full bg-white/80 dark:bg-zinc-900/80 border-b dark:border-zinc-800 z-50 backdrop-blur-md"
  >
    <nav class="flex items-center justify-between default-container">
      <RouterLink to="/" class="font-extrabold text-3xl">
        <span class="text-twc-theme-400">TWC</span>
        /
        <span class="text-twc-theme2-400">Palette</span>
      </RouterLink>

      <div class="flex items-center gap-2.5">
        <github-button
          href="https://github.com/twcomponents/tailwind-color-palette-generator"
          data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star twcomponents/tailwind-color-palette-generator on GitHub"
          class="h-5"
        >
          Star
        </github-button>

        <ThemeSwitcher />
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
  import ThemeSwitcher from '@/components/features/ThemeSwitcher.vue';

  import GithubButton from 'vue-github-button';
</script>
