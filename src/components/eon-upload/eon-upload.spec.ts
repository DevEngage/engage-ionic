import { render } from '@stencil/core/testing';
import { EonUpload } from './eon-upload';

describe('app', () => {
  it('should build', () => {
    expect(new EonUpload()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [EonUpload],
        html: '<eon-upload></eon-upload>'
      });
    });
  });
});
