<template>
  <button
    class="size-10 rounded-md border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 duration-200 flex items-center justify-center group"
    aria-label="Toggle theme"
    @click="toggleTheme()"
  >
    <p class="hidden dark:block">
      <Sun class="size-5 text-white" />
    </p>
    <p class="dark:hidden">
      <Moon class="size-5 text-black" />
    </p>
  </button>
</template>

<script setup lang="ts">
  import { Moon, Sun } from 'lucide-vue-next';
  import { onMounted } from 'vue';

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  };

  // Set the initial theme
  onMounted(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });
</script>
