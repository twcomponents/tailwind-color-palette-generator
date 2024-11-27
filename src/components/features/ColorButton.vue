<template>
  <div class="flex flex-col gap-2 items-center">
    <!-- Color Button -->
    <button
      :class="[
        `bg-${props.themeVariableKey}-${paletteColor.level}`,
        paletteColor.level >= 50 &&
          paletteColor.level <= 300 &&
          'text-zinc-700',
        paletteColor.level >= 400 &&
          paletteColor.level <= 950 &&
          'text-zinc-50',
      ]"
      @mouseenter="isCopyHintVisible = true"
      @mouseleave="isCopyHintVisible = false"
      @click="onCopyClick()"
    >
      <span>
        {{ paletteColor.level }}
      </span>

      <span>
        {{ paletteColor.color }}
      </span>
    </button>

    <!-- Copy Hint -->
    <span
      class="text-xs select-none"
      :class="{ 'opacity-0': !isCopyHintVisible }"
    >
      {{ copyHintText }}
    </span>
  </div>
</template>

<script setup lang="ts">
  // native
  import { ref } from 'vue';

  // models
  import {
    IPaletteColor,
    ColorVariableTheme,
  } from '@/shared/models/color.model';

  const props = defineProps<{
    paletteColor: IPaletteColor;
    themeVariableKey: ColorVariableTheme;
  }>();

  const isCopyHintVisible = ref(false);
  const copyHintText = ref('Copy');

  const onCopyClick = () => {
    navigator.clipboard.writeText(props.paletteColor.color);
    isCopyHintVisible.value = true;
    copyHintText.value = 'Copied 🤘';

    setTimeout(() => {
      copyHintText.value = 'Copy';
      isCopyHintVisible.value = false;
    }, 500);
  };
</script>
