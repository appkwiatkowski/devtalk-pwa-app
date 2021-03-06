import { Text, TextStyle } from 'pixi.js';

export class InterfaceText {
  constructor({ text, anchorX, anchorY, x, y, font = 'Arial', fontSize, fontWeight, fillColor, uppercase }) {
    this._style = new TextStyle(this.setTextStyle(font, fontSize, fontWeight, fillColor, uppercase));
    this._stage = new Text(text, this.style);

    this.stage.anchor.set(anchorX, anchorY);
    this.stage.x = x;
    this.stage.y = y;
  }

  setTextStyle = (font, fontSize, fontWeight, fillColor) => ({
    fontFamily: `${font}`,
    fontSize: fontSize,
    fontWeight: `${fontWeight}`,
    fill: `${fillColor}`,
  });

  get stage() {
    return this._stage;
  }

  get style() {
    return this._style;
  }

  setText(text) {
    this._stage.text = text;
  }

  set x(x) {
    this._stage.x = x;
  }

  set y(y) {
    this._stage.y = y;
  }
}
