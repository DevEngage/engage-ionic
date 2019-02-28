import {Component, Prop, Element} from '@stencil/core';

//
// TODO: get show on hover working properly
//

@Component({
  tag: 'eon-tooltip',
  styleUrl: 'eon-tooltip.scss'
})
export class EonTooltip {

  @Prop({ context: 'config' }) config: any;
  @Element() el: HTMLElement;
  @Prop({connect: 'ion-popover-controller'}) popoverCtrl: HTMLIonPopoverControllerElement;
  @Prop() text: string;
  @Prop() color: string = '#ffffff';
  @Prop() background: string = '#36454f';

  body: HTMLElement = document.body;

  element;
  popover;
  popoverComponent;

  componentDidLoad(): void {
    this.addEventListener();
    this.createPopoverComponent();
  }

  setStyles() {
    let root = document.documentElement;
    root.style.setProperty('--eon-tooltip-bgColor', this.background);
    root.style.setProperty('--eon-tooltip-color', this.color);
  }

  addEventListener() {
    this.element = this.el;
    this.element.addEventListener('click', (event) => this.showPopover(event));
    // this.element.addEventListener('mouseover', (event) => this.showPopover(event));
    // this.element.addEventListener('mouseout', () => this.hidePopover());
  }

  createPopoverComponent() {
    const text = this.text;
    const background = this.background;
    const color = this.color;
    this.popoverComponent = 'pop-comp' + Math.floor(Math.random() * 1000000) + 1;
    customElements.define(this.popoverComponent, class extends HTMLElement {
      connectedCallback() {
        this.innerHTML = `<div style="background: ${background}; color: ${color};" class="eon-tooltip-content"><p>${text}</p></div>`;
      }
    });
  }

  hidePopover() {
    this.popover.dismiss();
  }

  async showPopover(ev) {
    if (this.popoverCtrl) {
      this.element.style.setProperty('pointer-events', 'none');
      await this.popoverCtrl.componentOnReady();
      this.popover = await this.popoverCtrl.create({
        component: this.popoverComponent,
        event: ev,
        mode: 'ios',
        showBackdrop: false,
        cssClass: 'eon-tooltip-base',
      });
      return await this.popover.present();
    }
  }

  hostData() {
    return {
      theme: 'eon-tooltip'
    }
  }
}
