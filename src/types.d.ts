// Events
declare interface PixelMouseEvent extends MouseEvent {
  pixelTarget: HTMLElement;
}

declare interface PixelFocusEvent extends FocusEvent {
  pixelTarget: HTMLElement;
}
