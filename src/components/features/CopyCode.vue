<template>
  <button
    class="text-zinc-900 dark:text-zinc-400 m-0.5 hover:bg-zinc-100 dark:bg-zinc-900 dark:border-zinc-600 dark:hover:bg-zinc-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-zinc-200 border"
    @click="onCopy()"
  >
    <span
      id="default-message"
      :class="clsx('items-center', isCopied ? 'hidden' : 'inline-flex')"
    >
      <ClipboardList class="w-3 h-3" />
    </span>
    <span
      id="success-message"
      :class="clsx('items-center', isCopied ? 'inline-flex' : 'hidden')"
    >
      <Check
        class="w-3 h-3 text-twc-theme-700 dark:text-twc-theme-500 me-1.5"
      />
      <span
        class="text-xs font-semibold text-twc-theme-700 dark:text-twc-theme-500"
      >
        Copied
      </span>
    </span>
  </button>
</template>

<script setup lang="ts">
  import clsx from 'clsx';
  import { Check, ClipboardList } from 'lucide-vue-next';
  import { ref } from 'vue';
  const props = defineProps<{
    code: string;
  }>();

  const isCopied = ref<boolean>(false);

  const onCopy = () => {
    navigator.clipboard.writeText(props.code);
    isCopied.value = true;
    setTimeout(() => {
      isCopied.value = false;
    }, 2000);
  };
</script>
