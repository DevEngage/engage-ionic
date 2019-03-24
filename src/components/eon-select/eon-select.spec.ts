import { TestWindow } from '@stencil/core/testing';
import { EonInput } from './eon-input';

describe('eon-input', () => {
  it('should build', () => {
    expect(new EonInput()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLEonInputElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [EonInput],
        html: '<eon-input></eon-input>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
