<template>
  <div
    class="flex flex-row items-center justify-between gap-3 border border-zinc-300 dark:border-zinc-700 px-4 py-2.5 rounded-[30px]"
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
</template>

<script setup lang="ts">
  // native
  import { ref, onMounted, defineEmits, defineExpose } from 'vue';

  // third party
  import { Shuffle } from 'lucide-vue-next';
  import tippy from 'tippy.js';

  const props = defineProps<{
    pureColor: string;
  }>();

  const emitters = defineEmits(['change']);

  const pureColor = ref<string>('#ffffff');

  const generateRandomColor = () => {
    let color;

    do {
      color = `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
    } while (color === '#ffffff');

    pureColor.value = color;

    emitters('change', pureColor.value);
  };

  const onPureColorChange = () => {
    emitters('change', pureColor.value);
  };

  const setPureColor = (color: string) => {
    pureColor.value = color;
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
