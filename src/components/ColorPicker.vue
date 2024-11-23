<template>
  <div
    class="flex flex-row items-center justify-between gap-3 border border-zinc-700 px-4 py-2.5 rounded-[30px]"
  >
    <!-- Left -->
    <div class="flex flex-row items-center">
      <!-- Color Picker -->
      <color-picker
        shape="circle"
        v-model:pureColor="pureColor"
        pickerType="chrome"
        class="size-20"
        format="hex"
        @pureColorChange="onPureColorChange()"
      />
    </div>

    <!-- Color Input -->
    <input
      type="text"
      v-model="pureColor"
      @change="emitters('change', pureColor)"
      class="border-none daark:bg-zinc-950 font-thin outline-none text-center"
    />

    <!-- Right -->
    <div class="flex flex-row items-center">
      <button
        class="border border-zinc-700 p-2.5 rounded-full dark:bg-zinc-900 dark:hover:bg-zinc-800 hover:scale-110 transition duration-300 ease-in-out"
        @click="generateRandomColor()"
      >
        <Shuffle :size="14" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, defineEmits, defineExpose } from 'vue';
  import { Shuffle } from 'lucide-vue-next';

  const emitters = defineEmits(['change']);

  const pureColor = ref<string | null>(null);

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

  onMounted(() => {
    generateRandomColor();
  });

  defineExpose({
    generateRandomColor,
  });
</script>
