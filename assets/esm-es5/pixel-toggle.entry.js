import { r as registerInstance, h, H as Host, g as getElement } from './index-c6358225.js';
import { K as KeyboardCode } from './keyboard-f353389a.js';
var pixelToggleCss = "pixel-toggle{position:relative;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;height:30px;width:60px;border:2px solid var(--pixel-toggle-border-color-1, var(--pixel-border-1));-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}pixel-toggle:hover,pixel-toggle:focus{outline:none}pixel-toggle:hover>div.pixel-active-wrapper,pixel-toggle:focus>div.pixel-active-wrapper{background-color:var(--pixel-wrapper-color);opacity:var(--pixel-hover-amount)}pixel-toggle:active{outline:none}pixel-toggle:active>div.pixel-active-wrapper{background-color:var(--pixel-wrapper-color);opacity:var(--pixel-active-amount)}pixel-toggle>div.pixel-active-wrapper{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:3;top:0;right:0;bottom:0;left:0;pointer-events:none}pixel-toggle>div.pixel-wrapper{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1;top:0;right:0;bottom:0;left:0;pointer-events:none;border-top:2px solid rgba(0, 0, 0, 0.25);border-bottom:2px solid rgba(255, 255, 255, 0.25)}pixel-toggle>div.slider{height:100%;-webkit-box-sizing:border-box;box-sizing:border-box}pixel-toggle>div.slider>div.slider-switch{position:absolute;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;width:50%;border:2px solid var(--pixel-toggle-border-color-2, var(--pixel-border-2))}pixel-toggle>div.slider>div.slider-switch>div.slider-switch-wrapper{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1;top:0;right:0;bottom:0;left:0;pointer-events:none;border-top:2px solid rgba(255, 255, 255, 0.25);border-bottom:2px solid rgba(0, 0, 0, 0.25)}pixel-toggle[primary]{background-color:var(--pixel-toggle-background-color, var(--pixel-primary))}pixel-toggle[primary]>div.pixel-wrapper{background-image:linear-gradient(135deg, var(--pixel-toggle-background-color, var(--pixel-primary)) 25%, rgba(0, 0, 0, 0.25) 25%, rgba(0, 0, 0, 0.25) 50%, var(--pixel-toggle-background-color, var(--pixel-primary)) 50%, var(--pixel-toggle-background-color, var(--pixel-primary)) 75%, rgba(0, 0, 0, 0.25) 75%, rgba(0, 0, 0, 0.25) 100%);background-size:28.28px 28.28px}pixel-toggle[primary]>div.slider>div.slider-switch>div.slider-switch-wrapper{background-color:var(--pixel-toggle-color, var(--pixel-primary))}pixel-toggle[secondary]{background-color:var(--pixel-toggle-background-color, var(--pixel-secondary))}pixel-toggle[secondary]>div.pixel-wrapper{background-image:linear-gradient(135deg, var(--pixel-toggle-background-color, var(--pixel-secondary)) 25%, rgba(0, 0, 0, 0.25) 25%, rgba(0, 0, 0, 0.25) 50%, var(--pixel-toggle-background-color, var(--pixel-secondary)) 50%, var(--pixel-toggle-background-color, var(--pixel-secondary)) 75%, rgba(0, 0, 0, 0.25) 75%, rgba(0, 0, 0, 0.25) 100%);background-size:28.28px 28.28px}pixel-toggle[secondary]>div.slider>div.slider-switch>div.slider-switch-wrapper{background-color:var(--pixel-toggle-color, var(--pixel-secondary))}pixel-toggle[accent]{background-color:var(--pixel-toggle-background-color, var(--pixel-accent))}pixel-toggle[accent]>div.pixel-wrapper{background-image:linear-gradient(135deg, var(--pixel-toggle-background-color, var(--pixel-accent)) 25%, rgba(0, 0, 0, 0.25) 25%, rgba(0, 0, 0, 0.25) 50%, var(--pixel-toggle-background-color, var(--pixel-accent)) 50%, var(--pixel-toggle-background-color, var(--pixel-accent)) 75%, rgba(0, 0, 0, 0.25) 75%, rgba(0, 0, 0, 0.25) 100%);background-size:28.28px 28.28px}pixel-toggle[accent]>div.slider>div.slider-switch>div.slider-switch-wrapper{background-color:var(--pixel-toggle-color, var(--pixel-accent))}pixel-toggle[checked]>div.slider>div.slider-switch{left:50%}pixel-toggle:not([checked]){background-color:#AAAAAA}pixel-toggle:not([checked])>div.pixel-wrapper{background-image:linear-gradient(135deg, #AAAAAA 25%, rgba(0, 0, 0, 0.25) 25%, rgba(0, 0, 0, 0.25) 50%, #AAAAAA 50%, #AAAAAA 75%, rgba(0, 0, 0, 0.25) 75%, rgba(0, 0, 0, 0.25) 100%);background-size:28.28px 28.28px}pixel-toggle:not([checked])>div.slider>div.slider-switch>div.slider-switch-wrapper{background-color:#AAAAAA}pixel-toggle[rounded]{border-radius:16px}pixel-toggle[rounded]>div.pixel-wrapper{border-radius:16px}pixel-toggle[rounded]>div.pixel-active-wrapper{border-radius:16px}pixel-toggle[rounded]>div.slider>div.slider-switch{border-radius:16px}pixel-toggle[rounded]>div.slider>div.slider-switch>div.slider-switch-wrapper{border-radius:16px}pixel-toggle[disabled]{pointer-events:none;opacity:0.5}";
var PixelToggle = /** @class */ (function () {
    function PixelToggle(hostRef) {
        registerInstance(this, hostRef);
        // Props
        this.autofocus = false;
        this.disabled = false;
        this.primary = false;
        this.secondary = false;
        this.accent = false;
        // State
        this.hasTriggeredOnce = false;
    }
    Object.defineProperty(PixelToggle.prototype, "computedStyle", {
        // Computed
        get: function () {
            return Object.assign(Object.assign(Object.assign(Object.assign({}, (this.color && { '--pixel-toggle-color': this.color })), (this.backgroundColor && { '--pixel-toggle-background-color': this.backgroundColor })), (this.borderColor1 && { '--pixel-toggle-border-color-1': this.borderColor1 })), (this.borderColor2 && { '--pixel-toggle-border-color-2': this.borderColor2 }));
        },
        enumerable: true,
        configurable: true
    });
    // Handlers
    PixelToggle.prototype.onKeyPress = function (e) {
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
    PixelToggle.prototype.onKeyUp = function (e) {
        switch (e.code) {
            case KeyboardCode.SPACE:
            case KeyboardCode.ENTER:
                this.hasTriggeredOnce = false;
                break;
        }
    };
    PixelToggle.prototype.onClick = function () {
        this.checked = !this.checked;
        this.root.dispatchEvent(new CustomEvent('change', { detail: this.checked }));
    };
    // Lifecycle
    PixelToggle.prototype.componentWillRender = function () {
        // Default Theme
        if (!this.primary && !this.secondary && !this.accent) {
            this.secondary = true;
        }
    };
    PixelToggle.prototype.componentDidLoad = function () {
        if (this.autofocus) {
            this.root.focus();
        }
    };
    PixelToggle.prototype.render = function () {
        var _this = this;
        return (h(Host, { tabIndex: (this.disabled) ? -1 : 0, onClick: function () { return _this.onClick(); }, onKeyPress: function (event) { return _this.onKeyPress(event); }, onKeyUp: function (event) { return _this.onKeyUp(event); }, style: this.computedStyle }, h("div", { class: "pixel-active-wrapper" }), h("div", { class: "pixel-wrapper" }), h("div", { class: "slider" }, h("div", { class: { 'slider-switch': true, 'active': this.checked } }, h("div", { class: "slider-switch-wrapper" })))));
    };
    Object.defineProperty(PixelToggle.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return PixelToggle;
}());
PixelToggle.style = pixelToggleCss;
export { PixelToggle as pixel_toggle };
