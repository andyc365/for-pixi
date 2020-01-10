import * as PIXI from 'pixi.js';

export default class ViewUtils {
  static drawRect(width: number, height: number): PIXI.Graphics {
    const graphics = new PIXI.Graphics();
    graphics.clear();
    graphics.beginFill(0x0);
    graphics.drawRect(0, 0, width, height);
    graphics.endFill();
    return graphics;
  }

  static checkIntersect(a: PIXI.Rectangle, b: PIXI.Rectangle) {
    return a.x + a.width > b.x && a.x < b.x + b.width
      && a.y + a.height > b.y && a.y < b.y + b.height;
  }
}
