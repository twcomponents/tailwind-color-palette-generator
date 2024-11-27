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
          :themeVariableKey="ColorVariableTheme.TWC_THEME"
        />
      </template>
    </div>
  </div>

  <!-- Keep these colors in bundled CSS -->
  <div class="hidden">
    <div class="bg-twc-theme-50"></div>
    <div class="bg-twc-theme-100"></div>
    <div class="bg-twc-theme-200"></div>
    <div class="bg-twc-theme-300"></div>
    <div class="bg-twc-theme-400"></div>
    <div class="bg-twc-theme-500"></div>
    <div class="bg-twc-theme-600"></div>
    <div class="bg-twc-theme-700"></div>
    <div class="bg-twc-theme-800"></div>
    <div class="bg-twc-theme-900"></div>
    <div class="bg-twc-theme-950"></div>
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
