<template>
  <div class="default-container py-10 relative">
    <h2 class="text-4xl font-semibold text-center mb-6">Buttons</h2>
    <div class="absolute top-12 right-6">
      <CopyCode :code="code" />
    </div>
    <div class="gap-4 flex items-start max-sm:flex-col justify-center">
      <!-- Solid Buttons -->
      <div class="rounded-3xl border border-zinc-700 p-4 w-full">
        <h2 class="font-bold mb-4 flex items-center">
          Buttons
          <Dot />
          Solid
        </h2>
        <div class="space-y-2 *:block">
          <button
            class="bg-twc-theme-600 hover:bg-twc-theme-700 duration-200 text-white font-medium text-sm px-4 py-2 rounded-md w-full border border-transparent"
          >
            Button 600
          </button>
          <button
            class="bg-twc-theme-500 hover:bg-twc-theme-600 duration-200 text-white font-medium text-sm px-4 py-2 rounded-md w-full border border-transparent"
          >
            Button 500
          </button>
          <button
            class="bg-twc-theme-400 hover:bg-twc-theme-500 duration-200 text-white font-medium text-sm px-4 py-2 rounded-md w-full border border-transparent"
          >
            Button 400
          </button>
        </div>
      </div>

      <!-- Outline Buttons -->
      <div class="rounded-3xl border border-zinc-700 p-4 w-full">
        <h2 class="font-bold mb-4 flex items-center">
          Buttons
          <Dot />
          Outline
        </h2>
        <div class="space-y-2 *:block">
          <button
            class="border border-twc-theme-600 hover:border-twc-theme-700 hover:text-twc-theme-700 text-twc-theme-600 font-medium text-sm px-4 py-2 rounded-md w-full duration-200"
          >
            Button 600
          </button>
          <button
            class="border border-twc-theme-500 hover:border-twc-theme-600 hover:text-twc-theme-600 text-twc-theme-500 font-medium text-sm px-4 py-2 rounded-md w-full duration-200"
          >
            Button 500
          </button>
          <button
            class="border border-twc-theme-400 hover:border-twc-theme-500 hover:text-twc-theme-500 text-twc-theme-400 font-medium text-sm px-4 py-2 rounded-md w-full duration-200"
          >
            Button 400
          </button>
        </div>
      </div>

      <!-- Icon Buttons -->
      <div class="rounded-3xl border border-zinc-700 p-4 w-full">
        <h2 class="font-bold mb-4 flex items-center">
          Buttons
          <Dot />
          Icon
        </h2>
        <div class="space-y-2">
          <button
            class="flex items-center bg-twc-theme-600 gap-3 hover:bg-twc-theme-700 duration-200 text-white font-medium text-sm px-4 py-2 rounded-md w-full border border-transparent"
          >
            <ArrowRight class="text-white size-4" />
            Button 600
          </button>
          <button
            class="flex items-center bg-twc-theme-500 gap-3 hover:bg-twc-theme-600 duration-200 text-white font-medium text-sm px-4 py-2 rounded-md w-full border border-transparent"
          >
            <ArrowRight class="text-white size-4" />
            Button 500
          </button>
          <button
            class="flex items-center bg-twc-theme-400 gap-3 hover:bg-twc-theme-500 duration-200 text-white font-medium text-sm px-4 py-2 rounded-md w-full border border-transparent"
          >
            <ArrowRight class="text-white size-4" />
            Button 400
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ArrowRight, Dot } from 'lucide-vue-next';
  import CopyCode from '@/components/CopyCode.vue';

  const code = `
  <div class="gap-4 flex items-start max-sm:flex-col justify-center">
      <!-- Solid Buttons -->
      <div class="rounded-3xl border border-zinc-700 p-4 w-full">
        <h2 class="font-bold mb-4 flex items-center">
          Buttons
          <Dot />
          Solid
        </h2>
        <div class="space-y-2 *:block">
          <button
            class="bg-twc-theme-600 hover:bg-twc-theme-700 duration-200 text-white font-medium text-sm px-4 py-2 rounded-md w-full border border-transparent"
          >
            Button 600
          </button>
          <button
            class="bg-twc-theme-500 hover:bg-twc-theme-600 duration-200 text-white font-medium text-sm px-4 py-2 rounded-md w-full border border-transparent"
          >
            Button 500
          </button>
          <button
            class="bg-twc-theme-400 hover:bg-twc-theme-500 duration-200 text-white font-medium text-sm px-4 py-2 rounded-md w-full border border-transparent"
          >
            Button 400
          </button>
        </div>
      </div>

      <!-- Outline Buttons -->
      <div class="rounded-3xl border border-zinc-700 p-4 w-full">
        <h2 class="font-bold mb-4 flex items-center">
          Buttons
          <Dot />
          Outline
        </h2>
        <div class="space-y-2 *:block">
          <button
            class="border border-twc-theme-600 hover:border-twc-theme-700 hover:text-twc-theme-700 text-twc-theme-600 font-medium text-sm px-4 py-2 rounded-md w-full duration-200"
          >
            Button 600
          </button>
          <button
            class="border border-twc-theme-500 hover:border-twc-theme-600 hover:text-twc-theme-600 text-twc-theme-500 font-medium text-sm px-4 py-2 rounded-md w-full duration-200"
          >
            Button 500
          </button>
          <button
            class="border border-twc-theme-400 hover:border-twc-theme-500 hover:text-twc-theme-500 text-twc-theme-400 font-medium text-sm px-4 py-2 rounded-md w-full duration-200"
          >
            Button 400
          </button>
        </div>
      </div>

      <!-- Icon Buttons -->
      <div class="rounded-3xl border border-zinc-700 p-4 w-full">
        <h2 class="font-bold mb-4 flex items-center">
          Buttons
          <Dot />
          Icon
        </h2>
        <div class="space-y-2">
          <button
            class="flex items-center bg-twc-theme-600 gap-3 hover:bg-twc-theme-700 duration-200 text-white font-medium text-sm px-4 py-2 rounded-md w-full border border-transparent"
          >
            <ArrowRight class="text-white size-4" />
            Button 600
          </button>
          <button
            class="flex items-center bg-twc-theme-500 gap-3 hover:bg-twc-theme-600 duration-200 text-white font-medium text-sm px-4 py-2 rounded-md w-full border border-transparent"
          >
            <ArrowRight class="text-white size-4" />
            Button 500
          </button>
          <button
            class="flex items-center bg-twc-theme-400 gap-3 hover:bg-twc-theme-500 duration-200 text-white font-medium text-sm px-4 py-2 rounded-md w-full border border-transparent"
          >
            <ArrowRight class="text-white size-4" />
            Button 400
          </button>
        </div>
      </div>
    </div>
    `;
</script>
