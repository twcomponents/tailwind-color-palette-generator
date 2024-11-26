<template>
  <div class="default-container py-10 relative">
    <h2 class="text-4xl font-semibold text-center mb-6">Badges</h2>
    <div class="absolute top-12 right-6">
      <CopyCode :code="code" />
    </div>
    <div class="flex flex-wrap gap-2 justify-center">
      <!-- Transparent with Border -->
      <span
        class="bg-transparent text-twc-theme-600 border border-twc-theme-600 text-xs font-medium px-2 py-0.5 rounded"
      >
        Transparent & Border
      </span>

      <!-- Simple Solid Badge -->
      <span
        class="bg-twc-theme-100 text-twc-theme-800 text-xs font-medium px-2 py-0.5 rounded"
      >
        Simple
      </span>

      <!-- Rounded Full -->
      <span
        class="bg-twc-theme-500 text-white text-xs font-medium px-2 py-0.5 rounded-full"
      >
        Rounded
      </span>

      <!-- Subtle Shadow Badge -->
      <div
        class="bg-twc-theme-50 text-twc-theme-700 text-xs font-medium px-2 py-0.5 rounded shadow-sm"
      >
        Subtle Shadow
      </div>

      <!-- Dot with Transparent Background -->
      <span
        class="flex items-center text-twc-theme-700 text-xs font-medium px-2 py-0.5 rounded border border-twc-theme-800"
      >
        <span class="w-2 h-2 bg-twc-theme-500 rounded-full mr-1"></span>
        Dot Badge
      </span>

      <!-- Soft Gradient Badge -->
      <span
        class="bg-gradient-to-r from-twc-theme-100 to-twc-theme-200 text-twc-theme-800 text-xs font-medium px-2 py-0.5 rounded"
      >
        Soft Gradient
      </span>

      <!-- Badge with Close Icon -->
      <span
        class="flex items-center bg-twc-theme-100 text-twc-theme-800 text-xs font-medium px-2 py-0.5 rounded"
      >
        Closable
        <button class="ml-1 text-twc-theme-600 hover:text-twc-theme-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 h-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </span>

      <!-- Interactive Hover Badge -->
      <span
        class="bg-twc-theme-500 text-white text-xs font-medium px-2 py-0.5 rounded-full transition-transform hover:scale-105"
      >
        Hover Effect
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import CopyCode from '@/components/CopyCode.vue';

  const code = `
  <div class="flex flex-wrap gap-2 justify-center">
      <!-- Transparent with Border -->
      <span
        class="bg-transparent text-twc-theme-600 border border-twc-theme-600 text-xs font-medium px-2 py-0.5 rounded"
      >
        Transparent & Border
      </span>

      <!-- Simple Solid Badge -->
      <span
        class="bg-twc-theme-100 text-twc-theme-800 text-xs font-medium px-2 py-0.5 rounded"
      >
        Simple
      </span>

      <!-- Rounded Full -->
      <span
        class="bg-twc-theme-500 text-white text-xs font-medium px-2 py-0.5 rounded-full"
      >
        Rounded
      </span>

      <!-- Subtle Shadow Badge -->
      <div
        class="bg-twc-theme-50 text-twc-theme-700 text-xs font-medium px-2 py-0.5 rounded shadow-sm"
      >
        Subtle Shadow
      </div>

      <!-- Dot with Transparent Background -->
      <span
        class="flex items-center text-twc-theme-700 text-xs font-medium px-2 py-0.5 rounded border border-twc-theme-800"
      >
        <span class="w-2 h-2 bg-twc-theme-500 rounded-full mr-1"></span>
        Dot Badge
      </span>

      <!-- Soft Gradient Badge -->
      <span
        class="bg-gradient-to-r from-twc-theme-100 to-twc-theme-200 text-twc-theme-800 text-xs font-medium px-2 py-0.5 rounded"
      >
        Soft Gradient
      </span>

      <!-- Badge with Close Icon -->
      <span
        class="flex items-center bg-twc-theme-100 text-twc-theme-800 text-xs font-medium px-2 py-0.5 rounded"
      >
        Closable
        <button class="ml-1 text-twc-theme-600 hover:text-twc-theme-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 h-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </span>

      <!-- Interactive Hover Badge -->
      <span
        class="bg-twc-theme-500 text-white text-xs font-medium px-2 py-0.5 rounded-full transition-transform hover:scale-105"
      >
        Hover Effect
      </span>
    </div>
  `;
</script>
