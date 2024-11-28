<template>
  <!-- Palette -->
  <div class="flex flex-col gap-3 container w-7/12">
    <!-- Header -->
    <div class="flex flex-row gap-2 items-center justify-between px-2">
      <!-- Title -->
      <h1
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible-once="{
          y: 0,
          opacity: 1,
        }"
        class="text-lg font-light text-center"
      >
        {{ props.colorName.name }}
      </h1>

      <!-- Right -->
      <div class="flex flex-row gap-2 items-center">
        <AlertDialog>
          <AlertDialogTrigger as-child>
            <button
              class="dark:text-zinc-400 dark:hover:text-zinc-300 transition-all duration-200 ease-in-out"
              @click="onExportClick()"
            >
              Export
            </button>
          </AlertDialogTrigger>

          <AlertDialogContent class="bg-zinc-950 border dark:border-zinc-800">
            <AlertDialogHeader
              class="flex flex-row justify-between items-center border-b border-zinc-900 pb-2"
            >
              <!-- Title -->
              <AlertDialogTitle class="text-lg font-thin">
                Export your color palette: "{{ props.colorName.name }}"
              </AlertDialogTitle>

              <!-- Close -->
              <AlertDialogCancel
                class="border-none border-zinc-800 p-2 transition-all duration-200 hover:scale-125"
              >
                <X />
              </AlertDialogCancel>
            </AlertDialogHeader>

            <AlertDialogDescription>
              <!-- Body -->
              <div class="flex flex-row gap-2 divide-x divide-zinc-700">
                <!-- Left -->
                <div class="flex flex-col items-center">
                  <ul class="flex flex-col gap-2">
                    <li
                      v-for="option in exportOptions"
                      :key="option.value"
                      class="group flex flex-row gap-2 items-center px-3 py-2 select-none hover:bg-zinc-900 cursor-pointer rounded-md"
                      @click="onExportOptionClick(option)"
                    >
                      <div
                        class="size-3 rounded-full border dark:border-zinc-600 dark:group-hover:border-zinc-500"
                        :class="[
                          option.value === selectedExportOption.value &&
                            `bg-${themeVariableKey}-500`,
                        ]"
                      >
                        <!-- Placeholder -->
                      </div>

                      <button>
                        {{ option.label }}
                      </button>
                    </li>
                  </ul>
                </div>

                <!-- Right -->
                <div class="flex flex-col items-center pl-2">
                  <div id="export-editor" class="w-[420px] h-96"></div>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>

    <!-- Color Palette -->
    <div
      class="flex flex-row flex-wrap gap-3 justify-center text-xs"
      v-if="props.colorPalette.length > 0"
    >
      <template v-for="paletteColor in props.colorPalette">
        <ColorButton
          :paletteColor="paletteColor"
          :themeVariableKey="props.themeVariableKey"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  // features
  import ColorButton from '@/components/features/ColorButton.vue';

  // models
  import {
    ColorVariableTheme,
    IPaletteColor,
  } from '@/shared/models/color.model';

  // shadcn
  import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from '@/components/ui/alert-dialog';
  import { onMounted, ref } from 'vue';

  import { X } from 'lucide-vue-next';
  import ExportUtil from '@/shared/utils/export.util';

  // third party
  import { shikiToMonaco } from '@shikijs/monaco';
  import * as monaco from 'monaco-editor-core';
  import { createHighlighter } from 'shiki';

  interface IExportOption {
    label: string;
    value: string;
    language?: string;
  }

  const props = defineProps<{
    colorPalette: IPaletteColor[];
    colorName: any;
    themeVariableKey: ColorVariableTheme;
  }>();

  const exportOptions: IExportOption[] = [
    {
      label: 'Tailwind (HEX)',
      value: 'tailwind_hex',
      language: 'javascript',
    },
    {
      label: 'Tailwind (CSS Var.)',
      value: 'tailwind_css_var',
      language: 'html',
    },
    {
      label: 'CSS Variables',
      value: 'css_var',
      language: 'css',
    },
    {
      label: 'SCSS Variables',
      value: 'scss_var',
      language: 'scss',
    },
    {
      label: 'JSON (HEX)',
      value: 'json_hex',
      language: 'json',
    },
  ];

  const selectedExportOption = ref<IExportOption>(exportOptions[0]);
  const exportOutput = ref<string>('');

  let editor: any = null;

  const onExportClick = async () => {
    await setupMonacoEditor();

    onExportOptionClick(selectedExportOption.value);
  };

  const setupMonacoEditor = async () => {
    if (!editor) {
      const highlighter = await createHighlighter({
        themes: ['ayu-dark'],
        langs: ['html', 'javascript', 'json', 'scss', 'css'],
      });

      monaco.languages.register({ id: 'vue' });
      monaco.languages.register({ id: 'typescript' });
      monaco.languages.register({ id: 'javascript' });

      shikiToMonaco(highlighter, monaco);

      editor = monaco.editor.create(document.getElementById('export-editor'), {
        value: exportOutput.value,
        language: selectedExportOption.value.language,
        theme: 'ayu-dark',
        minimap: {
          enabled: false,
        },
        stickyScroll: {
          enabled: false,
        },
      });
    }
  };

  const onExportOptionClick = async (option: IExportOption) => {
    selectedExportOption.value = option;

    if (option.value === 'tailwind_hex') {
      exportOutput.value = ExportUtil.exportAsTailwindHex(
        props.colorPalette,
        props.colorName.name
      );
    } else if (option.value === 'tailwind_css_var') {
      exportOutput.value = ExportUtil.exportAsTailwindCssVariables(
        props.colorPalette,
        props.colorName.name
      );
    } else if (option.value === 'css_var') {
      exportOutput.value = ExportUtil.exportAsCss(
        props.colorPalette,
        props.colorName.name
      );
    } else if (option.value === 'scss_var') {
      exportOutput.value = ExportUtil.exportAsScss(
        props.colorPalette,
        props.colorName.name
      );
    } else if (option.value === 'json_hex') {
      exportOutput.value = ExportUtil.exportAsJson(
        props.colorPalette,
        props.colorName.name
      );
    }

    // update editor value
    editor?.getModel()?.setValue(exportOutput.value);

    // change language
    editor?.getModel()?.updateOptions({
      language: option.language,
    });
  };

  onMounted(async () => {});
</script>
