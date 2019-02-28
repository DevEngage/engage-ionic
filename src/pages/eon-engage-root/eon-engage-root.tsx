import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'eon-engage-root',
  styleUrl: 'eon-engage-root.scss'
})
export class EonEngageRoot {

  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: HTMLIonToastControllerElement;

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="eon-engage-home" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
