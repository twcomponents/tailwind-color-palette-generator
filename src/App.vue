<template>
  <main>
    <div class="logos">
      <!-- Vite -->
      <a href="https://vite.dev/" target="_blank">
        <img
          src="./assets/VscodeIconsFileTypeVite.svg"
          class="logo vite"
          alt="Vite logo"
        />
      </a>

      <!-- Vue -->
      <a href="https://vuejs.org/" target="_blank">
        <img
          src="./assets/VscodeIconsFileTypeVue.svg"
          class="logo vue"
          alt="Vue logo"
        />
      </a>

      <!-- Typescript -->
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img
          src="./assets/VscodeIconsFileTypeTypescriptOfficial.svg"
          class="logo ts"
          alt="TypeScript logo"
        />
      </a>

      <!-- SASS -->
      <a href="https://sass-lang.com/" target="_blank">
        <img
          src="./assets/VscodeIconsFileTypeSass.svg"
          class="logo sass"
          alt="SASS logo"
        />
      </a>

      <!-- Tailwind -->
      <a href="https://tailwindcss.com/" target="_blank">
        <img
          src="./assets/VscodeIconsFileTypeTailwind.svg"
          class="logo tw"
          alt="Tailwind logo"
        />
      </a>
    </div>

    <HelloWorld message="Vite + Vue + TypeScript + SASS + Tailwind" />
  </main>
</template>

<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue';
</script>

<style scoped lang="scss">
  .logos {
    @apply flex flex-row gap-5;

    .logo {
      @apply size-32;

      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;

      &.vite:hover {
        filter: drop-shadow(0 0 2em #bd34feaa);
      }

      &.vue:hover {
        filter: drop-shadow(0 0 2em #41b883aa);
      }

      &.ts:hover {
        filter: drop-shadow(0 0 2em #3178c6aa);
      }

      &.sass:hover {
        filter: drop-shadow(0 0 2em #cd6799aa);
      }

      &.tw:hover {
        filter: drop-shadow(0 0 2em #44a8b3aa);
      }
    }
  }
</style>
