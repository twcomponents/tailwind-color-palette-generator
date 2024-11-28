import { IPaletteColor } from '../models/color.model';
import _ from 'lodash';

export default class ExportUtil {
  /**
   * Export the color palette as SCSS format.
   *
   * @param colorPalette The color palette.
   * @param paletteName The name of the palette.
   *
   * @returns The SCSS string.
   *
   * @example
   *
   * Input:
   * const colorPalette: IPaletteColor[] = [
   *   { level: 100, color: '#fcfbf8 },
   *   { level: 200, color: '#f7f6ed  },
   *   { level: 300, color: '#f0ecdb  },
   *  // ...
   * ];
   *
   * Output:
   * $primary-100: #fcfbf8;
   * $primary-200: #f7f6ed;
   * $primary-300: #f0ecdb;
   * // ...
   */
  public static exportAsScss(
    colorPalette: IPaletteColor[],
    paletteName: string
  ): string {
    return colorPalette
      .map((color: IPaletteColor) => {
        return `$${paletteName}-${color.level}: ${color.color};`;
      })
      .join('\n')
      .trim();
  }

  /**
   * Export the color palette as JSON format.
   *
   * @param colorPalette The color palette.
   * @param paletteName The name of the palette.
   * @returns The JSON string.
   */
  public static exportAsJson(
    colorPalette: IPaletteColor[],
    paletteName: string
  ): string {
    const formattedData: any = {};

    // to create flat object
    colorPalette.forEach((color: IPaletteColor) => {
      formattedData[color.level] = color.color;
    });

    const data = {
      // export with color name
      [_.snakeCase(paletteName)]: formattedData,
    };

    // for pretty print
    return JSON.stringify(data, null, 2);
  }
}
