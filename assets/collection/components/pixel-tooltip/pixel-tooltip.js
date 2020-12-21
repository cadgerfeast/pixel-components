import { Component, Element, Host, h, Prop, State, Listen } from '@stencil/core';
import { Alignment, Placement, Position } from '../../helpers/style';
export class PixelTooltip {
    constructor() {
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
        return (h(Host, { class: {
                'active': this.active
            }, onMouseLeave: (e) => { this.onMouseLeave(e); }, style: this.computedStyle },
            h("div", { class: "tooltip-wrapper" },
                h("div", { class: "tooltip-content" },
                    h("slot", null)))));
    }
    static get is() { return "pixel-tooltip"; }
    static get originalStyleUrls() { return {
        "$": ["pixel-tooltip.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["pixel-tooltip.css"]
    }; }
    static get properties() { return {
        "for": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "HTMLElement|string",
                "resolved": "HTMLElement | string",
                "references": {
                    "HTMLElement": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "for",
            "reflect": false
        },
        "placement": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "Placement",
                "resolved": "Placement.BOTTOM | Placement.LEFT | Placement.RIGHT | Placement.TOP",
                "references": {
                    "Placement": {
                        "location": "import",
                        "path": "../../helpers/style"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "placement",
            "reflect": true,
            "defaultValue": "Placement.BOTTOM"
        },
        "alignX": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "Alignment",
                "resolved": "Alignment.BOTTOM | Alignment.CENTER | Alignment.LEFT | Alignment.RIGHT | Alignment.TOP",
                "references": {
                    "Alignment": {
                        "location": "import",
                        "path": "../../helpers/style"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "align-x",
            "reflect": false
        },
        "alignY": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "Alignment",
                "resolved": "Alignment.BOTTOM | Alignment.CENTER | Alignment.LEFT | Alignment.RIGHT | Alignment.TOP",
                "references": {
                    "Alignment": {
                        "location": "import",
                        "path": "../../helpers/style"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "align-y",
            "reflect": false
        },
        "offsetX": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "number|string",
                "resolved": "number | string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "offset-x",
            "reflect": false,
            "defaultValue": "'0'"
        },
        "offsetY": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "number|string",
                "resolved": "number | string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "offset-y",
            "reflect": false,
            "defaultValue": "'0'"
        },
        "offsetZ": {
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
            "attribute": "offset-z",
            "reflect": false,
            "defaultValue": "''"
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
        "parent": {},
        "active": {},
        "update": {}
    }; }
    static get elementRef() { return "root"; }
    static get listeners() { return [{
            "name": "scroll",
            "method": "handleScroll",
            "target": "window",
            "capture": true,
            "passive": true
        }, {
            "name": "resize",
            "method": "handleResize",
            "target": "window",
            "capture": true,
            "passive": true
        }]; }
}
