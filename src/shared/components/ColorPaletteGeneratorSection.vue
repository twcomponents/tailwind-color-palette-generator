<template>
  <!-- Generator UI -->
  <section class="flex flex-col w-full py-10">
    <div class="mt-8 mb-6 md:mt-16 md:mb-6">
      <div class="md:my-14 md:mb-8">
        <div class="md:mb-12 text-center">
          <!-- Title -->
          <div class="text-5xl font-bold text-color w-full">
            <LetterPullUp
              words="Tailwind CSS"
              :delay="30"
              class="text-black dark:text-white"
            />
            <LetterPullUp
              words="Color Palette Generator"
              :delay="30"
              class="text-black dark:text-white"
            />
          </div>

          <!-- Subtitle -->
          <p class="mt-6 text-xl font-thin text-zinc-500">
            Press
            <button
              v-motion
              :initial="{ color: '#6b7280', borderColor: '#6b7280' }"
              :enter="{
                color: '#e4e4e7',
                borderColor: '#e4e4e7',
                opacity: 1,
              }"
              :delay="500"
              :duration="500"
              class="inline-block border border-gray-500 px-1 text-base font-semibold rounded-[5px] h-[25px] hover:bg-twc-theme-400 hover:text-white transition duration-200 ease-in-out align-baseline"
              :class="{
                'bg-twc-theme-600 dark:text-zinc-200 dark:border-zinc-200':
                  spacebarPress,
              }"
              @click="generateRandomColors()"
            >
              spacebar
            </button>
            , enter a hexcode or change the RGB values to generate a color
            palette.
          </p>
        </div>

        <!-- Color Pickers -->
        <div class="flex flex-col max-w-lg gap-5 mx-auto">
          <!-- Primary Color Picker -->
          <ColorPicker
            ref="colorPickerRef"
            :pureColor="primary"
            :pickerIndex="0"
            @change="onColorChange($event)"
          />

          <!-- Secondary Color Picker -->
          <template v-if="secondaryColorPalette !== null">
            <ColorPicker
              ref="secondaryColorPickerRef"
              :pureColor="secondary"
              :pickerIndex="1"
              @change="onSecondaryColorChange($event)"
              @close="resetSecondaryColorPalette()"
            />
          </template>
        </div>

        <!-- Reveal Secondary Color -->
        <div class="justify-center hidden mt-2 md:flex">
          <button
            class="flex items-center gap-1 p-4 cursor-pointer text-color-muted-extra"
            @click="addSecondaryColor()"
            v-if="secondaryColorPalette === null"
          >
            <Plus class="size-5" />
            Add secondary color
          </button>
        </div>
      </div>
    </div>

    <!-- Color Palettes -->
    <div class="flex flex-col gap-5">
      <!-- Primary Color Palette -->
      <ColorPalette
        :colorPalette="colorPalette"
        :colorName="colorName"
        :themeVariableKey="ColorVariableTheme.TWC_THEME"
      />

      <!-- Secondary Color Palette -->
      <ColorPalette
        :colorPalette="secondaryColorPalette"
        :colorName="secondaryColorName"
        :themeVariableKey="ColorVariableTheme.TWC_THEME2"
        v-if="secondaryColorPalette !== null"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  // native
  import { ref, watch, onMounted, onUnmounted } from 'vue';
  import { RouteParamsGeneric, useRoute, useRouter } from 'vue-router';

  // feature components
  import ColorPicker from '@/components/features/ColorBar.vue';
  import ColorPalette from '@/components/features/ColorPalette.vue';
  import LetterPullUp from '@/components/inspira-ui/LetterPullUp.vue';

  // shared
  import {
    IPaletteColor,
    ColorVariableTheme,
    IColorChangeEvent,
  } from '@/shared/models/color.model';

  // third-party
  import tailwindcssPaletteGenerator from '@bobthered/tailwindcss-palette-generator';
  import { Plus } from 'lucide-vue-next';
  import nearestColor from 'nearest-color';
  import { colornames } from 'color-name-list';

  // defs
  const route = useRoute();
  const router = useRouter();

  // router hex colors
  const primary = ref<string>(route.params.primary as string);
  const secondary = ref<string>(route.params.secondary as string);

  // #region Route Color Changes

  watch(
    (): RouteParamsGeneric => route.params,
    (newParams): void => {
      primary.value = newParams.primary as string;
      secondary.value = newParams.secondary as string;

      handleRouteColorChanges();
    }
  );

  const handleRouteColorChanges = (): void => {
    if (primary.value) {
      colorPickerRef.value?.setPureColor(primary.value);
    }

    if (secondary.value) {
      if (secondaryColorPalette.value === null) {
        secondaryColorPalette.value = [];
      }

      secondaryColorPickerRef.value?.setPureColor(secondary.value);
    }

    if (!primary.value && !secondary.value) {
      resetSecondaryColorPalette();

      colorPickerRef.value?.generateRandomColor();
    }
  };

  // #endregion

  // #region Primary Color Palette

  const colorPalette = ref<any[]>([]);
  const colorName = ref<string>('');
  const colorPickerRef = ref<InstanceType<typeof ColorPicker> | null>(null);

  const onColorChange = (event: IColorChangeEvent) => {
    const root = document.documentElement;

    const newPalette = Object.entries(
      tailwindcssPaletteGenerator({
        colors: [event.color],
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

    const colors = colornames.reduce(
      (o: any, { name, hex }: any) => Object.assign(o, { [name]: hex }),
      {}
    );

    const nearest = nearestColor.from(colors);

    colorName.value = nearest(event.color) ?? 'Awesome Primary Color';

    router.push({
      name: 'home-static',
      params: {
        primary: event.color.replace('#', ''),
        secondary: secondary.value,
      },
    });
  };

  // #endregion

  // #region Secondary Color Palette

  const secondaryColorPalette = ref<IPaletteColor[] | null>(null);
  const secondaryColorName = ref<string>('');
  const secondaryColorPickerRef = ref<InstanceType<typeof ColorPicker> | null>(
    null
  );

  const onSecondaryColorChange = (event: IColorChangeEvent) => {
    const root = document.documentElement;

    const newPalette = Object.entries(
      tailwindcssPaletteGenerator({
        colors: [event.color],
        names: ['theme'],
      }).theme
    );

    secondaryColorPalette.value = newPalette?.map((item: string[]) => {
      const variableName = `--twc-theme2-${item[0]}`,
        color = item[1];

      root.style.setProperty(variableName, color);

      return {
        label: variableName,
        level: Number(item[0]),
        color: color,
      };
    });

    const colors = colornames.reduce(
      (o: any, { name, hex }: any) => Object.assign(o, { [name]: hex }),
      {}
    );

    const nearest = nearestColor.from(colors);

    secondaryColorName.value =
      nearest(event.color) ?? 'Awesome Secondary Color';

    const routeParams: any = { secondary: event.color.replace('#', '') };

    if (primary.value) {
      routeParams.primary = primary.value;
    }

    router.push({
      name: 'home-static',
      params: routeParams,
    });
  };

  const addSecondaryColor = () => {
    secondaryColorPalette.value = [];
    secondaryColorPickerRef.value?.generateRandomColor();
  };

  const resetSecondaryColorPalette = () => {
    const root = document.documentElement;

    // update CSS variables
    secondaryColorPalette.value?.forEach((paletteColor: IPaletteColor) => {
      const variableName = `--twc-theme2-${paletteColor.level}`;

      const isDarkTheme = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;

      root.style.setProperty(variableName, isDarkTheme ? '#ffffff' : '#000000');
    });

    // reset secondary color palette
    secondaryColorPalette.value = null;

    // reset secondary color path
    if (primary.value) {
      router.push({
        name: 'home-static',
        params: {
          primary: primary.value,
        },
      });
    }
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
      event.preventDefault();
      event.stopPropagation();

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

    handleRouteColorChanges();
  });

  onUnmounted(() => {
    window.removeEventListener('keydown', handleSpacePress);
  });
</script>

<style scoped lang="scss"></style>
