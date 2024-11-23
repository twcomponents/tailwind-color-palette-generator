<script setup lang="ts">
  import { Github } from 'lucide-vue-next';
</script>

<template>
  <div
    class="fixed top-0 left-0 py-2.5 w-full bg-black border-b border-zinc-700 z-50"
  >
    <nav class="flex items-center justify-between default-container">
      <div class="font-extrabold text-3xl">
        <span class="text-twc-theme-500">UI</span>
        Palette
      </div>

      <a
        href="https://github.com/twcomponents/tailwind-color-palette-generator"
        class="size-10 rounded-md border border-zinc-700 hover:bg-zinc-600 duration-200 flex items-center justify-center"
      >
        <Github class="size-5 text-white" />
      </a>
    </nav>
  </div>
</template>
