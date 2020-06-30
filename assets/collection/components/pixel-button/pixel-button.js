import { Component, Element, Host, h, State, Prop } from '@stencil/core';
export class PixelButton {
    constructor() {
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
            }, style: this.computedStyle },
            h("div", { tabindex: "-1", class: "pixel-wrapper" }),
            h("button", { class: {
                    'icon': this.hasPixelIcon
                }, autoFocus: this.autofocus, tabIndex: (this.disabled) ? -1 : 0, onClick: (event) => this.onClick(event), onFocus: (event) => this.onFocus(event), onBlur: (event) => this.onBlur(event), onMouseOver: (event) => this.onMouseOver(event), onMouseOut: (event) => this.onMouseOut(event) },
                h("slot", null))));
    }
    static get is() { return "pixel-button"; }
    static get originalStyleUrls() { return {
        "$": ["pixel-button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["pixel-button.css"]
    }; }
    static get properties() { return {
        "autofocus": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "autofocus",
            "reflect": false,
            "defaultValue": "false"
        },
        "disabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        },
        "flat": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "flat",
            "reflect": false,
            "defaultValue": "false"
        },
        "raised": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "raised",
            "reflect": false,
            "defaultValue": "false"
        },
        "outlined": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "outlined",
            "reflect": false,
            "defaultValue": "false"
        },
        "theme": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "theme",
            "reflect": false
        },
        "primary": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "primary",
            "reflect": false,
            "defaultValue": "false"
        },
        "secondary": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "secondary",
            "reflect": false,
            "defaultValue": "false"
        },
        "accent": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "accent",
            "reflect": false,
            "defaultValue": "false"
        },
        "color": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "color",
            "reflect": false
        },
        "backgroundColor": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "background-color",
            "reflect": false
        },
        "borderColor": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "border-color",
            "reflect": false
        },
        "uppercase": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "uppercase",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "focused": {},
        "hovered": {}
    }; }
    static get elementRef() { return "root"; }
}
