<template>
  <div class="relative flex flex-row items-center justify-center">
    <!-- Color Picker -->
    <div
      class="flex flex-row w-11/12 items-center justify-between gap-3 border border-zinc-300 dark:border-zinc-700 px-4 py-2.5 rounded-[30px]"
    >
      <!-- Left -->
      <div
        class="flex flex-row items-center hover:scale-125 transition duration-300 ease-in-out"
      >
        <!-- Color Picker -->
        <color-picker
          shape="circle"
          v-model:pureColor="pureColor"
          pickerType="chrome"
          format="hex"
          @pureColorChange="onPureColorChange()"
        />
      </div>

      <!-- Color Input -->
      <input
        type="text"
        v-model="pureColor"
        @change="emitters('change', pureColor)"
        class="border-none dark:bg-zinc-950 font-thin outline-none text-center"
      />

      <!-- Right -->
      <div class="flex flex-row items-center">
        <button
          class="border border-zinc-300 dark:border-zinc-700 p-2.5 rounded-full dark:bg-zinc-900 dark:hover:bg-zinc-800 hover:scale-110 transition duration-300 ease-in-out"
          @click="generateRandomColor()"
          data-tippy-content="Generate random color"
        >
          <Shuffle :size="14" />
        </button>
      </div>
    </div>

    <!-- Close -->
    <button
      class="absolute top-4 -right-5 w-1/12 px-3 hover:scale-110"
      @click="onCloseClick()"
      v-if="pickerIndex > 0"
    >
      <CircleX class="dark:text-zinc-500 dark:hover:text-zinc-300" />
    </button>
  </div>
</template>

<script setup lang="ts">
  // native
  import { ref, onMounted, defineEmits, defineExpose } from 'vue';

  // third party
  import { Shuffle, CircleX } from 'lucide-vue-next';
  import tippy from 'tippy.js';

  // shared
  import ColorUtil from '@/shared/utils/color.util';

  const props = defineProps<{
    pureColor: string;
    pickerIndex: number;
  }>();

  const emitters = defineEmits(['change', 'close']);

  const pureColor = ref<string>('#ffffff');

  const generateRandomColor = () => {
    const color = ColorUtil.getRandomColor();

    pureColor.value = color;

    emitters('change', pureColor.value);
  };

  const onPureColorChange = () => {
    emitters('change', pureColor.value);
  };

  const setPureColor = (color: string) => {
    pureColor.value = color;
  };

  const onCloseClick = () => {
    emitters('close');
  };

  onMounted(() => {
    if (props.pureColor) {
      pureColor.value = `#${props.pureColor}`;

      emitters('change', pureColor.value);
    } else {
      generateRandomColor();
    }

    tippy('[data-tippy-content]');
  });

  defineExpose({
    generateRandomColor,
    setPureColor,
  });
</script>
