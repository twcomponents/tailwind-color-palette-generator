<template>
  <div class="palette-wrapper">
    <!-- Title -->
    <h1>
      {{ props.colorName.name }}
    </h1>

    <!-- Color Palette -->
    <div class="color-palette" v-if="props.colorPalette.length > 0">
      <template v-for="paletteColor in props.colorPalette">
        <ColorButton
          :paletteColor="paletteColor"
          :themeVariableKey="ColorVariableTheme.TWC_THEME2"
        />
      </template>
    </div>
  </div>

  <!-- Keep these colors in bundled CSS -->
  <div class="hidden">
    <div class="bg-twc-theme2-50"></div>
    <div class="bg-twc-theme2-100"></div>
    <div class="bg-twc-theme2-200"></div>
    <div class="bg-twc-theme2-300"></div>
    <div class="bg-twc-theme2-400"></div>
    <div class="bg-twc-theme2-500"></div>
    <div class="bg-twc-theme2-600"></div>
    <div class="bg-twc-theme2-700"></div>
    <div class="bg-twc-theme2-800"></div>
    <div class="bg-twc-theme2-900"></div>
    <div class="bg-twc-theme2-950"></div>
  </div>
</template>

<script setup lang="ts">
  // features
  import ColorButton from '@/components/features/ColorButton.vue';

  // models
  import {
    IPaletteColor,
    ColorVariableTheme,
  } from '@/shared/models/color.model';

  const props = defineProps<{
    colorPalette: IPaletteColor[];
    colorName: any;
  }>();
</script>
