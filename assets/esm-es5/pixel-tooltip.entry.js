import { r as registerInstance, h, H as Host, g as getElement } from './index-c6358225.js';
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
var pixelTooltipCss = "pixel-tooltip{display:none;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:4}pixel-tooltip>div.tooltip-wrapper{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:var(--pixel-align-x);justify-content:var(--pixel-align-x);-ms-flex-align:var(--pixel-align-y);align-items:var(--pixel-align-y);white-space:nowrap}pixel-tooltip>div.tooltip-wrapper>div.tooltip-content{position:absolute;padding:5px 10px;font-family:var(--pixel-font-family);background-color:var(--pixel-tooltip-background-color, var(--pixel-background));color:var(--pixel-tooltip-color, var(--pixel-text-color-1));border:2px solid var(--pixel-tooltip-border-color, var(--pixel-border-1))}pixel-tooltip.active{display:inline-block}";
var PixelTooltip = /** @class */ (function () {
    function PixelTooltip(hostRef) {
        registerInstance(this, hostRef);
        this.placement = Placement.BOTTOM;
        this.offsetX = '0';
        this.offsetY = '0';
        this.offsetZ = '';
        this.active = false;
        this.update = 0;
    }
    // Events
    PixelTooltip.prototype.handleScroll = function () {
        this.update++;
    };
    PixelTooltip.prototype.handleResize = function () {
        this.update++;
    };
    Object.defineProperty(PixelTooltip.prototype, "_offsetX", {
        // Computed
        get: function () {
            return (typeof this.offsetX === 'number') ? this.offsetX : +this.offsetX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PixelTooltip.prototype, "_offsetY", {
        get: function () {
            return (typeof this.offsetY === 'number') ? this.offsetY : +this.offsetY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PixelTooltip.prototype, "computedStyle", {
        get: function () {
            var p = {};
            if (this.parent) {
                var rect = this.parent.getBoundingClientRect();
                p.position = Position.FIXED;
                switch (this.placement) {
                    case Placement.TOP:
                        p.top = rect.top - this._offsetY + "px";
                        p['--pixel-align-x'] = this.alignX ? this.getFlexAlign(this.alignX) : 'center';
                        p['--pixel-align-y'] = this.alignY ? this.getFlexAlign(this.alignY) : 'flex-end';
                        switch (this.alignX) {
                            case Alignment.RIGHT:
                                p.left = rect.right - this._offsetX + "px";
                                break;
                            case Alignment.LEFT:
                                p.left = rect.left + this._offsetX + "px";
                                break;
                            default:
                                p.left = rect.right - rect.width / 2 + this._offsetX + "px";
                                break;
                        }
                        break;
                    case Placement.RIGHT:
                        p.left = rect.right + this._offsetX + "px";
                        p['--pixel-align-x'] = this.alignX ? this.getFlexAlign(this.alignX) : 'flex-start';
                        p['--pixel-align-y'] = this.alignY ? this.getFlexAlign(this.alignY) : 'center';
                        switch (this.alignY) {
                            case Alignment.TOP:
                                p.top = rect.top - this._offsetY + "px";
                                break;
                            case Alignment.BOTTOM:
                                p.top = rect.bottom + this._offsetY + "px";
                                break;
                            default:
                                p.top = rect.top + rect.height / 2 + this._offsetY + "px";
                                break;
                        }
                        break;
                    case Placement.BOTTOM:
                        p.top = rect.bottom + this._offsetY + "px";
                        p['--pixel-align-x'] = this.alignX ? this.getFlexAlign(this.alignX) : 'center';
                        p['--pixel-align-y'] = this.alignY ? this.getFlexAlign(this.alignY) : 'flex-start';
                        switch (this.alignX) {
                            case Alignment.RIGHT:
                                p.left = rect.right - this._offsetX + "px";
                                break;
                            case Alignment.LEFT:
                                p.left = rect.left + this._offsetX + "px";
                                break;
                            default:
                                p.left = rect.right - rect.width / 2 + this._offsetX + "px";
                                break;
                        }
                        break;
                    case Placement.LEFT:
                        p.left = rect.left - this._offsetX + "px";
                        p['--pixel-align-x'] = this.alignX ? this.getFlexAlign(this.alignX) : 'flex-end';
                        p['--pixel-align-y'] = this.alignY ? this.getFlexAlign(this.alignY) : 'center';
                        switch (this.alignY) {
                            case Alignment.TOP:
                                p.top = rect.top - this._offsetY + "px";
                                break;
                            case Alignment.BOTTOM:
                                p.top = rect.bottom + this._offsetY + "px";
                                break;
                            default:
                                p.top = rect.top + rect.height / 2 + this._offsetY + "px";
                                break;
                        }
                        break;
                }
            }
            return Object.assign(Object.assign(Object.assign(Object.assign({}, p), (this.color && { '--pixel-tooltip-color': this.color })), (this.backgroundColor && { '--pixel-tooltip-background-color': this.backgroundColor })), (this.borderColor && { '--pixel-tooltip-border-color': this.borderColor }));
        },
        enumerable: true,
        configurable: true
    });
    // Handlers
    PixelTooltip.prototype.getFlexAlign = function (alignment) {
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
    };
    PixelTooltip.prototype.onMouseEnter = function () {
        this.active = true;
    };
    PixelTooltip.prototype.onMouseLeave = function (e) {
        if (!this.root.contains(e.relatedTarget)) {
            this.active = false;
        }
    };
    // Lifecycle
    PixelTooltip.prototype.componentWillRender = function () {
        var _this = this;
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
            this.mouseEnterHandler = function () {
                _this.onMouseEnter();
            };
            this.mouseLeaveHandler = function (e) {
                _this.onMouseLeave(e);
            };
            this.parent.addEventListener('mouseenter', this.mouseEnterHandler);
            this.parent.addEventListener('mouseleave', this.mouseLeaveHandler);
        }
    };
    PixelTooltip.prototype.disconnectedCallback = function () {
        if (this.parent) {
            this.parent.removeEventListener('mouseenter', this.mouseEnterHandler);
            this.parent.removeEventListener('mouseleave', this.mouseLeaveHandler);
        }
    };
    PixelTooltip.prototype.render = function () {
        var _this = this;
        return (h(Host, { class: {
                'active': this.active
            }, onMouseLeave: function (e) { _this.onMouseLeave(e); }, style: this.computedStyle }, h("div", { class: "tooltip-wrapper" }, h("div", { class: "tooltip-content" }, h("slot", null)))));
    };
    Object.defineProperty(PixelTooltip.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return PixelTooltip;
}());
PixelTooltip.style = pixelTooltipCss;
export { PixelTooltip as pixel_tooltip };
