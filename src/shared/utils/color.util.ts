export default class ColorUtil {
  public static getRandomColor(): string {
    let color;

    do {
      color = `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
    } while (color === '#ffffff');

    return color;
  }
}
