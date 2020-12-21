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
    hasTriggeredOnce: boolean;
    active: boolean;
    get hasPixelIcon(): boolean;
    get computedStyle(): {
        '--pixel-button-border-color': string;
        '--pixel-button-background-color': string;
        '--pixel-button-color': string;
    };
    onKeyDown(e: KeyboardEvent): void;
    onKeyPress(e: KeyboardEvent): void;
    onKeyUp(e: KeyboardEvent): void;
    componentWillRender(): void;
    componentDidLoad(): void;
    render(): any;
}
