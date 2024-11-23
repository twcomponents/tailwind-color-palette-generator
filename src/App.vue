<template>
  <div class="flex flex-col w-full py-10 default-container">
    <div class="mt-8 md:mt-16 md:mb-6 mb-6">
      <div class="md:my-14 md:mb-8">
        <div class="md:mb-12 text-center">
          <div class="text-5xl font-bold text-color w-full">
            Tailwind CSS
            <br />
            Color Generator
          </div>
          <p class="text-zinc-500 font-thin mt-6 text-xl">
            Press
            <button
              class="inline-block border border-gray-500 px-1 text-base font-semibold rounded-[5px] h-[25px] hover:bg-zinc-800 transition duration-200 ease-in-out align-baseline"
              :class="{
                'bg-yellow-600 text-zinc-200 border-zinc-200': spacebarPress,
              }"
              @click="generateRandomColors()"
            >
              spacebar
            </button>
            , enter a hexcode or change the RGB values to generate a color
            palette.
          </p>
        </div>

        <div class="flex flex-col gap-5 max-w-lg mx-auto">
          <ColorPicker ref="colorPickerRef" @change="onColorChange($event)" />

          <template v-if="secondaryColorPalette !== null">
            <ColorPicker
              ref="secondaryColorPickerRef"
              @change="onSecondaryColorChange($event)"
            />
          </template>
        </div>

        <div class="justify-center mt-2 hidden md:flex">
          <button
            class="flex items-center gap-1 cursor-pointer text-color-muted-extra p-4"
            @click="addSecondaryColor()"
            v-if="secondaryColorPalette === null"
          >
            <Plus class="size-5" />
            Add secondary color
          </button>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-5">
      <ColorPalette :colorPalette="colorPalette" />
      <ColorPalette2
        :colorPalette="secondaryColorPalette"
        v-if="secondaryColorPalette !== null"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  // native
  import { ref, onMounted, onUnmounted } from 'vue';

  // components
  import ColorPicker from '@/components/ColorPicker.vue';
  import ColorPalette from '@/components/ColorPalette.vue';
  import ColorPalette2 from '@/components/ColorPalette2.vue';

  // third-party
  import tailwindcssPaletteGenerator from '@bobthered/tailwindcss-palette-generator';
  import { Plus } from 'lucide-vue-next';

  // #region Primary Color Palette

  const colorPalette = ref<any[]>([]);
  const colorPickerRef = ref<InstanceType<typeof ColorPicker> | null>(null);

  const onColorChange = (color: string) => {
    const root = document.documentElement;

    const newPalette = Object.entries(
      tailwindcssPaletteGenerator({
        colors: [color],
        names: ['theme'],
      }).theme
    );

    colorPalette.value = newPalette?.map((item: string[]) => {
      const variableName = `--twc-theme-${item[0]}`,
        color = item[1];

      root.style.setProperty(variableName, color);

      return {
        name: variableName,
        level: item[0],
        color: color,
      };
    });
  };

  // #endregion

  // #region Secondary Color Palette

  const secondaryColorPalette = ref<any[] | null>(null);
  const secondaryColorPickerRef = ref<InstanceType<typeof ColorPicker> | null>(
    null
  );

  const onSecondaryColorChange = (color: string) => {
    const root = document.documentElement;

    const newPalette = Object.entries(
      tailwindcssPaletteGenerator({
        colors: [color],
        names: ['theme'],
      }).theme
    );

    secondaryColorPalette.value = newPalette?.map((item: string[]) => {
      const variableName = `--twc-theme2-${item[0]}`,
        color = item[1];

      root.style.setProperty(variableName, color);

      return {
        name: variableName,
        level: item[0],
        color: color,
      };
    });
  };

  const addSecondaryColor = () => {
    secondaryColorPalette.value = [];
    secondaryColorPickerRef.value?.generateRandomColor();
  };

  // #endregion

  // #region Random Color Generation

  const spacebarPress = ref<boolean>(false);

  const generateRandomColors = () => {
    colorPickerRef.value?.generateRandomColor();
    secondaryColorPickerRef.value?.generateRandomColor();
  };

  const handleSpacePress = (event: KeyboardEvent) => {
    if (event.code === 'Space') {
      generateRandomColors();

      spacebarPress.value = true;

      setTimeout(() => {
        spacebarPress.value = false;
      }, 250);
    }
  };

  // #endregion

  onMounted(() => {
    window.addEventListener('keydown', handleSpacePress);
  });

  onUnmounted(() => {
    window.removeEventListener('keydown', handleSpacePress);
  });
</script>
