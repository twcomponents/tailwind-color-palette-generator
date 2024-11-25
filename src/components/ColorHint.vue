<template>
  <div
    v-if="props.isVisible"
    :style="{ top: `${props.position.y}px`, left: `${props.position.x}px` }"
    class="absolute flex flex-col gap-1 z-50 bg-white p-3 shadow-lg rounded-lg text-gray-500"
  >
    <template v-for="color in props.hints" :key="color.level">
      <div class="flex flex-row gap-2 items-center">
        <div
          :style="{ backgroundColor: `var(${color.color})` }"
          class="rounded-md border w-5 h-5"
        >
          <!-- Placeholder -->
        </div>

        <span>{{ color.level }}・{{ color.label }}</span>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  import { IColorHint } from '@/shared/models/color';

  const props = defineProps<{
    hints: IColorHint[];
    position: { x: number; y: number };
    isVisible: boolean;
  }>();
</script>
