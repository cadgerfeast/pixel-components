import { newSpecPage } from '@stencil/core/testing';
import { PixelIcon } from './pixel-icon';

describe('pixel-icon', () => {
  it('builds', async () => {
    const page = await newSpecPage({
      components: [PixelIcon],
      html: `<pixel-icon></pixel-icon>`,
    });
    expect(page.root).toBeDefined();
  });
});
