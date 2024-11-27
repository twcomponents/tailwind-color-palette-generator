<template>
  <button
    :class="[
      `bg-${props.themeVariableKey}-${paletteColor.level}`,
      paletteColor.level >= 50 && paletteColor.level <= 300 && 'text-zinc-700',
      paletteColor.level >= 400 && paletteColor.level <= 950 && 'text-zinc-50',
    ]"
  >
    <span>
      {{ paletteColor.level }}
    </span>

    <span>
      {{ paletteColor.color }}
    </span>
  </button>
</template>

<script setup lang="ts">
  // models
  import {
    IPaletteColor,
    ColorVariableTheme,
  } from '@/shared/models/color.model';

  const props = defineProps<{
    paletteColor: IPaletteColor;
    themeVariableKey: ColorVariableTheme;
  }>();
</script>
