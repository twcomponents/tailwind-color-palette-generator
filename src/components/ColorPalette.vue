<template>
  <div class="palette-wrapper">
    <!-- Title -->
    <h1
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :visible-once="{
        y: 0,
        opacity: 1,
      }"
    >
      {{ props.colorName.name }}
    </h1>

    <!-- Color Palette -->
    <div class="color-palette" v-if="props.colorPalette.length > 0">
      <button class="bg-twc-theme-50 text-zinc-700">
        <span>50</span>
        <span>
          {{ props.colorPalette[0].color }}
        </span>
      </button>
      <button class="bg-twc-theme-100 text-zinc-700">
        <span>100</span>
        <span>
          {{ props.colorPalette[1].color }}
        </span>
      </button>
      <button class="bg-twc-theme-200 text-zinc-700">
        <span>200</span>
        <span>
          {{ props.colorPalette[2].color }}
        </span>
      </button>
      <button class="bg-twc-theme-300 text-zinc-700">
        <span>300</span>
        <span>
          {{ props.colorPalette[3].color }}
        </span>
      </button>
      <button class="bg-twc-theme-400 text-zinc-700">
        <span>400</span>
        <span>
          {{ props.colorPalette[4].color }}
        </span>
      </button>
      <button class="bg-twc-theme-500 text-zinc-50">
        <span>500</span>
        <span>
          {{ props.colorPalette[5].color }}
        </span>
      </button>
      <button class="bg-twc-theme-600 text-zinc-50">
        <span>600</span>
        <span>
          {{ props.colorPalette[6].color }}
        </span>
      </button>
      <button class="bg-twc-theme-700 text-zinc-50">
        <span>700</span>
        <span>
          {{ props.colorPalette[7].color }}
        </span>
      </button>
      <button class="bg-twc-theme-800 text-zinc-50">
        <span>800</span>
        <span>{{ props.colorPalette[8].color }}</span>
      </button>
      <button class="bg-twc-theme-900 text-zinc-50">
        <span>900</span>
        <span>{{ props.colorPalette[9].color }}</span>
      </button>
      <button class="bg-twc-theme-950 text-zinc-50">
        <span>950</span>
        <span>
          {{ props.colorPalette[10].color }}
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    colorPalette: any[];
    colorName: any;
  }>();
</script>
