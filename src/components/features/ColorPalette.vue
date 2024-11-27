<template>
  <div class="flex flex-col gap-5">
    <!-- Header -->
    <div class="flex flex-row gap-2 container items-center justify-between">
      <!-- Title -->
      <h1
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible-once="{
          y: 0,
          opacity: 1,
        }"
        class="text-2xl font-bold text-center"
      >
        {{ props.colorName.name }}
      </h1>
    </div>

    <!-- Color Palette -->
    <div
      class="flex flex-row flex-wrap gap-3 justify-center text-xs"
      v-if="props.colorPalette.length > 0"
    >
      <template v-for="paletteColor in props.colorPalette">
        <ColorButton
          :paletteColor="paletteColor"
          :themeVariableKey="props.themeVariableKey"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  // features
  import ColorButton from '@/components/features/ColorButton.vue';

  // models
  import { IPaletteColor } from '@/shared/models/color.model';

  const props = defineProps<{
    colorPalette: IPaletteColor[];
    colorName: any;
    themeVariableKey: ColorVariableTheme;
  }>();
</script>
