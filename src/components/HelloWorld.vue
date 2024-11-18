<template>
  <h1>{{ message }}</h1>

  <div class="card">
    <button
      class="border border-emerald-500 px-4 py-2 rounded-lg"
      type="button"
      @click="count++"
    >
      count is {{ count }}
    </button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  defineProps({
    message: {
      type: String,
      required: true,
    },
  });

  const count = ref(0);
</script>

<style scoped lang="scss">
  h1 {
    @apply text-emerald-500 text-2xl px-4 py-2;
  }

  .card {
    @apply flex flex-col justify-center items-center gap-4 my-10;
  }
</style>
