import { r as registerInstance, h, H as Host, g as getElement } from './index-7679ad4f.js';

const pixelButtonCss = "pixel-button{position:relative;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;vertical-align:text-bottom}pixel-button>div.pixel-wrapper{position:absolute;-webkit-box-sizing:inherit;box-sizing:inherit;z-index:1;top:0;right:0;bottom:0;left:0;pointer-events:none}pixel-button>button{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;font-family:var(--pixel-font-family);font-weight:bold;cursor:pointer;-webkit-box-sizing:inherit;box-sizing:inherit;border:none;text-transform:var(--pixel-button-text-transform)}pixel-button>button:focus{outline:none}pixel-button>button{background-color:var(--pixel-button-background-color, transparent);color:var(--pixel-button-color, var(--pixel-primary));padding:7px 16px}pixel-button>button.icon{padding:2px}pixel-button[secondary]>button{color:var(--pixel-secondary)}pixel-button[accent]>button{color:var(--pixel-accent)}pixel-button.hovered>.pixel-wrapper,pixel-button.focused>.pixel-wrapper{background-color:rgba(32, 32, 32, 0.1)}pixel-button:active>.pixel-wrapper{background-color:rgba(32, 32, 32, 0.3)}pixel-button[raised]{border:2px solid var(--pixel-button-border-color, var(--pixel-border))}pixel-button[raised]>div.pixel-wrapper{border-top:2px solid rgba(255, 255, 255, 0.25);border-bottom:2px solid rgba(0, 0, 0, 0.25)}pixel-button[raised]>button{background-color:var(--pixel-button-background-color, var(--pixel-primary));color:var(--pixel-button-color, var(--pixel-text-color-2));padding:5px 16px}pixel-button[raised]>button.icon{padding:0 2px}pixel-button[raised][secondary]>button{background-color:var(--pixel-button-background-color, var(--pixel-secondary))}pixel-button[raised][accent]>button{background-color:var(--pixel-button-background-color, var(--pixel-accent))}pixel-button[raised].hovered>div.pixel-wrapper,pixel-button[raised].focused>div.pixel-wrapper{background-color:rgba(255, 255, 255, 0.1);border-top:2px solid rgba(255, 255, 255, 0.25);border-bottom:2px solid rgba(0, 0, 0, 0.25)}pixel-button[raised]:active>div.pixel-wrapper{background-color:rgba(0, 0, 0, 0.1);border-top:2px solid rgba(0, 0, 0, 0.25);border-bottom:2px solid rgba(255, 255, 255, 0.25)}pixel-button[outlined]{border:2px solid var(--pixel-button-border-color, var(--pixel-primary))}pixel-button[outlined][secondary]{border-color:var(--pixel-secondary)}pixel-button[outlined][accent]{border-color:var(--pixel-accent)}pixel-button[outlined]>button{padding:5px 16px}pixel-button[outlined]>button.icon{padding:0 2px}pixel-button[rounded]{border-radius:16px}pixel-button[rounded]>div.pixel-wrapper{border-radius:16px}pixel-button[rounded]>button{border-radius:16px}pixel-button[rounded]>button.icon{padding:0}pixel-button[stripped]>button{background-image:linear-gradient(135deg, var(--pixel-button-background-color) 25%, rgba(0, 0, 0, 0.1) 25%, rgba(0, 0, 0, 0.1) 50%, var(--pixel-button-background-color) 50%, var(--pixel-button-background-color) 75%, rgba(0, 0, 0, 0.1) 75%, rgba(0, 0, 0, 0.1) 100%);background-size:28.28px 28.28px}pixel-button[disabled]{pointer-events:none;opacity:0.5}";

const PixelButton = class {
    constructor(hostRef) {
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
    // Computed
    get hasPixelIcon() {
        const child = this.root.querySelector('pixel-icon');
        return child && child.tagName === 'PIXEL-ICON';
    }
    get computedStyle() {
        return Object.assign(Object.assign(Object.assign(Object.assign({}, (this.color && { '--pixel-button-color': this.color })), (this.backgroundColor && { '--pixel-button-background-color': this.backgroundColor })), (this.borderColor && { '--pixel-button-border-color': this.borderColor })), (this.computedTextTransform && { '--pixel-text-transform': this.computedTextTransform }));
    }
    get computedTextTransform() {
        return this.uppercase ? 'uppercase' : 'none';
    }
    // Handlers
    onClick(event) {
        event.pixelTarget = this.root;
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
    onFocus(event) {
        event.pixelTarget = this.root;
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            this.focused = true;
        }
    }
    onBlur(event) {
        event.pixelTarget = this.root;
        this.focused = false;
    }
    onMouseOver(event) {
        event.pixelTarget = this.root;
        this.hovered = true;
    }
    onMouseOut(event) {
        event.pixelTarget = this.root;
        this.hovered = false;
    }
    // Lifecycle
    render() {
        return (h(Host, { tabindex: "-1", class: {
                'focused': this.focused,
                'hovered': this.hovered
            }, style: this.computedStyle }, h("div", { tabindex: "-1", class: "pixel-wrapper" }), h("button", { class: {
                'icon': this.hasPixelIcon
            }, autoFocus: this.autofocus, tabIndex: (this.disabled) ? -1 : 0, onClick: (event) => this.onClick(event), onFocus: (event) => this.onFocus(event), onBlur: (event) => this.onBlur(event), onMouseOver: (event) => this.onMouseOver(event), onMouseOut: (event) => this.onMouseOut(event) }, h("slot", null))));
    }
    get root() { return getElement(this); }
};
PixelButton.style = pixelButtonCss;

export { PixelButton as pixel_button };
