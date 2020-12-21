'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a2c51f97.js');

var Placement;
(function (Placement) {
    Placement["TOP"] = "top";
    Placement["RIGHT"] = "right";
    Placement["BOTTOM"] = "bottom";
    Placement["LEFT"] = "left";
})(Placement || (Placement = {}));
var Alignment;
(function (Alignment) {
    Alignment["TOP"] = "top";
    Alignment["RIGHT"] = "right";
    Alignment["BOTTOM"] = "bottom";
    Alignment["LEFT"] = "left";
    Alignment["CENTER"] = "center";
})(Alignment || (Alignment = {}));
var Position;
(function (Position) {
    Position["FIXED"] = "fixed";
})(Position || (Position = {}));

const pixelTooltipCss = "pixel-tooltip{display:none;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:4}pixel-tooltip>div.tooltip-wrapper{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:var(--pixel-align-x);justify-content:var(--pixel-align-x);-ms-flex-align:var(--pixel-align-y);align-items:var(--pixel-align-y);white-space:nowrap}pixel-tooltip>div.tooltip-wrapper>div.tooltip-content{position:absolute;padding:5px 10px;font-family:var(--pixel-font-family);background-color:var(--pixel-tooltip-background-color, var(--pixel-background));color:var(--pixel-tooltip-color, var(--pixel-text-color-1));border:2px solid var(--pixel-tooltip-border-color, var(--pixel-border-1))}pixel-tooltip.active{display:inline-block}";

const PixelTooltip = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.placement = Placement.BOTTOM;
        this.offsetX = '0';
        this.offsetY = '0';
        this.offsetZ = '';
        this.active = false;
        this.update = 0;
    }
    // Events
    handleScroll() {
        this.update++;
    }
    handleResize() {
        this.update++;
    }
    // Computed
    get _offsetX() {
        return (typeof this.offsetX === 'number') ? this.offsetX : +this.offsetX;
    }
    get _offsetY() {
        return (typeof this.offsetY === 'number') ? this.offsetY : +this.offsetY;
    }
    get computedStyle() {
        const p = {};
        if (this.parent) {
            const rect = this.parent.getBoundingClientRect();
            p.position = Position.FIXED;
            switch (this.placement) {
                case Placement.TOP:
                    p.top = `${rect.top - this._offsetY}px`;
                    p['--pixel-align-x'] = this.alignX ? this.getFlexAlign(this.alignX) : 'center';
                    p['--pixel-align-y'] = this.alignY ? this.getFlexAlign(this.alignY) : 'flex-end';
                    switch (this.alignX) {
                        case Alignment.RIGHT:
                            p.left = `${rect.right - this._offsetX}px`;
                            break;
                        case Alignment.LEFT:
                            p.left = `${rect.left + this._offsetX}px`;
                            break;
                        default:
                            p.left = `${rect.right - rect.width / 2 + this._offsetX}px`;
                            break;
                    }
                    break;
                case Placement.RIGHT:
                    p.left = `${rect.right + this._offsetX}px`;
                    p['--pixel-align-x'] = this.alignX ? this.getFlexAlign(this.alignX) : 'flex-start';
                    p['--pixel-align-y'] = this.alignY ? this.getFlexAlign(this.alignY) : 'center';
                    switch (this.alignY) {
                        case Alignment.TOP:
                            p.top = `${rect.top - this._offsetY}px`;
                            break;
                        case Alignment.BOTTOM:
                            p.top = `${rect.bottom + this._offsetY}px`;
                            break;
                        default:
                            p.top = `${rect.top + rect.height / 2 + this._offsetY}px`;
                            break;
                    }
                    break;
                case Placement.BOTTOM:
                    p.top = `${rect.bottom + this._offsetY}px`;
                    p['--pixel-align-x'] = this.alignX ? this.getFlexAlign(this.alignX) : 'center';
                    p['--pixel-align-y'] = this.alignY ? this.getFlexAlign(this.alignY) : 'flex-start';
                    switch (this.alignX) {
                        case Alignment.RIGHT:
                            p.left = `${rect.right - this._offsetX}px`;
                            break;
                        case Alignment.LEFT:
                            p.left = `${rect.left + this._offsetX}px`;
                            break;
                        default:
                            p.left = `${rect.right - rect.width / 2 + this._offsetX}px`;
                            break;
                    }
                    break;
                case Placement.LEFT:
                    p.left = `${rect.left - this._offsetX}px`;
                    p['--pixel-align-x'] = this.alignX ? this.getFlexAlign(this.alignX) : 'flex-end';
                    p['--pixel-align-y'] = this.alignY ? this.getFlexAlign(this.alignY) : 'center';
                    switch (this.alignY) {
                        case Alignment.TOP:
                            p.top = `${rect.top - this._offsetY}px`;
                            break;
                        case Alignment.BOTTOM:
                            p.top = `${rect.bottom + this._offsetY}px`;
                            break;
                        default:
                            p.top = `${rect.top + rect.height / 2 + this._offsetY}px`;
                            break;
                    }
                    break;
            }
        }
        return Object.assign(Object.assign(Object.assign(Object.assign({}, p), (this.color && { '--pixel-tooltip-color': this.color })), (this.backgroundColor && { '--pixel-tooltip-background-color': this.backgroundColor })), (this.borderColor && { '--pixel-tooltip-border-color': this.borderColor }));
    }
    // Handlers
    getFlexAlign(alignment) {
        switch (alignment) {
            case Alignment.TOP:
                return 'flex-start';
            case Alignment.RIGHT:
                return 'flex-end';
            case Alignment.BOTTOM:
                return 'flex-end';
            case Alignment.LEFT:
                return 'flex-start';
            case Alignment.CENTER:
                return 'center';
        }
    }
    onMouseEnter() {
        this.active = true;
    }
    onMouseLeave(e) {
        if (!this.root.contains(e.relatedTarget)) {
            this.active = false;
        }
    }
    // Lifecycle
    componentWillRender() {
        var _a;
        if (this.for instanceof HTMLElement) {
            this.parent = this.for;
        }
        else if (typeof this.for === 'string') {
            this.parent = document.getElementById(this.for);
        }
        else {
            this.parent = this.root.previousElementSibling;
        }
        if (this.parent) {
            (_a = this.parent) === null || _a === void 0 ? void 0 : _a.removeEventListener('mouseenter', this.mouseEnterHandler);
            this.parent.removeEventListener('mouseleave', this.mouseLeaveHandler);
            this.mouseEnterHandler = () => {
                this.onMouseEnter();
            };
            this.mouseLeaveHandler = (e) => {
                this.onMouseLeave(e);
            };
            this.parent.addEventListener('mouseenter', this.mouseEnterHandler);
            this.parent.addEventListener('mouseleave', this.mouseLeaveHandler);
        }
    }
    disconnectedCallback() {
        if (this.parent) {
            this.parent.removeEventListener('mouseenter', this.mouseEnterHandler);
            this.parent.removeEventListener('mouseleave', this.mouseLeaveHandler);
        }
    }
    render() {
        return (index.h(index.Host, { class: {
                'active': this.active
            }, onMouseLeave: (e) => { this.onMouseLeave(e); }, style: this.computedStyle }, index.h("div", { class: "tooltip-wrapper" }, index.h("div", { class: "tooltip-content" }, index.h("slot", null)))));
    }
    get root() { return index.getElement(this); }
};
PixelTooltip.style = pixelTooltipCss;

exports.pixel_tooltip = PixelTooltip;
