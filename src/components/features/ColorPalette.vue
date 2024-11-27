<template>
  <div class="palette-wrapper">
    <!-- Title -->
    <h1
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :visible-once="{
        y: 0,
        opacity: 1,
      }"
    >
      {{ props.colorName.name }}
    </h1>

    <!-- Color Palette -->
    <div class="color-palette" v-if="props.colorPalette.length > 0">
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
