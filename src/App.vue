<template>
  <main class="flex flex-col gap-10 w-full text-center">
    <div class="flex flex-col gap-5">
      <h1 class="text-3xl poppins-medium">
        TailwindCSS Color Palette Generator
      </h1>

      <p class="text-zinc-500 text-sm font-thin">
        Press spacebar, enter a hexcode or change the RGB values to generate a
        color palette.
      </p>
    </div>

    <ColorPicker @change="onColorChange($event)" />
  </main>
</template>

<script setup lang="ts">
  import ColorPicker from '@/components/ColorPicker.vue';

  const onColorChange = (color: string) => {
    console.log(color);
  };
</script>
