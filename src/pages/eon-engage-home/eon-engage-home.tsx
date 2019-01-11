import { Component } from '@stencil/core';

@Component({
  tag: 'eon-engage-home',
  styleUrl: 'eon-engage-home.css'
})
export class EonEngageHome {

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <p>
          Welcome to the PWA Toolkit. You can use this starter to build entire
          apps with web components using Stencil and ionic/core! Check out the
          README for everything that comes in this starter out of the box and
          check out our docs on <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <ion-button href="/profile/ionic" expand="block">Profile page</ion-button>

        <eon-flip>
          <ion-card class="ion-text-center"><p>James Rocks</p></ion-card>
          <ion-card class="ion-text-center"><h2>Just Kidding</h2><p>Mike Rocks</p></ion-card>
        </eon-flip>

        <br/>

        <eon-input></eon-input>

      </ion-content>
    ];
  }
}
