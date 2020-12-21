import { Component, Element, Host, h, Prop, State } from '@stencil/core';
import icons from '@pixel/icons';
import { grayscale, replaceAll, str2rgb } from '../../helpers/string';

@Component({
  tag: 'pixel-icon',
  styleUrl: 'pixel-icon.scss',
  shadow: false
})
export class PixelIcon {
  @Element() root: HTMLElement;
  // Props
  @Prop() svg: boolean;
  @Prop() grayscale: boolean;
  // State
  @State() icon: PixelIconList;
  @State() svgContent: string;
  // Methods
  computeIcon () {
    if (!this.icon) {
      this.icon = this.root.innerHTML as PixelIconList;
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
          } else if (this.grayscale) {
            const [ r, g, b ] = str2rgb(icons[this.icon].data.colors[i]);
            const grayColor = grayscale(r, g, b);
            svgContent = replaceAll(svgContent, icons[this.icon].data.colors[i], grayColor);
          }
        }
        this.svgContent = svgContent;
      }
    } else {
      this.svgContent = '';
    }
  }
  // Lifecycle
  componentWillLoad () {
    this.computeIcon();
  }
  render () {
    return (
      <Host innerHTML={this.svgContent}>
        {!this.svg && <span class={`pi pi-${this.icon}`}></span>}
      </Host>
    );
  }
}
