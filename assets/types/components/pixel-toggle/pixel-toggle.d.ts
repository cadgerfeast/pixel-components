export declare class PixelToggle {
    root: HTMLElement;
    autofocus: boolean;
    disabled: boolean;
    checked: boolean;
    primary: boolean;
    secondary: boolean;
    accent: boolean;
    color: string;
    backgroundColor: string;
    borderColor1: string;
    borderColor2: string;
    hasTriggeredOnce: boolean;
    get computedStyle(): {
        '--pixel-toggle-border-color-2': string;
        '--pixel-toggle-border-color-1': string;
        '--pixel-toggle-background-color': string;
        '--pixel-toggle-color': string;
    };
    onKeyPress(e: KeyboardEvent): void;
    onKeyUp(e: KeyboardEvent): void;
    onClick(): void;
    componentWillRender(): void;
    componentDidLoad(): void;
    render(): any;
}
