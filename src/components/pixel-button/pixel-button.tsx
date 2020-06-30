import { Component, Element, Host, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'pixel-button',
  styleUrl: 'pixel-button.scss',
  shadow: false
})
export class PixelButton {
  @Element() root: HTMLElement;
  // Props
  @Prop() autofocus = false;
  @Prop() disabled = false;
  @Prop() flat = false;
  @Prop() raised = false;
  @Prop() outlined = false;
  @Prop() theme: string;
  @Prop() primary = false;
  @Prop() secondary = false;
  @Prop() accent = false;
  @Prop() color: string;
  @Prop() backgroundColor: string;
  @Prop() borderColor: string;
  @Prop() uppercase = false;
  // States
  @State() focused = false;
  @State() hovered = false;
  // Computed
  get hasPixelIcon () {
    const child = this.root.querySelector('pixel-icon');
    return child && child.tagName === 'PIXEL-ICON';
  }
  get computedStyle () {
    return {
      ...(this.color && { '--pixel-button-color': this.color }),
      ...(this.backgroundColor && { '--pixel-button-background-color': this.backgroundColor }),
      ...(this.borderColor && { '--pixel-button-border-color': this.borderColor }),
      ...(this.computedTextTransform && { '--pixel-text-transform': this.computedTextTransform })
    };
  }
  get computedTextTransform () {
    return this.uppercase ? 'uppercase' : 'none';
  }
  // Handlers
  onClick (event: PixelMouseEvent) {
    event.pixelTarget = this.root;
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  onFocus (event: PixelFocusEvent) {
    event.pixelTarget = this.root;
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.focused = true;
    }
  }
  onBlur (event: PixelFocusEvent) {
    event.pixelTarget = this.root;
    this.focused = false;
  }
  onMouseOver (event: PixelMouseEvent) {
    event.pixelTarget = this.root;
    this.hovered = true;
  }
  onMouseOut (event: PixelMouseEvent) {
    event.pixelTarget = this.root;
    this.hovered = false;
  }
  // Lifecycle
  render () {
    return (
      <Host
        tabindex="-1"
        class={{
          'focused': this.focused,
          'hovered': this.hovered
        }}
        style={this.computedStyle}>
        <div tabindex="-1" class="pixel-wrapper"/>
        <button
          class={{
            'icon': this.hasPixelIcon
          }}
          autoFocus={this.autofocus}
          tabIndex={(this.disabled) ? -1 : 0}
          onClick={(event) => this.onClick(event as PixelMouseEvent)}
          onFocus={(event) => this.onFocus(event as PixelFocusEvent)}
          onBlur={(event) => this.onBlur(event as PixelFocusEvent)}
          onMouseOver={(event) => this.onMouseOver(event as PixelMouseEvent)}
          onMouseOut={(event) => this.onMouseOut(event as PixelMouseEvent)}
        >
          <slot/>
        </button>
      </Host>
    );
  }
}
