<template>
  <div class="w-full py-10 default-container">
    <div class="mt-8 md:mt-16 md:mb-6 mb-6">
      <div class="md:my-14 md:mb-8">
        <div class="md:mb-12 text-center">
          <div class="text-5xl font-bold text-color w-full">
            Tailwind CSS
            <br />
            Color Generator
          </div>
          <p class="text-zinc-500 font-thin mt-6 text-lg">
            Press
            <button
              class="inline-block border border-gray-500 px-1 text-xs font-semibold rounded-[5px] h-[18px] hover:bg-zinc-800 transition duration-200 ease-in-out align-baseline"
              @click="spacebarPressed()"
            >
              spacebar
            </button>
            , enter a hexcode or change the RGB values to generate a color
            palette.
          </p>
        </div>

        <div class="max-w-lg mx-auto">
          <ColorPicker ref="colorPickerRef" @colorChange="onColorChange" />
        </div>

        <div class="justify-center mt-2 hidden md:flex">
          <div
            class="flex items-center gap-1 cursor-pointer text-color-muted-extra p-4"
          >
            <Plus class="size-5" />
            Add secondary color
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import ColorPicker from '@/components/ColorPicker.vue';
  import { Plus } from 'lucide-vue-next';
  import { ref } from 'vue';

  const colorPickerRef = ref<InstanceType<typeof ColorPicker> | null>(null);

  const onColorChange = (color: string) => {
    console.log(color);
  };

  const spacebarPressed = () => {
    colorPickerRef.value?.generateRandomColor();
  };
</script>
