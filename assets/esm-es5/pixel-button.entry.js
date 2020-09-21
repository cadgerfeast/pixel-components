import { r as registerInstance, h, H as Host, g as getElement } from './index-7679ad4f.js';
var pixelButtonCss = "pixel-button{position:relative;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;vertical-align:text-bottom}pixel-button>div.pixel-wrapper{position:absolute;-webkit-box-sizing:inherit;box-sizing:inherit;z-index:1;top:0;right:0;bottom:0;left:0;pointer-events:none}pixel-button>button{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;font-family:var(--pixel-font-family);font-weight:bold;cursor:pointer;-webkit-box-sizing:inherit;box-sizing:inherit;border:none;text-transform:var(--pixel-button-text-transform)}pixel-button>button:focus{outline:none}pixel-button>button{background-color:var(--pixel-button-background-color, transparent);color:var(--pixel-button-color, var(--pixel-primary));padding:7px 16px}pixel-button>button.icon{padding:2px}pixel-button[secondary]>button{color:var(--pixel-secondary)}pixel-button[accent]>button{color:var(--pixel-accent)}pixel-button.hovered>.pixel-wrapper,pixel-button.focused>.pixel-wrapper{background-color:rgba(32, 32, 32, 0.1)}pixel-button:active>.pixel-wrapper{background-color:rgba(32, 32, 32, 0.3)}pixel-button[raised]{border:2px solid var(--pixel-button-border-color, var(--pixel-border))}pixel-button[raised]>div.pixel-wrapper{border-top:2px solid rgba(255, 255, 255, 0.25);border-bottom:2px solid rgba(0, 0, 0, 0.25)}pixel-button[raised]>button{background-color:var(--pixel-button-background-color, var(--pixel-primary));color:var(--pixel-button-color, var(--pixel-text-color-2));padding:5px 16px}pixel-button[raised]>button.icon{padding:0 2px}pixel-button[raised][secondary]>button{background-color:var(--pixel-button-background-color, var(--pixel-secondary))}pixel-button[raised][accent]>button{background-color:var(--pixel-button-background-color, var(--pixel-accent))}pixel-button[raised].hovered>div.pixel-wrapper,pixel-button[raised].focused>div.pixel-wrapper{background-color:rgba(255, 255, 255, 0.1);border-top:2px solid rgba(255, 255, 255, 0.25);border-bottom:2px solid rgba(0, 0, 0, 0.25)}pixel-button[raised]:active>div.pixel-wrapper{background-color:rgba(0, 0, 0, 0.1);border-top:2px solid rgba(0, 0, 0, 0.25);border-bottom:2px solid rgba(255, 255, 255, 0.25)}pixel-button[outlined]{border:2px solid var(--pixel-button-border-color, var(--pixel-primary))}pixel-button[outlined][secondary]{border-color:var(--pixel-secondary)}pixel-button[outlined][accent]{border-color:var(--pixel-accent)}pixel-button[outlined]>button{padding:5px 16px}pixel-button[outlined]>button.icon{padding:0 2px}pixel-button[rounded]{border-radius:16px}pixel-button[rounded]>div.pixel-wrapper{border-radius:16px}pixel-button[rounded]>button{border-radius:16px}pixel-button[rounded]>button.icon{padding:0}pixel-button[stripped]>button{background-image:linear-gradient(135deg, var(--pixel-button-background-color, var(--pixel-primary)) 25%, rgba(0, 0, 0, 0.1) 25%, rgba(0, 0, 0, 0.1) 50%, var(--pixel-button-background-color, var(--pixel-primary)) 50%, var(--pixel-button-background-color, var(--pixel-primary)) 75%, rgba(0, 0, 0, 0.1) 75%, rgba(0, 0, 0, 0.1) 100%);background-size:28.28px 28.28px}pixel-button[stripped][secondary]>button{background-image:linear-gradient(135deg, var(--pixel-button-background-color, var(--pixel-secondary)) 25%, rgba(0, 0, 0, 0.1) 25%, rgba(0, 0, 0, 0.1) 50%, var(--pixel-button-background-color, var(--pixel-secondary)) 50%, var(--pixel-button-background-color, var(--pixel-secondary)) 75%, rgba(0, 0, 0, 0.1) 75%, rgba(0, 0, 0, 0.1) 100%)}pixel-button[stripped][accent]>button{background-image:linear-gradient(135deg, var(--pixel-button-background-color, var(--pixel-accent)) 25%, rgba(0, 0, 0, 0.1) 25%, rgba(0, 0, 0, 0.1) 50%, var(--pixel-button-background-color, var(--pixel-accent)) 50%, var(--pixel-button-background-color, var(--pixel-accent)) 75%, rgba(0, 0, 0, 0.1) 75%, rgba(0, 0, 0, 0.1) 100%)}pixel-button[disabled]{pointer-events:none;opacity:0.5}";
var PixelButton = /** @class */ (function () {
    function PixelButton(hostRef) {
        registerInstance(this, hostRef);
        // Props
        this.autofocus = false;
        this.disabled = false;
        this.flat = false;
        this.raised = false;
        this.outlined = false;
        this.primary = false;
        this.secondary = false;
        this.accent = false;
        this.uppercase = false;
        // States
        this.focused = false;
        this.hovered = false;
    }
    Object.defineProperty(PixelButton.prototype, "hasPixelIcon", {
        // Computed
        get: function () {
            var child = this.root.querySelector('pixel-icon');
            return child && child.tagName === 'PIXEL-ICON';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PixelButton.prototype, "computedStyle", {
        get: function () {
            return Object.assign(Object.assign(Object.assign(Object.assign({}, (this.color && { '--pixel-button-color': this.color })), (this.backgroundColor && { '--pixel-button-background-color': this.backgroundColor })), (this.borderColor && { '--pixel-button-border-color': this.borderColor })), (this.computedTextTransform && { '--pixel-text-transform': this.computedTextTransform }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PixelButton.prototype, "computedTextTransform", {
        get: function () {
            return this.uppercase ? 'uppercase' : 'none';
        },
        enumerable: true,
        configurable: true
    });
    // Handlers
    PixelButton.prototype.onClick = function (event) {
        event.pixelTarget = this.root;
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
        }
    };
    PixelButton.prototype.onFocus = function (event) {
        event.pixelTarget = this.root;
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            this.focused = true;
        }
    };
    PixelButton.prototype.onBlur = function (event) {
        event.pixelTarget = this.root;
        this.focused = false;
    };
    PixelButton.prototype.onMouseOver = function (event) {
        event.pixelTarget = this.root;
        this.hovered = true;
    };
    PixelButton.prototype.onMouseOut = function (event) {
        event.pixelTarget = this.root;
        this.hovered = false;
    };
    // Lifecycle
    PixelButton.prototype.render = function () {
        var _this = this;
        return (h(Host, { tabindex: "-1", class: {
                'focused': this.focused,
                'hovered': this.hovered
            }, style: this.computedStyle }, h("div", { tabindex: "-1", class: "pixel-wrapper" }), h("button", { class: {
                'icon': this.hasPixelIcon
            }, autoFocus: this.autofocus, tabIndex: (this.disabled) ? -1 : 0, onClick: function (event) { return _this.onClick(event); }, onFocus: function (event) { return _this.onFocus(event); }, onBlur: function (event) { return _this.onBlur(event); }, onMouseOver: function (event) { return _this.onMouseOver(event); }, onMouseOut: function (event) { return _this.onMouseOut(event); } }, h("slot", null))));
    };
    Object.defineProperty(PixelButton.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return PixelButton;
}());
PixelButton.style = pixelButtonCss;
export { PixelButton as pixel_button };
