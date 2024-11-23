<template>
  <div class="default-container py-10">
    <h2 class="text-4xl font-semibold text-center mb-6">Spinners</h2>
    <div class="flex gap-4 w-full justify-center">
      <div
        class="size-20 rounded-full animate-spin border-[4px] border-solid border-twc-theme-500 border-t-transparent"
      ></div>

      <div class="flex size-20">
        <div class="relative">
          <!-- Outer Ring-->
          <div
            class="size-20 rounded-full absolute border-[4px] border-solid border-zinc-700"
          ></div>

          <!-- Inner Ring -->
          <div
            class="size-20 rounded-full animate-spin absolute border-[4px] border-solid border-twc-theme-500 border-t-transparent"
          ></div>
        </div>
      </div>

      <div
        class="size-20 rounded-full animate-spin border-[4px] border-dashed border-twc-theme-500 border-t-transparent"
      ></div>

      <div class="flex size-20">
        <div class="relative">
          <!-- Outer Ring-->
          <div
            class="size-20 rounded-full absolute border-[4px] border-dashed border-zinc-700"
          ></div>

          <!-- Inner Ring -->
          <div
            class="size-20 rounded-full animate-spin absolute border-[4px] border-dashed border-twc-theme-500 border-t-transparent"
          ></div>
        </div>
      </div>

      <div
        class="size-20 rounded-full animate-spin border-x-[4px] border-solid border-twc-theme-500 border-t-transparent"
      ></div>

      <!-- Edge X Ring Spinner s2 -->
      <div
        class="size-20 rounded-full animate-spin border-x-[4px] border-dashed border-twc-theme-500 border-t-transparent"
      ></div>

      <div
        class="size-20 rounded-full animate-spin border-y-[4px] border-solid border-twc-theme-500 border-t-transparent shadow-md"
      ></div>

      <div
        class="size-20 rounded-full animate-spin border-y-[4px] border-dashed border-twc-theme-500 border-t-transparent"
      ></div>
    </div>
  </div>
</template>
