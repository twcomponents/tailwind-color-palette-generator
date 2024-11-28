import { IPaletteColor } from '../models/color.model';
import _ from 'lodash';

export default class ExportUtil {
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
