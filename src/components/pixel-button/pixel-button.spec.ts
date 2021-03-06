import { newSpecPage } from '@stencil/core/testing';
import { PixelButton } from './pixel-button';

describe('pixel-button', () => {
  it('builds', async () => {
    const page = await newSpecPage({
      components: [PixelButton],
      html: `<pixel-button></pixel-button>`,
    });
    expect(page.root).toBeDefined();
  });
});
