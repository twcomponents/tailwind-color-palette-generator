<template>
  <button
    class="size-10 rounded-md border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 duration-200 flex items-center justify-center group"
    aria-label="Toggle theme"
    @click="toggleTheme()"
  >
    <Moon class="size-5 text-white" v-if="themeMode === ThemeMode.DARK" />
    <Sun class="size-5 text-black" v-if="themeMode === ThemeMode.LIGHT" />
    <MonitorSmartphone
      class="size-5 text-black dark:text-white"
      v-if="themeMode === ThemeMode.SYSTEM"
    />
  </button>
</template>

<script setup lang="ts">
  import { Moon, Sun, MonitorSmartphone } from 'lucide-vue-next';
  import { onMounted, ref } from 'vue';

  enum ThemeMode {
    DARK = 'dark',
    LIGHT = 'light',
    SYSTEM = 'system',
  }

  enum AppTheme {
    DARK = 'dark',
    LIGHT = 'light',
  }

  const appTheme = ref<AppTheme>(AppTheme.DARK);
  const themeMode = ref<ThemeMode>(ThemeMode.SYSTEM);

  const toggleTheme = () => {
    if (themeMode.value === ThemeMode.SYSTEM) {
      themeMode.value = ThemeMode.LIGHT;
      appTheme.value = AppTheme.LIGHT;
    } else if (themeMode.value === ThemeMode.LIGHT) {
      themeMode.value = ThemeMode.DARK;
      appTheme.value = AppTheme.DARK;
    } else {
      themeMode.value = ThemeMode.SYSTEM;
      appTheme.value = getCurrentBrowserTheme();
    }

    localStorage.themeMode = themeMode.value;

    syncTheme(appTheme.value);
  };

  const getCurrentBrowserTheme = (): AppTheme => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? AppTheme.DARK
      : AppTheme.LIGHT;
  };

  const syncTheme = (theme: AppTheme) => {
    if (theme === AppTheme.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  onMounted(() => {
    themeMode.value = (localStorage.themeMode as ThemeMode) ?? ThemeMode.SYSTEM;

    console.log(themeMode.value);

    if (themeMode.value === ThemeMode.SYSTEM) {
      appTheme.value = getCurrentBrowserTheme();
    } else if (themeMode.value === ThemeMode.DARK) {
      appTheme.value = AppTheme.DARK;
    } else {
      appTheme.value = AppTheme.LIGHT;
    }

    syncTheme(appTheme.value);
  });
</script>
