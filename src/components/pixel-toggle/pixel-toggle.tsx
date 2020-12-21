import { Component, Element, Host, h, Prop, State } from '@stencil/core';
import { KeyboardCode } from '../../helpers/keyboard';

@Component({
  tag: 'pixel-toggle',
  styleUrl: 'pixel-toggle.scss',
  shadow: false
})
export class PixelToggle {
  @Element() root: HTMLElement;
  // Props
  @Prop() autofocus = false;
  @Prop() disabled = false;
  @Prop({ reflect: true }) checked: boolean;
  @Prop() primary = false;
  @Prop({ reflect: true }) secondary = false;
  @Prop() accent = false;
  @Prop() color: string;
  @Prop() backgroundColor: string;
  @Prop() borderColor1: string;
  @Prop() borderColor2: string;
  // State
  @State() hasTriggeredOnce: boolean = false;
  // Computed
  get computedStyle () {
    return {
      ...(this.color && { '--pixel-toggle-color': this.color }),
      ...(this.backgroundColor && { '--pixel-toggle-background-color': this.backgroundColor }),
      ...(this.borderColor1 && { '--pixel-toggle-border-color-1': this.borderColor1 }),
      ...(this.borderColor2 && { '--pixel-toggle-border-color-2': this.borderColor2 })
    };
  }
  // Handlers
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
        this.hasTriggeredOnce = false;
        break;
    }
  }
  onClick () {
    this.checked = !this.checked;
    this.root.dispatchEvent(new CustomEvent('change', { detail: this.checked }));
  }
  // Lifecycle
  componentWillRender () {
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
        onClick={() => this.onClick()}
        onKeyPress={(event: KeyboardEvent) => this.onKeyPress(event)}
        onKeyUp={(event: KeyboardEvent) => this.onKeyUp(event)}
        style={this.computedStyle}>
        <div class="pixel-active-wrapper"/>
        <div class="pixel-wrapper"/>
        <div class="slider">
          <div class={{ 'slider-switch': true, 'active': this.checked }}>
            <div class="slider-switch-wrapper"/>
          </div>
        </div>
      </Host>
    );
  }
}
