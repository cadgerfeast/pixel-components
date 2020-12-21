import { Component, Element, Host, h, Prop, State } from '@stencil/core';
import icons from '@pixel/icons';
import { grayscale, replaceAll, str2rgb } from '../../helpers/string';
export class PixelIcon {
    // Methods
    computeIcon() {
        if (!this.icon) {
            this.icon = this.root.innerHTML;
        }
        if (this.svg) {
            if (icons[this.icon]) {
                let svgContent = icons[this.icon].data.svg;
                // Replace width
                const attrs = 'width=\"150\" height=\"150\"';
                svgContent = svgContent.replace(attrs, `width=\"1em\" height=\"1em\" viewBox=\"0 0 150 150\"`);
                // Replace colors
                for (let i = 0; i < icons[this.icon].data.colors.length; i++) {
                    const newColor = this.root.getAttribute(`color-${i + 1}`);
                    if (newColor) {
                        svgContent = replaceAll(svgContent, icons[this.icon].data.colors[i], newColor);
                    }
                    else if (this.grayscale) {
                        const [r, g, b] = str2rgb(icons[this.icon].data.colors[i]);
                        const grayColor = grayscale(r, g, b);
                        svgContent = replaceAll(svgContent, icons[this.icon].data.colors[i], grayColor);
                    }
                }
                this.svgContent = svgContent;
            }
        }
        else {
            this.svgContent = '';
        }
    }
    // Lifecycle
    componentWillLoad() {
        this.computeIcon();
    }
    render() {
        return (h(Host, { innerHTML: this.svgContent }, !this.svg && h("span", { class: `pi pi-${this.icon}` })));
    }
    static get is() { return "pixel-icon"; }
    static get originalStyleUrls() { return {
        "$": ["pixel-icon.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["pixel-icon.css"]
    }; }
    static get properties() { return {
        "svg": {
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
            "attribute": "svg",
            "reflect": false
        },
        "grayscale": {
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
            "attribute": "grayscale",
            "reflect": false
        }
    }; }
    static get states() { return {
        "icon": {},
        "svgContent": {}
    }; }
    static get elementRef() { return "root"; }
}
