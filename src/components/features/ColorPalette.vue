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
        class="flex flex-row gap-1 justify-center items-center text-lg font-normal text-center"
      >
        <Eclipse :size="15" />

        {{ colorName }}
      </h1>

      <!-- Right -->
      <div class="flex flex-row gap-2 items-center">
        <AlertDialog>
          <AlertDialogTrigger as-child>
            <button
              class="flex flex-row gap-1 justify-center items-center dark:text-zinc-400 dark:hover:text-zinc-300 transition-all duration-200 ease-in-out"
              @click="onExportClick()"
            >
              <ChevronsUpDown :size="16" />
              Export
            </button>
          </AlertDialogTrigger>

          <AlertDialogContent
            class="bg-white dark:bg-zinc-950 border-gray-300 dark:border-zinc-800"
          >
            <AlertDialogHeader
              class="flex flex-row justify-between items-center border-b border-gray-200 dark:border-zinc-900 pb-2"
            >
              <!-- Title -->
              <AlertDialogTitle
                class="flex flex-row gap-2 items-center text-lg font-normal"
              >
                <span>Export your color palette as:</span>

                <input
                  type="search"
                  v-model="colorName"
                  placeholder="Enter palette name"
                  class="dark:bg-zinc-950 font-thin outline-none border-b border-gray-200 dark:border-zinc-600 focus:border-gray-400 dark:focus:border-zinc-500 text-base px-2.5 py-2 w-[300px]"
                />
              </AlertDialogTitle>

              <!-- Close -->
              <AlertDialogCancel
                class="border-gray-200 dark:border-zinc-800 p-2 transition-all duration-200 hover:scale-125"
                @click="onModalClose()"
              >
                <X />
              </AlertDialogCancel>
            </AlertDialogHeader>

            <AlertDialogDescription>
              <!-- Body -->
              <div class="flex flex-row gap-2">
                <!-- Left -->
                <div class="flex flex-col items-center">
                  <ul class="flex flex-col gap-2">
                    <li
                      v-for="option in exportOptions"
                      :key="option.value"
                      class="group flex flex-row gap-2 items-center px-3 py-2 select-none hover:bg-gray-200 dark:hover:bg-zinc-900 cursor-pointer rounded-md"
                      @click="onExportOptionClick(option)"
                    >
                      <div
                        class="size-3 rounded-full border border-gray-300 group-hover:border-gray-400 dark:border-zinc-600 dark:group-hover:border-zinc-500"
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
                <div class="relative flex flex-col items-center pl-4">
                  <div id="export-editor" class="w-[500px] h-96"></div>

                  <button
                    @click="onPaletteOutputCopyClick()"
                    class="absolute right-4 -bottom-2 flex flex-row items-center justify-center size-10 bg-white dark:bg-zinc-950 border border-gray-300 hover:border-gray-500 dark:border-zinc-700 p-2 rounded-md text-zinc-400 hover:text-zinc-500 dark:hover:border-zinc-500 dark:text-zinc-500 dark:hover:text-zinc-400 transition-all duration-200 ease-in-out"
                  >
                    <Copy :size="20" v-if="!isOutputCopied" />

                    <span v-else>👍</span>
                  </button>
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
  import { onMounted, onUnmounted, ref, watch } from 'vue';

  import { X, Copy, ChevronsUpDown, Eclipse } from 'lucide-vue-next';
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

  const colorName = ref<string>(props.colorName.name);
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
  const editorTheme = ref<'ayu-dark' | 'ayu-light'>('ayu-dark');
  const selectedExportOption = ref<IExportOption>(exportOptions[0]);
  const exportOutput = ref<string>('');
  const isOutputCopied = ref<boolean>(false);

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

      editor = monaco.editor.create(
        document.getElementById('export-editor') as HTMLElement,
        {
          value: exportOutput.value,
          language: selectedExportOption.value.language,
          theme: editorTheme.value,
          minimap: {
            enabled: false,
          },
          stickyScroll: {
            enabled: false,
          },
        }
      );
    }
  };

  const onExportOptionClick = async (option: IExportOption) => {
    selectedExportOption.value = option;

    if (option.value === 'tailwind_hex') {
      exportOutput.value = ExportUtil.exportAsTailwindHex(
        props.colorPalette,
        colorName.value
      );
    } else if (option.value === 'tailwind_css_var') {
      exportOutput.value = ExportUtil.exportAsTailwindCssVariables(
        props.colorPalette,
        colorName.value
      );
    } else if (option.value === 'css_var') {
      exportOutput.value = ExportUtil.exportAsCss(
        props.colorPalette,
        colorName.value
      );
    } else if (option.value === 'scss_var') {
      exportOutput.value = ExportUtil.exportAsScss(
        props.colorPalette,
        colorName.value
      );
    } else if (option.value === 'json_hex') {
      exportOutput.value = ExportUtil.exportAsJson(
        props.colorPalette,
        colorName.value
      );
    }

    // update editor value
    editor?.getModel()?.setValue(exportOutput.value);

    // change language
    editor?.getModel()?.updateOptions({
      language: option.language,
    });

    // decorate hex colors
    decorateHexColors(editor);

    // scroll to top
    editor?.setScrollPosition({ scrollTop: 0 });
  };

  const onModalClose = () => {
    editor?.dispose();
    editor = null;
    selectedExportOption.value = exportOptions[0];
  };

  const onPaletteOutputCopyClick = () => {
    navigator.clipboard.writeText(exportOutput.value);

    isOutputCopied.value = true;

    setTimeout(() => {
      isOutputCopied.value = false;
    }, 1000);
  };

  const handleThemeChange = (event: MediaQueryListEvent) => {
    editorTheme.value = event.matches ? 'ayu-dark' : 'ayu-light';

    editor?.updateOptions({
      theme: editorTheme.value,
    });
  };

  // #region hex color highlighting

  /**
   * Color inverter for text color
   * We need invert color for more readable texts
   */
  const invertColor = (hex: string): string => {
    const c = hex.replace('#', ''),
      r = parseInt(c.substring(0, 2), 16),
      g = parseInt(c.substring(2, 4), 16),
      b = parseInt(c.substring(4, 6), 16);

    const invertedR = (255 - r).toString(16).padStart(2, '0'),
      invertedG = (255 - g).toString(16).padStart(2, '0'),
      invertedB = (255 - b).toString(16).padStart(2, '0');

    return `#${invertedR}${invertedG}${invertedB}`;
  };

  /**
   * Hex color decorator for monaco editor
   */
  const decorateHexColors = (editor: editor.IStandaloneCodeEditor) => {
    const model = editor?.getModel();
    if (!model) return;

    const text = model.getValue(),
      hexRegex = /#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})(?![0-9A-Fa-f])/g,
      matches = text.matchAll(hexRegex);

    const decorations = [],
      usedColors = new Set();

    for (const match of matches) {
      const hex = match[0];

      let color =
        hex.length === 4
          ? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
          : hex;

      if (!usedColors.has(color)) {
        usedColors.add(color);

        const styleEl = document.createElement('style'),
          inverted = invertColor(color),
          className = `color-deco-${color.slice(1)}`;

        styleEl.innerHTML = `.${className} {
          background: ${color};
          color: ${inverted};
        }`;
        document.head.appendChild(styleEl);
      }

      const start = match.index,
        end = start + hex.length;

      decorations.push({
        range: new monaco.Range(
          model.getPositionAt(start).lineNumber,
          model.getPositionAt(start).column,
          model.getPositionAt(end).lineNumber,
          model.getPositionAt(end).column
        ),
        options: {
          inlineClassName: `color-deco-${color.slice(1)}`,
        },
      });
    }

    const decorationCollection = editor.createDecorationsCollection();
    decorationCollection.set(decorations);
  };

  // #endregion

  watch(
    () => props.colorName,
    () => {
      colorName.value = props.colorName.name;
    }
  );

  watch(
    () => colorName.value,
    () => {
      onExportOptionClick(selectedExportOption.value);
    }
  );

  onMounted(() => {
    // handle theme change
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handleThemeChange);

    // handle intial theme
    editorTheme.value = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'ayu-dark'
      : 'ayu-light';
  });

  onUnmounted(() => {
    onModalClose();
  });
</script>
