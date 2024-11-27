export enum ColorVariableTheme {
  TWC_THEME = 'twc-theme',
  TWC_THEME2 = 'twc-theme2',
}

export interface IColorHint {
  /**
   * The label of the color. Like: text, background, border, etc.
   */
  label: string;

  /**
   * The CSS color variable. Like: --color-primary, --color-secondary, etc.
   */
  color: string;

  /**
   * The level of the color. Like: 100, 200, 300, 400, 500, 600, 700, 800, 900.
   */
  level: number;
}
