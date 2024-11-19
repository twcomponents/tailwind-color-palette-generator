<template>
  <main class="flex flex-col gap-10 w-full text-center">
    <div class="flex flex-col gap-5">
      <h1 class="text-3xl poppins-medium">
        TailwindCSS Color Palette Generator
      </h1>

      <p class="text-zinc-500 text-sm font-thin">
        Press
        <button
          class="inline-block border border-gray-500 px-1 text-xs font-semibold rounded-[5px] h-[18px] hover:bg-zinc-800 transition duration-200 ease-in-out align-baseline"
          @click="spacebarPressed()"
        >
          spacebar
        </button>
        , enter a hexcode or change the RGB values to generate a color palette.
      </p>
    </div>

    <ColorPicker ref="colorPickerRef" @change="onColorChange($event)" />
  </main>
</template>

<script setup lang="ts">
  import ColorPicker from '@/components/ColorPicker.vue';

  import { onMounted, ref } from 'vue';

  const colorPickerRef = ref<ColorPicker | null>(null);

  const onColorChange = (color: string) => {
    console.log(color);
  };

  const spacebarPressed = () => {
    colorPickerRef.value?.generateRandomColor();
  };
</script>
