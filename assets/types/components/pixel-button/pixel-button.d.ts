export declare class PixelButton {
    root: HTMLElement;
    autofocus: boolean;
    disabled: boolean;
    flat: boolean;
    raised: boolean;
    outlined: boolean;
    theme: string;
    primary: boolean;
    secondary: boolean;
    accent: boolean;
    color: string;
    backgroundColor: string;
    borderColor: string;
    uppercase: boolean;
    focused: boolean;
    hovered: boolean;
    get hasPixelIcon(): boolean;
    get computedStyle(): {
        '--pixel-text-transform': string;
        '--pixel-button-border-color': string;
        '--pixel-button-background-color': string;
        '--pixel-button-color': string;
    };
    get computedTextTransform(): "none" | "uppercase";
    onClick(event: PixelMouseEvent): void;
    onFocus(event: PixelFocusEvent): void;
    onBlur(event: PixelFocusEvent): void;
    onMouseOver(event: PixelMouseEvent): void;
    onMouseOut(event: PixelMouseEvent): void;
    render(): any;
}
