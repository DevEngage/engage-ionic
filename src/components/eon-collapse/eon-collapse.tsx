import { Component, Prop, Event, Element, EventEmitter, Method, State, Watch } from '@stencil/core';

@Component({
  tag: 'eon-collapse',
  styleUrl: 'eon-collapse.scss'
})
export class EonCollapse {
  @Element() element: HTMLElement;
  @Event() eonShow: EventEmitter;
  @Event() eonHide: EventEmitter;
  @Prop() selected = 0;
  @Prop() accordion = false;
  @Prop() selector: string = 'eon-item, ion-item, ion-card';
  @Prop() selectorHeader: string = 'eon-card-header, ion-card-header';
  @Prop() selectorContent: string = 'eon-card-content, ion-card-content';
  @State() _selected = 0;
  private headerElements: any[];
  private contentElements: any[];
  private elementEventListeners: any[] = [];

  getMainElments(): any {
    return this.element.querySelectorAll(this.selector);
  }  

  getHeaderElments(): any {
    return this.element.querySelectorAll(this.selectorHeader);
  }  

  getContentElments(): any {
    return this.element.querySelectorAll(this.selectorContent);
  }  

  componentDidLoad() {
    this.headerElements = this.getHeaderElments();
    this.contentElements = this.getContentElments();
    this.initToggle();
    this.watchSelected();
  }

  initToggle() {
    this.elementEventListeners = [];
    this.headerElements.forEach((element, i) => {
        const listener = () => this.toggle(i);
        this.elementEventListeners[i] = listener
        element.addEventListener('click', listener);
    });
  }

  @Watch('selected')
  watchSelected() {
    this.show(this.selected);
  }

  @Method('show')
  show(itemPosition: number) {
    this._selected = itemPosition;
    if (this.accordion) {
        this.hideAll();
    }
    console.log(this.contentElements)
    if (this.contentElements[itemPosition]) {
        this.contentElements[itemPosition].classList.remove('eon-collapse-content');
    }
  }

  @Method('hide')
  hide(itemPosition: number) {
    if (itemPosition === this._selected) {
        this._selected = -1;
    }
    if (this.contentElements[itemPosition] && !this.contentElements[itemPosition].classList.contains('eon-collapse-content')) {
        this.contentElements[itemPosition].classList.add('eon-collapse-content');
    }
  }

  @Method('hideAll')
  hideAll() {
      this.contentElements.forEach((_, i) => {
          this.hide(i);
      });;
  }
  
  @Method('toggle')
  toggle(itemPosition: number) {
    if (itemPosition === this._selected) {
        this.hide(itemPosition);
    } else {
        this.show(itemPosition);
    }
  }

  componentDidUnload() {
    this.headerElements.forEach((element, i) => {
        element.removeEventListener('click', this.elementEventListeners[i]);
    });
  }
  
}
