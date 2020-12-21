import { Component, Element, Host, h, Prop, State } from '@stencil/core';
import { KeyboardCode } from '../../helpers/keyboard';
export class PixelToggle {
    constructor() {
        // Props
        this.autofocus = false;
        this.disabled = false;
        this.primary = false;
        this.secondary = false;
        this.accent = false;
        // State
        this.hasTriggeredOnce = false;
    }
    // Computed
    get computedStyle() {
        return Object.assign(Object.assign(Object.assign(Object.assign({}, (this.color && { '--pixel-toggle-color': this.color })), (this.backgroundColor && { '--pixel-toggle-background-color': this.backgroundColor })), (this.borderColor1 && { '--pixel-toggle-border-color-1': this.borderColor1 })), (this.borderColor2 && { '--pixel-toggle-border-color-2': this.borderColor2 }));
    }
    // Handlers
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
                this.hasTriggeredOnce = false;
                break;
        }
    }
    onClick() {
        this.checked = !this.checked;
        this.root.dispatchEvent(new CustomEvent('change', { detail: this.checked }));
    }
    // Lifecycle
    componentWillRender() {
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
        return (h(Host, { tabIndex: (this.disabled) ? -1 : 0, onClick: () => this.onClick(), onKeyPress: (event) => this.onKeyPress(event), onKeyUp: (event) => this.onKeyUp(event), style: this.computedStyle },
            h("div", { class: "pixel-active-wrapper" }),
            h("div", { class: "pixel-wrapper" }),
            h("div", { class: "slider" },
                h("div", { class: { 'slider-switch': true, 'active': this.checked } },
                    h("div", { class: "slider-switch-wrapper" })))));
    }
    static get is() { return "pixel-toggle"; }
    static get originalStyleUrls() { return {
        "$": ["pixel-toggle.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["pixel-toggle.css"]
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
        "checked": {
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
            "attribute": "checked",
            "reflect": true
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
        "borderColor1": {
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
            "attribute": "border-color-1",
            "reflect": false
        },
        "borderColor2": {
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
            "attribute": "border-color-2",
            "reflect": false
        }
    }; }
    static get states() { return {
        "hasTriggeredOnce": {}
    }; }
    static get elementRef() { return "root"; }
}
