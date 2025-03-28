<template>
  <!-- Demos -->
  <section
    class="relative flex flex-col w-full py-10"
    @mousemove="onDemoAreaMouseMove($event)"
    @mouseleave="onDemoAreaMouseLeave()"
  >
    <Badges />
    <Buttons />
    <Authentication />
    <Spinners />
  </section>

  <!-- Demo Hover Hint -->
  <ColorHint
    :position="colorHintPosition"
    :isVisible="isColorHintVisible"
    :hints="colorHints"
  />
</template>

<script setup lang="ts">
  // native
  import { ref } from 'vue';

  // feature components
  import ColorHint from '@/components/features/ColorHint.vue';

  // demo components
  import Badges from '@/components/demo/single-color/Badges.vue';
  import Buttons from '@/components/demo/single-color/Buttons.vue';
  import Spinners from '@/components/demo/single-color/Spinners.vue';
  import Authentication from '@/components/demo/single-color/Authentication.vue';

  // shared
  import { IPaletteColor } from '@/shared/models/color.model';
  import { IPosition } from '@/shared/models/position.model';

  // #region Demo Hints

  const colorHintPosition = ref<IPosition>({ x: 0, y: 0 });
  const isColorHintVisible = ref<boolean>(false);
  const colorHints = ref<IPaletteColor[]>([]);

  const onDemoAreaMouseMove = (event: MouseEvent) => {
    const x = event.pageX - 20,
      y = event.pageY + 20;

    const elementClasses = Array.from((event.target as HTMLElement).classList),
      twcColorClasses = elementClasses.filter((className: string) =>
        className.includes('-twc-theme-')
      );

    if (twcColorClasses.length === 0) {
      isColorHintVisible.value = false;

      return;
    }

    const regex = /(([a-z]+:)?[a-z]+)-twc-theme-(\d+)/;

    colorHints.value = (
      twcColorClasses
        .map((className: string) => {
          const match = className.match(regex);

          if (match) {
            return <IPaletteColor>{
              label: match[1],
              level: Number(match[match.length - 1]),
              color: `--twc-theme-${match[match.length - 1]}`,
            };
          }
        })
        .filter(Boolean) as IPaletteColor[]
    ).sort((x: IPaletteColor, y: IPaletteColor) =>
      x.label > y.label ? 1 : -1
    );

    isColorHintVisible.value = true;
    colorHintPosition.value = { x, y };
  };

  const onDemoAreaMouseLeave = () => {
    isColorHintVisible.value = false;
    colorHintPosition.value = { x: 0, y: 0 };
  };

  // #endregion
</script>

<style scoped lang="scss"></style>
