import { TestWindow } from '@stencil/core/testing';
import { EonForm } from './eon-form';

describe('eon-input', () => {
  it('should build', () => {
    expect(new EonForm()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLEonInputElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [EonForm],
        html: '<eon-form></eon-form>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
