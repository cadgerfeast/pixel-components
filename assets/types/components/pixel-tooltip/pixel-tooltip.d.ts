import { Alignment, Placement, Position } from '../../helpers/style';
export declare class PixelTooltip {
    root: HTMLElement;
    for: HTMLElement | string;
    placement: Placement;
    alignX: Alignment;
    alignY: Alignment;
    offsetX: number | string;
    offsetY: number | string;
    offsetZ: string;
    color: string;
    backgroundColor: string;
    borderColor: string;
    parent: Element;
    active: boolean;
    update: number;
    handleScroll(): void;
    handleResize(): void;
    mouseEnterHandler: () => void;
    mouseLeaveHandler: (e: MouseEvent) => void;
    get _offsetX(): number;
    get _offsetY(): number;
    get computedStyle(): {
        '--pixel-tooltip-border-color': string;
        '--pixel-tooltip-background-color': string;
        '--pixel-tooltip-color': string;
        position?: Position;
        top?: string;
        left?: string;
    };
    getFlexAlign(alignment: Alignment): "flex-start" | "flex-end" | "center";
    onMouseEnter(): void;
    onMouseLeave(e: MouseEvent): void;
    componentWillRender(): void;
    disconnectedCallback(): void;
    render(): any;
}
