<script setup lang="ts">
  import { cn } from '@/lib/utils';

  interface LetterPullupProps {
    class?: string;
    words: string;
    delay?: number;
  }

  const props = defineProps<LetterPullupProps>();

  const letters = props.words.split('');

  const pullupVariant = {
    initial: { y: 80, opacity: 0 },
    enter: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * (props.delay ? props.delay : 0.05),
      },
    }),
  };
</script>

<template>
  <div class="flex justify-center">
    <div v-for="(letter, index) in letters" :key="letter">
      <h1
        v-motion
        :initial="pullupVariant.initial"
        :enter="pullupVariant.enter(index)"
        :class="cn('', props.class)"
      >
        <span v-if="letter === ' '">&nbsp;</span>
        <span v-else>{{ letter }}</span>
      </h1>
    </div>
  </div>
</template>
