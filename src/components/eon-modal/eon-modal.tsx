import {Component, Method, Prop, State, Element, Event, EventEmitter, Watch} from '@stencil/core';
import _ from 'lodash';
import {slideEnterAnimation} from "../../animations/slide.enter";
import {slideLeaveAnimation} from "../../animations/slide.leave";

// export interface EngIModalFooterButton {
//   name?: string;
//   closes?: boolean;
//   context?: string;
//   // icon?: string;
//   size?: 'xs' |  'sm' |  'md' |  'lg' | 'xl' | '';
//   action?(event?);
//   link?: string;
//   children?: EngIModalFooterButton[]
// }

/*
 * TODO:
 * [ ] Header Tabs
 * [ ] Add Icon Support to the header
 * [ ] Add Icon Support to the footer
 * [ ] Improve Media queries
 * */

@Component({
  tag: 'eon-modal',
  styleUrl: 'eon-modal.scss'
})
export class EonModal {
  get positionMap(): { l: string; r: string; t: string; b: string; c: string; tl: string; tr: string; bl: string; br: string } {
    return this._positionMap;
  }
  @Element() element: HTMLElement;

  @Prop({
    connect: 'ion-modal-controller'
  })
  private modalCtrl: HTMLIonModalControllerElement;
  @Prop({ context: 'config' }) config: any;
  @Prop() fit: boolean = false;
  // @Prop() allowOverflow: boolean = false;
  // @Prop() card: boolean = false;
  // @Prop() color: string = 'primary';
  @Prop() options: any;
  @Prop() size: 'tiny' | 'small' | 'medium' | 'large' | 'fluid' | 'full' | 's' | 'm' | 'l' | 'f' | 'xs' | 'sm' | 'md' | 'lg' | 'lg' = 'm';
  // @Prop() headerSize: 'tiny' | 'small' | 'medium' | 'large' = 'medium';
  @Prop() position:
    | 'left'
    | 'top'
    | 'right'
    | 'bottom'
    | 'center'
    | 'l'
    | 't'
    | 'r'
    | 'b'
    | 'c'
    | 'top left'
    | 'top right'
    | 'bottom left'
    | 'bottom right'
    | 'tl'
    | 'tr'
    | 'bl'
    | 'br' = 'center';
  @Prop() type: 'fluid' | 'frame' | 'side' | 'central' = 'central';
  @Prop() short: 'l' | 't' | 'r' | 'b' | 'tl' | 'tr' | 'bl' | 'br' | 'c';
  // @Prop() headerTitle: string = '';
  // @Prop() animation: string = 'slideIn';
  // @Prop() animationDuration: string = '500ms';
  // @Prop() animationDelay: string = '100ms';
  @State() _animation;
  @Prop() footerButtons: any[] = [
    // {
    //   name: 'Close',
    //   closes: true
    // }
  ];

  @Prop() isVisible = false;
  @State() _isVisible = false;

  /* ion props */
  @Prop() animated: boolean = true;
  @Prop() backdropDismiss: boolean = true;
  @Prop() component: Function | HTMLElement | null | string;
  @Prop() componentProps: undefined | { [key: string]: any; };
  @Prop() cssClass: string | string[] | undefined;
  @Prop() enterAnimation;
  @Prop() leaveAnimation;
  @Prop() keyboardClose: boolean;
  @Prop() mode: "ios" | "md";

  @Event() eonModalDidDismiss: EventEmitter;
  @Event() eonModalDidPresent: EventEmitter;
  @Event() eonModalWillDismiss: EventEmitter;
  @Event() eonModalWillPresent: EventEmitter;

  /* Private  */
  private modal;

  private _positionMap = {
    l: 'left',
    r: 'right',
    t: 'top',
    b: 'bottom',
    c: 'center',
    tl: 'top left',
    tr: 'top right',
    bl: 'bottom left',
    br: 'bottom right'
  };
  private sizeMap = { t: 'tiny', s: 'small', m: 'medium', l: 'large', f: 'fluid', xs: 'tiny', sm: 'small', md: 'medium', lg: 'large', xl: 'xl' };

  componentDidLoad() {
    this.watchIsVisible();
  }

  @Watch('isVisible')
  async watchIsVisible() {
    if (this.isVisible === this._isVisible) {
      return;
    }
    if (this.isVisible) {
      await this.present();
    } else {
      await this.dismiss();
    }
  }

  @Method('getModal')
  getModal() {
    return this.modal;
  }

  @Method('present')
  async present(component = this.component) {
    if (this.modal) {
      await this.dismiss();
    }
    if (!this.component) {
      throw new Error('Missing component');
    }
    console.log(this.getSizePos())
    this._isVisible = true;
    this.isVisible = true;
    const opts = { from: this.translateAnimationCss(this.position && this.position.length < 3 ? this.positionMap[this.position] : this.position) };
    const enterAnimation = (AnimationC, baseEl) => slideEnterAnimation(AnimationC, baseEl, opts);
    const leaveAnimation = (AnimationC, baseEl) => slideLeaveAnimation(AnimationC, baseEl, opts);
    this.modal = await this.modalCtrl.create({
      animated: this.animated,
      backdropDismiss: this.backdropDismiss,
      component: component,
      enterAnimation: this.enterAnimation || enterAnimation,
      leaveAnimation: this.leaveAnimation || leaveAnimation,
      componentProps: this.componentProps,
      cssClass: `${this.getSizePos()} ${this.cssClass || ''}`,
      keyboardClose: this.keyboardClose,
      mode: this.mode
    });
    await this.modal.present();
  }

  @Method('dismiss')
  async dismiss() {
    if (!this.modal) {
      return;
    }
    this._isVisible = false;
    this.isVisible = false;
    await this.modal.dismiss();
    this.modal = undefined;
  }

  translateAnimationCss(value) {
    switch (value) {
      case 'top':
        return 'top';
      case 'bottom':
        return 'bottom';
      case 'top left' || 'bottom left':
        return 'left';
      case 'top right' || 'bottom right':
        return 'right';
      case 'center':
        return 'bottom';
      default:
        return value;
    }
  }

  styleType() {
    return `eon-modal-${this.type}`;
  }

  @Method('toggle')
  toggle() {
    if (this.modal) {
      this.dismiss();
    } else {
      this.present();
    }
  }

  getSizePos() {
    let position = this.position;
    let size = this.size;
    if (this.position && this.position.length === 1) {
      position = this._positionMap[this.position];
    }
    if (this.size && this.size.length < 3) {
      size = this.sizeMap[this.size];
    }
    position = _.kebabCase(position);
    return `eon-modal-${this.type}-${size}-${position} ${this.fit ? 'eon-modal-vertical-fit' : ''}`;
  }

  animateCss() {
    return this._animation ? `animated ${this._animation}` : '';
  }

  // buildBodyStyle() {
  //   return {
  //     overflow: this.allowOverflow ? 'visible' : 'auto'
  //   };
  // }
}
