import { Component, EventEmitter, Method, Prop, State, Watch, Element, Event } from '@stencil/core';
import _ from 'lodash';
/*
 * TODO:
 *  [ ] Add error text below
 *  [ ] large and small sizes
 *  [ ] Icon left and right side
 *  [ ] Auto sizing
 *  [ ] Clear icon on left (for search and select)
 *  [ ] Help Text
 * */
@Component({
  tag: 'eon-checkbox',
  styleUrl: 'eon-checkbox.scss'
})
export class EonCheckbox {
  @Element() element: HTMLElement;
  @Prop() color: string | undefined;
  @Prop() disabled: boolean;
  @Prop() name: string;
  @Prop() type: 'checkbox' | 'radio' | 'toggle' = 'checkbox';
  @Prop() value: null | string | undefined | number;
  @Prop() checked: boolean;
  @Prop() indeterminate: boolean;
  @Prop() mode: 'ios' | 'md';
  /* eon specific */
  @Prop() bind: any;
  @Prop() bindSelector = '[eon-bind]';
  @Prop() errorSelector = '[eon-error]';
  @Prop() errorMsg: string = '';
  @Prop() successMsg: string = '';
  @Event() eonBlur: EventEmitter;
  @Event() eonFocus: EventEmitter;
  @Event() eonSelect: EventEmitter;
  @Event() eonChange: EventEmitter;
  @State() private _value: any;
  @State() private _checked: any;
  /* item based input */
  @Prop() label: string = '';
  @Prop() labelPosition: 'floating' | 'fixed' | 'stacked' | undefined;
  @Prop() labelColor: string | undefined;
  @Prop() labelMode: 'ios' | 'md';
  /* Radio */
  @Prop() radioList = [];
  /* Item */
  @Prop() itemButton: boolean;
  @Prop() itemColor: string | undefined;
  @Prop() itemDetail: boolean | undefined;
  @Prop() itemDetailIcon: string;
  @Prop() itemDisabled: boolean;
  @Prop() itemHref: string | undefined;
  @Prop() itemLines: "full" | "inset" | "none" | undefined;
  @Prop() itemMode: "ios" | "md";
  @Prop() itemRouterDirection: "back" | "forward" | "root";
  @Prop() itemType: "button" | "reset" | "submit";
  @Prop() autoSize: boolean = false;

  componentDidLoad() {
    this.watchTrueValue();
  }

  @Method('setValue')
  setValue(value: any = '') {
    if (_.isBoolean(value)) {
      this._checked = value;
    } else {
      this._value = value;
    }
  }

  @Method('getName')
  getName() {
    return this.name;
  }

  @Method('getValue')
  getValue() {
    if (this.type === 'checkbox' || this.type === 'toggle') {
      return this._checked;
    }
    return this._value;
  }

  @Method('clear')
  clear() {
    this._value = '';
    this._checked = false;
  }

  @Watch('value')
  watchTrueValue() {
    if (this.value !== undefined) {
      this._value = this.value;
    }
  }

  @Watch('_value')
  watchValue() {
    this.updateBinding(this._value);
    this.eonSelect.emit(this._value);
  }

  @Method('toggle')
  setToggle() {
    if (this._checked) {
      this.setUnchecked();
    } else {
      this.setUnchecked();
    }
  }

  @Method('check')
  setChecked() {
    this._checked = true;
    this.eonChange.emit(this._checked);
  }

  @Method('uncheck')
  setUnchecked() {
    this._checked = false;
  }

  @Method('getChecked')
  getChecked() {
    return this._checked;
  }

  updateBinding(value) {
    if (this.bind && this.name) {
      this.bind[this.name] = value;
      this.bind = { ...this.bind };
    }
  }

  updateValue(event) {
    if (event && event.detail && event.detail.value && !_.isEmpty(event.detail.value)) {
      const changed = this._value !== event.detail.value;
      this._value = event.detail.value;
      if (changed) {
        this.eonSelect.emit(this._value);
      }
    } else {
      this._value = '';
      this.eonSelect.emit(this._value);
    }
  }

  updateChecked(event) {
    if (event && event.detail && event.detail.value && !_.isEmpty(event.detail.value)) {
      const changed = this._checked !== event.detail.value;
      this._checked = event.detail.value;
      if (changed) {
        this.eonChange.emit(this._checked);
      }
    } else {
      this._checked = false;
      this.eonChange.emit(this._checked);
    }
  }

  // getValidColor(focused = false) {
  //   switch (this.validate()) {
  //     case true:
  //       return `var(--success)`;
  //     case false:
  //       return `var(--danger)`;
  //     default:
  //       if (focused) {
  //         return `var(--${this.context})`;
  //       }
  //       return this.defaultLabelStyle.bottomColor;
  //   }
  // }

  // getMessage() {
  //   if (_.isEmpty(this._value) && !this.manualMsg) return null;
  //   if (!this.validate() && this.errorMsg) {
  //     return <div class="text-danger">{this.errorMsg}</div>;
  //   } else if (this.successMsg) {
  //     return <div class="text-success">{this.successMsg}</div>;
  //   }
  // }

  renderItem() {
    return (
      <ion-item
        button={this.itemButton}
        color={this.itemColor || this.color}
        detail={this.itemDetail}
        detailIcon={this.itemDetailIcon}
        disabled={this.itemDisabled}
        href={this.itemHref}
        lines={this.itemLines}
        mode={this.itemMode || this.mode}
        routerDirection={this.itemRouterDirection}
        type={this.itemType}
      >
        <ion-label
          position={this.labelPosition}
          mode={this.labelMode || this.mode}
          color={this.labelColor || this.color}
        >
          {this.label}
        </ion-label>
        {this.renderType()}
      </ion-item>
    );
  }

  renderRadio() {
    return (
      <ion-radio
        color={this.color}
        disabled={this.disabled}
        mode={this.mode}
        name={this.name}
        value={this._value}
        onIonBlur={(event) => this.eonBlur.emit(event.detail)}
        onIonFocus={(event) => this.eonFocus.emit(event.detail)}
        onIonSelect={(event) => this.updateValue(event)}
      > <slot /> </ion-radio>
    );

  }

  renderCheckbox() {
    return (
      <ion-checkbox
        color={this.color}
        disabled={this.disabled}
        name={this.name}
        mode={this.mode}
        value={this._value}
        checked={this._checked}
        onIonBlur={(event) => this.eonBlur.emit(event.detail)}
        onIonChange={(event) => this.updateChecked(event)}
        onIonFocus={(event) => this.eonFocus.emit(event.detail)}
      > <slot /> </ion-checkbox>
    );
  }

  renderToggle() {
    return (
      <ion-toggle
        color={this.color}
        disabled={this.disabled}
        name={this.name}
        mode={this.mode}
        value={this._value}
        checked={this._checked}
        onIonBlur={(event) => this.eonBlur.emit(event.detail)}
        onIonChange={(event) => this.updateChecked(event)}
        onIonFocus={(event) => this.eonFocus.emit(event.detail)}
      > <slot /> </ion-toggle>
    );
  }

  renderType() {
    if (this.type === 'radio') {
      return this.renderRadio();
    } else if (this.type === 'toggle') {
      return this.renderToggle();
    }
    return this.renderCheckbox();
  }

  render() {
    if (this.label) {
      return this.renderItem();
    }
    return this.renderType();
  }
}
