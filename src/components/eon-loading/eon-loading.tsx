import { Component, Element, Event, EventEmitter, Method, Prop, State, Watch } from '@stencil/core';
import {Size} from "../../types/theme";


/*
* @Requires
*  - Progress Component
*  - Spinner Component
*  - Modal Component
* */

@Component({
  tag: 'eon-loading',
  styleUrl: 'eon-loading.scss',
})
export class EonLoading {

  @Element() element: HTMLElement;
  @Prop({
    connect: 'ion-loading-controller'
  })
  loadingController: any;
  @Prop({ context: 'config' }) config: any;
  @Prop() color: string = 'clear';
  @Prop() message: string = 'Loading...';
  @Prop() adapter: any;
  @Prop() type: 'spinner' | 'bar' = 'bar';
  @Prop() modal: boolean = false;
  @Prop() size: Size = 'md';
  @Prop() current: number = 0;
  @Prop() min: number = 0;
  @Prop() max: number = 100;
  @Prop() duration: number = 10000;
  @Prop() autoProgress: boolean = false;
  @Prop() mode: 'ios' | 'md';
  @Prop() modalOptions: any = {};
  @Prop() frequency: 'indeterminate' | 'determinate' | 'regular' | 'ion' | undefined = 'indeterminate';
  @Event({eventName: 'eonStart'}) onStart: EventEmitter;
  @Event({eventName: 'eonUpdate'}) onUpdate: EventEmitter;
  @Event({eventName: 'eonFinish'}) onFinish: EventEmitter;
  @State() isVisible: boolean = false;
  private loadingModal;

  componentDidLoad() {
    if (!this.modal) {
      this.isVisible = true;
    }
  }

  @Method('toggle')
  toggle() {
    this.isVisible = !this.isVisible;
  }

  @Method('show')
  show() {
    this.isVisible = true;
  }

  @Method('hide')
  hide() {
    this.isVisible = false;
  }

  @Watch('isVisible')
  watchIsVisible() {
    if (this.modal) {
      if (this.isVisible) {
        this.presentLoadingModal();
      } else {
        this.dismissLoadingModal();
      }
    }
  }

  async presentLoadingModal() {
    if (this.loadingModal) {
      await this.dismissLoadingModal();
    }
    this.loadingModal = await this.loadingController.create({
      duration: this.duration,
      message: this.message,
      mode: this.mode,
      ...this.modalOptions,
    });
    return await this.loadingModal.present();
  }

  async dismissLoadingModal() {
    await this.loadingModal.dismiss();
    this.loadingModal = undefined;
  }

  renderSpinner() {
    return (<eon-spinner color={this.color} size={this.size} type={this.frequency} />);
  }

  renderBar() {
    console.log('this.autoProgress', this.autoProgress);
    return (<eon-progress type={this.frequency} min={this.min} max={this.max} current={this.current} color={this.color} duration={this.duration} autoProgress={this.autoProgress}/>);
  }

  renderType() {
    if (!this.isVisible) return(null);
    switch(this.type) {
      case 'spinner':
        return this.renderSpinner();
      default:
        return this.renderBar();
    }
  }

  render() {
    switch(this.modal) {
      case true:
        this.loadingController();
        return null;
      default:
        return this.renderType();
    }
  }
}
