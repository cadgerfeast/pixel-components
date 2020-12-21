import { r as registerInstance, h, H as Host, g as getElement } from './index-c6358225.js';
import { K as KeyboardCode } from './keyboard-f353389a.js';
var pixelButtonCss = "pixel-button{position:relative;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;vertical-align:text-bottom;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}pixel-button:hover,pixel-button:focus,pixel-button:active{outline:none}pixel-button>div.pixel-wrapper{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1;top:0;right:0;bottom:0;left:0;pointer-events:none}pixel-button>div.pixel-button{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;font-family:var(--pixel-font-family);font-weight:bold;cursor:pointer;-webkit-box-sizing:border-box;box-sizing:border-box;border:none;text-transform:var(--pixel-button-text-transform)}pixel-button[flat]>div.pixel-button{background-color:var(--pixel-button-background-color, transparent);padding:7px 16px}pixel-button[flat]>div.pixel-button.icon{padding:2px}pixel-button[flat][primary]>div.pixel-button{color:var(--pixel-primary)}pixel-button[flat][secondary]>div.pixel-button{color:var(--pixel-secondary)}pixel-button[flat][accent]>div.pixel-button{color:var(--pixel-accent)}pixel-button[flat]:hover>.pixel-wrapper,pixel-button[flat]:focus>.pixel-wrapper{background-color:var(--pixel-wrapper-color);opacity:var(--pixel-hover-amount)}pixel-button[flat]:active>.pixel-wrapper,pixel-button[flat].active>.pixel-wrapper{background-color:var(--pixel-wrapper-color);opacity:var(--pixel-active-amount)}pixel-button[raised]{border:2px solid var(--pixel-button-border-color, var(--pixel-border-1))}pixel-button[raised]>div.pixel-wrapper{border-top:2px solid rgba(255, 255, 255, 0.25);border-bottom:2px solid rgba(0, 0, 0, 0.25)}pixel-button[raised]>div.pixel-button{background-color:var(--pixel-button-background-color, var(--pixel-primary));color:var(--pixel-button-color, var(--pixel-text-color-2));padding:5px 16px}pixel-button[raised]>div.pixel-button.icon{padding:0.5px 2px}pixel-button[raised][secondary]>div.pixel-button{background-color:var(--pixel-button-background-color, var(--pixel-secondary));color:var(--pixel-button-color, var(--pixel-text-color-2))}pixel-button[raised][accent]>div.pixel-button{background-color:var(--pixel-button-background-color, var(--pixel-accent));color:var(--pixel-button-color, var(--pixel-text-color-2))}pixel-button[raised]:hover>div.pixel-wrapper,pixel-button[raised]:focus>div.pixel-wrapper{background-color:rgba(0, 0, 0, 0.5);border-top:2px solid white;border-bottom:2px solid black;opacity:0.25}pixel-button[raised]:active>div.pixel-wrapper,pixel-button[raised].active>div.pixel-wrapper{background-color:rgba(0, 0, 0, 0.5);border-top:2px solid black;border-bottom:2px solid white;opacity:0.5}pixel-button[raised][stripped][primary]>div.pixel-button{background-image:linear-gradient(135deg, var(--pixel-button-background-color, var(--pixel-primary)) 25%, rgba(0, 0, 0, 0.1) 25%, rgba(0, 0, 0, 0.1) 50%, var(--pixel-button-background-color, var(--pixel-primary)) 50%, var(--pixel-button-background-color, var(--pixel-primary)) 75%, rgba(0, 0, 0, 0.1) 75%, rgba(0, 0, 0, 0.1) 100%);background-size:28.28px 28.28px}pixel-button[raised][stripped][secondary]>div.pixel-button{background-image:linear-gradient(135deg, var(--pixel-button-background-color, var(--pixel-secondary)) 25%, rgba(0, 0, 0, 0.1) 25%, rgba(0, 0, 0, 0.1) 50%, var(--pixel-button-background-color, var(--pixel-secondary)) 50%, var(--pixel-button-background-color, var(--pixel-secondary)) 75%, rgba(0, 0, 0, 0.1) 75%, rgba(0, 0, 0, 0.1) 100%);background-size:28.28px 28.28px}pixel-button[raised][stripped][accent]>div.pixel-button{background-image:linear-gradient(135deg, var(--pixel-button-background-color, var(--pixel-accent)) 25%, rgba(0, 0, 0, 0.1) 25%, rgba(0, 0, 0, 0.1) 50%, var(--pixel-button-background-color, var(--pixel-accent)) 50%, var(--pixel-button-background-color, var(--pixel-accent)) 75%, rgba(0, 0, 0, 0.1) 75%, rgba(0, 0, 0, 0.1) 100%);background-size:28.28px 28.28px}pixel-button[outlined]{background-color:var(--pixel-button-background-color, transparent)}pixel-button[outlined][primary]{border:2px solid var(--pixel-primary)}pixel-button[outlined][primary]>div.pixel-button{color:var(--pixel-primary)}pixel-button[outlined][secondary]{border:2px solid var(--pixel-secondary)}pixel-button[outlined][secondary]>div.pixel-button{color:var(--pixel-secondary)}pixel-button[outlined][accent]{border:2px solid var(--pixel-accent)}pixel-button[outlined][accent]>div.pixel-button{color:var(--pixel-accent)}pixel-button[outlined]:hover>.pixel-wrapper,pixel-button[outlined]:focus>.pixel-wrapper{background-color:var(--pixel-wrapper-color);opacity:var(--pixel-hover-amount)}pixel-button[outlined]:active>.pixel-wrapper,pixel-button[outlined].active>.pixel-wrapper{background-color:var(--pixel-wrapper-color);opacity:var(--pixel-active-amount)}pixel-button[outlined]>div.pixel-button{padding:5px 16px}pixel-button[outlined]>div.pixel-button.icon{padding:0.5px 2px}pixel-button[rounded]{border-radius:16px}pixel-button[rounded]>div.pixel-wrapper{border-radius:16px}pixel-button[rounded]>div.pixel-button{border-radius:16px}pixel-button[rounded]>div.pixel-button.icon{padding:0}pixel-button[uppercase]>div.pixel-button{text-transform:uppercase}pixel-button[disabled]{pointer-events:none;opacity:0.5}";
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
        // State
        this.hasTriggeredOnce = false;
        this.active = false;
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
            return Object.assign(Object.assign(Object.assign({}, (this.color && { '--pixel-button-color': this.color })), (this.backgroundColor && { '--pixel-button-background-color': this.backgroundColor })), (this.borderColor && { '--pixel-button-border-color': this.borderColor }));
        },
        enumerable: true,
        configurable: true
    });
    // Handlers
    PixelButton.prototype.onKeyDown = function (e) {
        switch (e.code) {
            case KeyboardCode.SPACE:
            case KeyboardCode.ENTER:
                this.active = true;
                break;
        }
    };
    PixelButton.prototype.onKeyPress = function (e) {
        switch (e.code) {
            case KeyboardCode.SPACE:
            case KeyboardCode.ENTER:
                if (!this.hasTriggeredOnce) {
                    this.root.click();
                }
                this.hasTriggeredOnce = true;
                e.preventDefault();
                break;
        }
    };
    PixelButton.prototype.onKeyUp = function (e) {
        switch (e.code) {
            case KeyboardCode.SPACE:
            case KeyboardCode.ENTER:
                this.active = false;
                this.hasTriggeredOnce = false;
                break;
        }
    };
    // Lifecycle
    PixelButton.prototype.componentWillRender = function () {
        // Default Shape
        if (!this.flat && !this.raised && !this.outlined) {
            this.raised = true;
        }
        // Default Theme
        if (!this.primary && !this.secondary && !this.accent) {
            this.secondary = true;
        }
    };
    PixelButton.prototype.componentDidLoad = function () {
        if (this.autofocus) {
            this.root.focus();
        }
    };
    PixelButton.prototype.render = function () {
        var _this = this;
        return (h(Host, { tabIndex: (this.disabled) ? -1 : 0, onKeyDown: function (e) { _this.onKeyDown(e); }, onKeypress: function (e) { _this.onKeyPress(e); }, onKeyUp: function (e) { _this.onKeyUp(e); }, class: {
                'active': this.active
            }, style: this.computedStyle }, h("div", { class: "pixel-wrapper" }), h("div", { class: {
                'pixel-button': true,
                'icon': this.hasPixelIcon
            } }, h("slot", null))));
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
