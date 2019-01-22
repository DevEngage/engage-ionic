import { Component, State, Element } from '@stencil/core';

@Component({
  tag: 'eon-engage-home',
  styleUrl: 'eon-engage-home.scss'
})
export class EonEngageHome {
  @Element() element: HTMLElement;
  private formElement: HTMLEonFormElement;

  @State() fields = {
    name: '',
    email: ''
  };


  componentDidLoad() {
    this.formElement = this.element.querySelector('.eng-form-example')
  }

  submitForm() {
    this.formElement.submit();
  }

  checkBind() {
    alert(this.fields.name);
  }

  testAdapter() {
    return {
      path: 'collection',
      save: (doc) => console.log(doc)
    }
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>

        <ion-button href="/bootstrap" expand="block">
          Bootstrap page
        </ion-button>

        <eon-flip>
          <ion-card class="ion-text-center">
            <p>James Rocks</p>
          </ion-card>
          <ion-card class="ion-text-center">
            <h2>Just Kidding</h2>
            <p>Mike Rocks</p>
          </ion-card>
        </eon-flip>

        <br />

        <h3>Input</h3>
        <eon-input placeholder="Hello" />
        <eon-input label="Test" labelPosition="floating" name="name" bind={this.fields} />
        <eon-input label="Test" labelPosition="floating" textarea={true} />
        <ion-button onClick={() => this.checkBind()}>Check Binding</ion-button>

        <h3>Form</h3>
        <eon-form class="eng-form-example" value={{ test: 'name', pass: 'Bob' }} adapter={this.testAdapter()}>
          <input type="text" name="name" value="hello" />
          <eon-input label="Email" name="email" />
          <eon-upload></eon-upload>
        </eon-form>
        <ion-button onClick={() => this.submitForm()}>Submit</ion-button>

        <h3>Loading</h3>
        <eon-loading />
        <eon-spinner />
        <eon-progress current={50} />
        <eon-button loading={true}>Testing</eon-button>
        <eon-button loading={true} loadingType="spinner">Testing</eon-button>

        {/* <h3>Privacy Policy</h3> */}
        {/* <eon-privacy-policy></eon-privacy-policy> */}
      
        <br/>
        <br/>
        <h3>Collapse</h3>
        <eon-collapse>
          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
              <ion-card-title>Card Title</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              Keep close to Nature's heart... and break clear away, once in awhile,
              and climb a mountain or spend a week in the woods. Wash your spirit clean.
            </ion-card-content>
          </ion-card>
          
          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
              <ion-card-title>Card Title</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              Keep close to Nature's heart... and break clear away, once in awhile,
              and climb a mountain or spend a week in the woods. Wash your spirit clean.
            </ion-card-content>
          </ion-card>

          {/* <ion-list>
            <ion- item>
              <ion-icon name="wifi" slot="start"></ion-icon>
              <ion-label>Card Link Item 1 .activated</ion-label>
            </ion->
          </ion-list> */}
        </eon-collapse>

      </ion-content>
    ];
  }
}
