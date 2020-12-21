import { Component, Element, Host, h, Prop, State } from '@stencil/core';
import { KeyboardCode } from '../../helpers/keyboard';
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
        // State
        this.hasTriggeredOnce = false;
        this.active = false;
    }
    // Computed
    get hasPixelIcon() {
        const child = this.root.querySelector('pixel-icon');
        return child && child.tagName === 'PIXEL-ICON';
    }
    get computedStyle() {
        return Object.assign(Object.assign(Object.assign({}, (this.color && { '--pixel-button-color': this.color })), (this.backgroundColor && { '--pixel-button-background-color': this.backgroundColor })), (this.borderColor && { '--pixel-button-border-color': this.borderColor }));
    }
    // Handlers
    onKeyDown(e) {
        switch (e.code) {
            case KeyboardCode.SPACE:
            case KeyboardCode.ENTER:
                this.active = true;
                break;
        }
    }
    onKeyPress(e) {
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
    }
    onKeyUp(e) {
        switch (e.code) {
            case KeyboardCode.SPACE:
            case KeyboardCode.ENTER:
                this.active = false;
                this.hasTriggeredOnce = false;
                break;
        }
    }
    // Lifecycle
    componentWillRender() {
        // Default Shape
        if (!this.flat && !this.raised && !this.outlined) {
            this.raised = true;
        }
        // Default Theme
        if (!this.primary && !this.secondary && !this.accent) {
            this.secondary = true;
        }
    }
    componentDidLoad() {
        if (this.autofocus) {
            this.root.focus();
        }
    }
    render() {
        return (h(Host, { tabIndex: (this.disabled) ? -1 : 0, onKeyDown: (e) => { this.onKeyDown(e); }, onKeypress: (e) => { this.onKeyPress(e); }, onKeyUp: (e) => { this.onKeyUp(e); }, class: {
                'active': this.active
            }, style: this.computedStyle },
            h("div", { class: "pixel-wrapper" }),
            h("div", { class: {
                    'pixel-button': true,
                    'icon': this.hasPixelIcon
                } },
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
            "reflect": true,
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
            "reflect": true,
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
        }
    }; }
    static get states() { return {
        "hasTriggeredOnce": {},
        "active": {}
    }; }
    static get elementRef() { return "root"; }
}
