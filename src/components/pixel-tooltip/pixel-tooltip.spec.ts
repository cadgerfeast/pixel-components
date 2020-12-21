import { newSpecPage } from '@stencil/core/testing';
import { PixelTooltip } from './pixel-tooltip';

describe('pixel-tooltip', () => {
  it('builds', async () => {
    const page = await newSpecPage({
      components: [PixelTooltip],
      html: `<pixel-tooltip></pixel-tooltip>`,
    });
    expect(page.root).toBeDefined();
  });
});
