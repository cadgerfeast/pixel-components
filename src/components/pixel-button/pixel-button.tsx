import { Component, Element, Host, h, Prop, State } from '@stencil/core';
import { KeyboardCode } from '../../helpers/keyboard';

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
  @Prop({ reflect: true }) raised = false;
  @Prop() outlined = false;
  @Prop() theme: string;
  @Prop() primary = false;
  @Prop({ reflect: true }) secondary = false;
  @Prop() accent = false;
  @Prop() color: string;
  @Prop() backgroundColor: string;
  @Prop() borderColor: string;
  // State
  @State() hasTriggeredOnce: boolean = false;
  @State() active: boolean = false;
  // Computed
  get hasPixelIcon () {
    const child = this.root.querySelector('pixel-icon');
    return child && child.tagName === 'PIXEL-ICON';
  }
  get computedStyle () {
    return {
      ...(this.color && { '--pixel-button-color': this.color }),
      ...(this.backgroundColor && { '--pixel-button-background-color': this.backgroundColor }),
      ...(this.borderColor && { '--pixel-button-border-color': this.borderColor })
    };
  }
  // Handlers
  onKeyDown (e: KeyboardEvent) {
    switch (e.code) {
      case KeyboardCode.SPACE:
      case KeyboardCode.ENTER:
        this.active = true;
        break;
    }
  }
  onKeyPress (e: KeyboardEvent) {
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
  onKeyUp (e: KeyboardEvent) {
    switch (e.code) {
      case KeyboardCode.SPACE:
      case KeyboardCode.ENTER:
        this.active = false;
        this.hasTriggeredOnce = false;
        break;
    }
  }
  // Lifecycle
  componentWillRender () {
    // Default Shape
    if (!this.flat && !this.raised && !this.outlined) {
      this.raised = true;
    }
    // Default Theme
    if (!this.primary && !this.secondary && !this.accent) {
      this.secondary = true;
    }
  }
  componentDidLoad () {
    if (this.autofocus) {
      this.root.focus();
    }
  }
  render () {
    return (
      <Host
        tabIndex={(this.disabled) ? -1 : 0}
        onKeyDown={(e: KeyboardEvent) => { this.onKeyDown(e) }}
        onKeypress={(e: KeyboardEvent) => { this.onKeyPress(e) }}
        onKeyUp={(e: KeyboardEvent) => { this.onKeyUp(e) }}
        class={{
          'active': this.active
        }}
        style={this.computedStyle}>
        <div class="pixel-wrapper"/>
        <div
          class={{
            'pixel-button': true,
            'icon': this.hasPixelIcon
          }}>
          <slot/>
        </div>
      </Host>
    );
  }
}
