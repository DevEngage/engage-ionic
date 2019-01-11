import { Component, State } from '@stencil/core';

@Component({
  tag: 'eon-engage-bootstrap',
  styleUrl: 'eon-engage-bootstrap.scss'
})
export class EonEngageBootstrap {
  @State() fields = {
    test: ''
  };

  checkBind() {
    alert(this.fields.test);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>

        <div class="container">
          <h1 class="m-5">margin 5</h1>
        </div>

        <ion-button onClick={() => this.checkBind()}>Check Binding</ion-button>
      </ion-content>
    ];
  }
}
