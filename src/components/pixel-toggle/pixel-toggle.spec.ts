import { newSpecPage } from '@stencil/core/testing';
import { PixelToggle } from './pixel-toggle';

describe('pixel-toggle', () => {
  it('builds', async () => {
    const page = await newSpecPage({
      components: [PixelToggle],
      html: `<pixel-toggle></pixel-toggle>`,
    });
    expect(page.root).toBeDefined();
  });
});
