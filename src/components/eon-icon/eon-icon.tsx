import {Component, Prop, Element} from '@stencil/core';


@Component({
  tag: 'eon-icon',
  styleUrl: 'eon-icon.scss'
})
export class EonIcon {

  @Prop({ context: 'config' }) config: any;
  @Element() el: HTMLElement;
  @Prop() name: string;
  @Prop() size: string; // {xs: 10px, sm: 16px, md: 28px, lg: 36px, xl: 48px}
  @Prop() color: string;
  @Prop() src: string; // SVG Support
  /*
  * Font Awesome
  * fas = solid
  * far = regular
  * fal = light
  * fab = brand
  * */
  @Prop() fa: 'fas' | 'far' | 'fal' | 'fab' | '' = 'far';
  @Prop() brand: 'fa' | 'nf' | 'ion' | '' = 'ion';
  @Prop() type: 'static' | 'animated' | 'hover' = 'static';
  @Prop() animation: 'rock' | 'ring' | 'vertical' | 'horizontal' | 'flash' | 'bounce' | 'spin' | 'float' | 'pulse' | 'shake' | 'tada' | 'passing' | 'burst' = 'spin';
  @Prop() transition: 'none' | 'bounceIn' | 'bounceInDown' | 'bounceInLeft' | 'bounceInRight' |'bounceInUp' | 'fadeIn' | 'fadeInDown' | 'fadeInDownBig' | 'fadeInLeft' | 'fadeInLeftBig' | 'fadeInRight' | 'fadeInRightBig' | 'fadeInUp' | 'fadeInUpBig' | 'flipInX' | 'flipInY' | 'lightSpeedIn' | 'rotateIn' | 'rotateInDownLeft' | 'rotateInDownRight' | 'rotateInUpLeft' | 'rotateInUpRight' | 'rollIn' | 'zoomIn' | 'zoomInDown' | 'zoomInLeft' | 'zoomInRight' | 'zoomInUp' | 'slideInDown' | 'slideInLeft' | 'slideInRight' | 'slideInUp' = 'none';
  @Prop() transitionDelay: string;
  @Prop() transitionPosition: 'top' | 'middle' | 'bottom' = 'middle';
  @Prop() rotate: number = 0;

  element;
  content;
  scrollAmount;
  positionTop;
  positionLeft;
  documentScrollHandler;
  rotateCss

  componentDidLoad(): void {
    if (this.brand === 'ion') this.element = this.el.querySelector('ion-icon');
      else this.element = this.el.querySelector('i');

    if (this.type === 'animated') {
      this.element.classList.add('animated');
      this.element.classList.add('eon-' + this.animation);
    }
    else if (this.type === 'hover') {
      this.element.classList.add('animated-hover');
      this.element.classList.add('eon-' + this.animation);
    }
    if (this.transition !== 'none') {
      setTimeout(() => {
        this.addTransition()
      }, 200)
    }

  }

  addTransition() {
    this.getPosition(this.element);
    this.addScrollListener();
  }

  addScrollListener() {
    let offset;
    if (this.transitionPosition === 'top') offset = 4;
    else if (this.transitionPosition === 'middle') offset = 2;
    else if (this.transitionPosition === 'bottom') offset = 1.1;
    const transitionStartPoint = this.positionTop - window.innerHeight/offset;
    this.documentScrollHandler = (ev)=> {
      this.checkScroll(transitionStartPoint, ev);
    };

    const content = document.querySelector('ion-content');
    content.scrollEvents = true;
    content.addEventListener('ionScroll', this.documentScrollHandler);

    document.addEventListener("scroll", this.documentScrollHandler);
  }

  checkScroll(transitionStartPoint, ev?) {
    const scrollAmt = window.pageYOffset || document.documentElement.scrollTop || ev.detail.currentY;
    if(scrollAmt > transitionStartPoint) {
      setTimeout(() => {
        this.element.classList.remove('eon-hide');
        this.element.classList.add('animated');
        this.element.classList.add(this.transition);
        this.removeScrollListener();
      }, parseInt(this.transitionDelay));
    }
  }

  removeScrollListener() {
    if (this.documentScrollHandler) {
      document.removeEventListener('scroll', this.documentScrollHandler);
      this.documentScrollHandler = null;
    }
  }

  getPosition(el) {

    let top = 0;
    let left = 0;

    do {
      top += el.offsetTop;
      left += el.offsetLeft;
      el = el.offsetParent;
    } while (el);

    this.positionTop = top;
    this.positionLeft = left;
  }

  getIconStyle() {
    if (this.rotate) this.rotateCss = `rotate(${this.rotate}deg)`;
    console.log('this.rotateCss', this.rotateCss);
    return {fontSize: this.size, color: this.color, transform: this.rotateCss};
  }

  getIconClass() {
    if (this.transition !== 'none') return 'eon-hide';
    else return '';
  }

  hostData() {
    return {
      theme: 'eon-icon'
    }
  }

  renderFaIcon() {
    return (
      <i class={`${this.fa} fa-${this.name} ${this.getIconClass()}`} style={this.getIconStyle()}/>
    );
  }

  renderIonIcon() {
    return (
    <ion-icon name={this.name} class={`${this.getIconClass()}`} style={this.getIconStyle()}></ion-icon>
    );
    {/*<i class={`icon ion-${this.name} ${this.getIconClass()}`} style={this.getIconStyle()} />*/}
  }

  renderNfIcon() {
    return (
      <i class={`nf nf-${this.name} ${this.getIconClass()}`} style={this.getIconStyle()} />
    );
  }

  renderPass() {
    return (
      <i class={`${this.name} ${this.getIconClass()}`} style={this.getIconStyle()} />
    );
  }

  render() {
    let brand = this.brand;
    if (
      !this.name ||
      this.name.search('fas ')  > -1 ||
      this.name.search('far ')  > -1 ||
      this.name.search('fal ')  > -1 ||
      this.name.search('fab ')  > -1 ||
      this.name.search('nf ')  > -1 ||
      this.name.search('icon ') > -1
    ) {
      brand = '';
    }
    switch(brand) {
      case 'fa':
        return this.renderFaIcon();
      case 'ion':
        return this.renderIonIcon();
      case 'nf':
        return this.renderNfIcon();
      default:
        return this.renderPass();
    }
  }

  componentDidUnload(): void {
    if (this.documentScrollHandler) {
      document.removeEventListener('scroll', this.documentScrollHandler);
    }
  }
}
