<template>
  <div
    v-if="props.isVisible"
    :style="{ top: `${props.position.y}px`, left: `${props.position.x}px` }"
    class="absolute flex flex-col gap-1 z-50 bg-white p-3 shadow-lg rounded-lg text-gray-500 border min-w-40 dark:bg-zinc-900 dark:border-zinc-700"
  >
    <!-- Color Hints -->
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

    <!-- Shortcut -->
    <div
      class="flex flex-row mt-2 items-center justify-between border-t dark:border-zinc-700 pt-2"
    >
      <span class="text-sm">Copy</span>
      <kbd
        class="bg-gray-200 dark:bg-zinc-700 dark:text-zinc-400 px-1.5 rounded-md"
      >
        {{ copied ? 'Copied 🤘' : shortcut }}
      </kbd>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { IColorHint } from '@/shared/models/color.model';
  import { onBeforeUnmount, onMounted, ref } from 'vue';

  const props = defineProps<{
    hints: IColorHint[];
    position: { x: number; y: number };
    isVisible: boolean;
  }>();

  const getShortcut = () => {
    const platform = navigator.platform.toLowerCase();
    let shortcut;

    if (platform.includes('mac')) {
      shortcut = '⌘ + C';
    } else if (platform.includes('win')) {
      shortcut = 'Ctrl + C';
    } else {
      shortcut = 'Ctrl + C';
    }

    return shortcut;
  };

  const shortcut = getShortcut();

  const copied = ref(false);

  const handleCopy = (event: KeyboardEvent) => {
    if ((event.metaKey || event.ctrlKey) && event.key === 'c') {
      copied.value = true;

      navigator.clipboard.writeText(
        props.hints
          .map(
            (hint) =>
              `${hint.level}: ${hint.label}-${hint.color.replace('--twc-theme', 'mytheme')};`
          )
          .join('\n')
      );

      setTimeout(() => {
        copied.value = false;
      }, 600);
    }
  };

  onMounted(() => {
    window.addEventListener('keydown', handleCopy);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleCopy);
  });
</script>
