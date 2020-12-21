import { Component, Element, Host, h, Prop, State, Listen } from '@stencil/core';
import { Alignment, Placement, Position, Style } from '../../helpers/style';

@Component({
  tag: 'pixel-tooltip',
  styleUrl: 'pixel-tooltip.scss',
  shadow: false
})
export class PixelTooltip {
  @Element() root: HTMLElement;
  // Props
  @Prop() for: HTMLElement|string;
  @Prop({ reflect: true }) placement: Placement = Placement.BOTTOM;
  @Prop() alignX: Alignment;
  @Prop() alignY: Alignment;
  @Prop() offsetX: number|string = '0';
  @Prop() offsetY: number|string = '0';
  @Prop() offsetZ: string = '';
  @Prop() color: string;
  @Prop() backgroundColor: string;
  @Prop() borderColor: string;
  // State
  @State() parent: Element;
  @State() active: boolean = false;
  @State() update: number = 0;
  // Events
  @Listen('scroll', { target: 'window', capture: true })
  handleScroll () {
    this.update++;
  }
  @Listen('resize', { target: 'window', capture: true })
  handleResize () {
    this.update++;
  }
  // Internal
  mouseEnterHandler: () => void;
  mouseLeaveHandler: (e: MouseEvent) => void;
  // Computed
  get _offsetX () {
    return (typeof this.offsetX === 'number') ? this.offsetX : +this.offsetX;
  }
  get _offsetY () {
    return (typeof this.offsetY === 'number') ? this.offsetY : +this.offsetY;
  }
  get computedStyle () {
    const p: Style = {};
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
    return {
      ...p,
      ...(this.color && { '--pixel-tooltip-color': this.color }),
      ...(this.backgroundColor && { '--pixel-tooltip-background-color': this.backgroundColor }),
      ...(this.borderColor && { '--pixel-tooltip-border-color': this.borderColor })
    };
  }
  // Handlers
  getFlexAlign (alignment: Alignment) {
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
  onMouseEnter () {
    this.active = true;
  }
  onMouseLeave (e: MouseEvent) {
    if (!this.root.contains(e.relatedTarget as Node)) {
      this.active = false;
    }
  }
  // Lifecycle
  componentWillRender () {
    if (this.for instanceof HTMLElement) {
      this.parent = this.for;
    } else if (typeof this.for === 'string') {
      this.parent = document.getElementById(this.for);
    } else {
      this.parent = this.root.previousElementSibling;
    }
    if (this.parent) {
      this.parent?.removeEventListener('mouseenter', this.mouseEnterHandler);
      this.parent.removeEventListener('mouseleave', this.mouseLeaveHandler);
      this.mouseEnterHandler = () => {
        this.onMouseEnter();
      };
      this.mouseLeaveHandler = (e: MouseEvent) => {
        this.onMouseLeave(e);
      };
      this.parent.addEventListener('mouseenter', this.mouseEnterHandler);
      this.parent.addEventListener('mouseleave', this.mouseLeaveHandler);
    }
  }
  disconnectedCallback () {
    if (this.parent) {
      this.parent.removeEventListener('mouseenter', this.mouseEnterHandler);
      this.parent.removeEventListener('mouseleave', this.mouseLeaveHandler);
    }
  }
  render () {
    return (
      <Host
        class={{
          'active': this.active
        }}
        onMouseLeave={(e: MouseEvent) => { this.onMouseLeave(e) }}
        style={this.computedStyle}>
          <div class="tooltip-wrapper">
            <div class="tooltip-content">
              <slot/>
            </div>
          </div>
      </Host>
    );
  }
}
