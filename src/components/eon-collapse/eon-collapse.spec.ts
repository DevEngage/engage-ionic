import { TestWindow } from '@stencil/core/testing';
import { EonCollapse } from './eon-collapse';

describe('eon-collapse', () => {
  it('should build', () => {
    expect(new EonCollapse()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLEonCollapseElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [EonCollapse],
        html: '<eon-collapse></eon-collapse>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
