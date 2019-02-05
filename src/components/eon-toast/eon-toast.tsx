import { Component, Prop, Element, Watch, State } from '@stencil/core';

//
// TODO: get show on hover working properly
//

@Component({
  tag: 'eon-toast',
  styleUrl: 'eon-toast.scss',
  host: {
    theme: 'eon-toast'
  }
})
export class EonToast {

  @Prop({ context: 'config' }) config: any;
  @Element() el: HTMLElement;
  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: HTMLIonToastControllerElement;
  @Prop() animated: boolean;
  @Prop() closeButtonText: string;
  @Prop() color: string;
  @Prop() cssClass: string = '';
  @Prop() duration: number;
  @Prop() autoProgress: boolean = false;
  @Prop() enterAnimation: any;
  @Prop() keyboardClose: boolean;
  @Prop() leaveAnimation: any;
  @Prop() message: string;
  @Prop() mode: 'ios' | 'md';
  @Prop() position: 'bottom' | 'middle' | 'top';
  @Prop() showCloseButton: boolean;
  @Prop() translucent: boolean;

  @Prop() icon: string;
  @Prop() iconSize: string;

  @Prop() loading: boolean;
  @Prop() loadingCurrent;
  @Prop() loadingColor;
  @Prop() loadingMin = 0;
  @Prop() loadingMax = 100;
  @Prop() loadingType: 'bar' | 'spinner' | 'full' | 'center' = 'bar';

  @State() _loading: boolean = false;
  @State() _loadingCurrent;


  @Prop() background: string = '#36454f';

  body: HTMLElement = document.body;

  element;
  toast;
  toastElement;

  componentWillLoad() {
    this.watchLoading();
    this.watchLoadingCurrent();
  }

  componentDidLoad(): void {
    this.addEventListener();
  }

  @Watch('loadingCurrent')
  watchLoadingCurrent() {
    this._loadingCurrent = this.loadingCurrent;
  }

  @Watch('loading')
  watchLoading() {
    this._loading = this.loading;
  }

  // startLoadingInterval() {
  //   this._loadingCurrent = 0;
  //   const loadingInterval = setInterval(() => {
  //     this._loadingCurrent = this._loadingCurrent + 100;
  //     console.log('this._loadingCurrent', this._loadingCurrent);
  //     if (this._loadingCurrent >= this.duration) clearInterval(loadingInterval);
  //   }, 100)
  // }

  addEventListener() {
    this.element = this.el;
    this.element.addEventListener('click', () => this.showToast());
  }

  async modifyToast() {
    this.toastElement = this.body.getElementsByTagName('ion-toast')[0].shadowRoot.querySelector('.toast-message');
    // console.log('this.toastElement', this.toastElement);

    if (this.loading) await this.addLoading();
    if (this.icon) await this.addIcon();

    const ionToast:any = this.body.getElementsByTagName('ion-toast')[0];
    // console.log('ionToast', ionToast);
    if (this.loadingType == 'bar') {
      setTimeout(() => ionToast.classList.remove('hide-eon-toast'), 50)
    } else ionToast.classList.remove('hide-eon-toast');

  }

  addLoading() {
    console.log('this.autoProgress', this.autoProgress);
    let loadingPosition = 'beforebegin';
    let loadingElement = this.toastElement;
    let style = 'margin-left: 15px';
    if (this.loadingType == 'bar') {
      loadingPosition = 'afterend';
      style = '';
      loadingElement = this.body.getElementsByTagName('ion-toast')[0].shadowRoot.querySelector('.toast-container');
    };
      const loadingHtml = `<eon-loading
        class='button-loading-${this.loadingType}'
        style=${style}
        type=${this.loadingType === 'bar' ? 'bar' : 'spinner'}
        frequency=${this.duration > -1 ?  'determinate' : 'indeterminate'}
        current=${this.loadingMin}
        size="xs"
        duration=${this.duration * .96 - 200}
        autoProgress=${this.autoProgress}
        min=${this.loadingMin}
        max=${this.duration * .96 - 200}
      />`;
        loadingElement.insertAdjacentHTML(loadingPosition, loadingHtml);
        if (this.loadingType == 'bar') {
          setTimeout(() => {
            const progressElement: any = this.body.getElementsByTagName('ion-toast')[0].shadowRoot.querySelector('.progress-md');
            progressElement.style.margin = '0px';
          }, 50);
        };
        return
  }

  addIcon() {
    const iconHtml = `<ion-icon name=${this.icon} style="padding-left: 10px; margin-right: -5px; font-size: ${this.iconSize}"></ion-icon>`;
    return this.toastElement.insertAdjacentHTML('beforebegin', iconHtml);
  }

  async showToast() {
    if (this.toastCtrl) {
      this.element.style.setProperty('pointer-events', 'none');
      await this.toastCtrl.componentOnReady();
      this.toast = await this.toastCtrl.create({
        animated: this.animated,
        closeButtonText: this.closeButtonText,
        color: this.color,
        cssClass: `hide-eon-toast ${this.cssClass}`,
        duration: this.duration,
        enterAnimation: this.enterAnimation,
        keyboardClose: this.keyboardClose,
        leaveAnimation: this.leaveAnimation,
        message: this.message,
        mode: this.mode,
        position: this.position,
        showCloseButton: this.showCloseButton,
        translucent: this.translucent,
      });
      await this.toast.present();
      // if (this.loading && this.loadingType == 'bar' && this.duration) this.startLoadingInterval();
      await this.modifyToast();

      return;
    }
  }




  render() {
  }

  componentDidUnload(): void {
  }
}
