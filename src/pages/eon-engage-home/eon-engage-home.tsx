import {Component, State, Element, Prop} from '@stencil/core';
import {slideEnterAnimation} from "../../animations/slide.enter";
import {slideLeaveAnimation} from "../../animations/slide.leave";

@Component({
  tag: 'eon-engage-home',
  styleUrl: 'eon-engage-home.scss'
})
export class EonEngageHome {
  @Element() element: HTMLElement;
  private formElement: HTMLEonFormElement;
  @State() isModalVisible = false;
  @State() modalPosition: any = 'top';

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


  @Prop({
    connect: 'ion-modal-controller'
  })
  private modalCtrl: HTMLIonModalControllerElement;

  async launchModal() {
    const modal = await this.modalCtrl.create({
      component: 'eon-privacy-policy',
      enterAnimation: (AnimationC, baseEl, from) => slideEnterAnimation(AnimationC, baseEl, from),
      leaveAnimation: (AnimationC, baseEl, from) =>  slideLeaveAnimation(AnimationC, baseEl, from)
    });
    modal.present();
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

        <div style={{"text-align": "center"}}>
          <eon-icon name="airplane" size="28px" animation="tada" type="animated" color="green"></eon-icon>
          <eon-icon name="airplane" size="28px" rotate={45} color="blue"></eon-icon>
          <eon-icon name="airplane" size="28px" transition="fadeInRight" color="red"></eon-icon>
        </div>

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

        <br/>
        <h3>Modals</h3>

        {/*<ion-list>*/}

          {/*<ion-item>*/}
            {/*<ion-label>Size</ion-label>*/}
            {/*<ion-select placeholder="Select One">*/}
              {/*<ion-select-option value="f">Female</ion-select-option>*/}
              {/*<ion-select-option value="m">Male</ion-select-option>*/}
            {/*</ion-select>*/}
          {/*</ion-item>*/}

        {/*</ion-list>*/}

        <eon-button onClick={() => {
          this.modalPosition = 'right';
          const modal:any = this.element.querySelector('#main-modal');
          modal.present();
        }}>
          Launch right Modal
        </eon-button>
        <eon-button onClick={() => {
          this.modalPosition = 'left';
          const modal:any = this.element.querySelector('#main-modal');
          modal.present();
        }}>
          Launch left Modal
        </eon-button>
        <eon-button onClick={() => {
          this.modalPosition = 'top';
          const modal:any = this.element.querySelector('#main-modal');
          modal.present();
        }}>
          Launch top Modal
        </eon-button>
        <eon-button onClick={() => {
          this.modalPosition = 'bottom';
          const modal:any = this.element.querySelector('#main-modal');
          modal.present();
        }}>
          Launch bottom Modal
        </eon-button>

        <eon-modal id="main-modal"
          isVisible={this.isModalVisible}
          component="eon-privacy-policy"
          position={this.modalPosition}
          type="fluid"
        ></eon-modal>

      </ion-content>
    ];
  }
}
