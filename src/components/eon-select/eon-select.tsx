import { Component, EventEmitter, Method, Prop, State, Watch, Element, Event } from '@stencil/core';
import _ from 'lodash';

interface IEonSelectOption {
  disabled?: boolean;
  selected?: boolean;
  value?: any;
  title?: any;
}

/*
 * TODO:
 *  [ ] Add error text below input
 *  [ ] large and small sizes
 *  [ ] Icon left and right side
 *  [ ] Auto sizing
 *  [ ] Clear icon on left (for search and select)
 *  [ ] Auto grow on textarea
 *  [ ] Help Text
 *  [ ] More validation -password - number -url -tel
 *  [ ] Mask -tel -custom - date -time -color
 *  [ ] Add different component for -checkbox -radio -range -switch -file
 *  [ ] Reveal input on icon click
 *  [ ] Add validate via regex
 * */
@Component({
  tag: 'eon-select',
  styleUrl: 'eon-select.scss'
})
export class EonInput {
  @Element() element: HTMLElement;

  /* ion specific */
  @Prop() cancelText: string | undefined = 'Cancel';
  @Prop() compareWith: ((currentValue: any, compareValue: any) => boolean) | null | string | undefined;
  @Prop() disabled: boolean | undefined = false;
  @Prop() interface: 'action-sheet' | 'alert' | 'popover' = 'alert';
  @Prop() interfaceOptions: any = {};
  @Prop() mode: 'ios' | 'md';
  @Prop() multiple: boolean | undefined = false;
  @Prop() name: string | undefined;
  @Prop() okText: string | undefined = 'OK';
  @Prop() placeholder: null | string | undefined;
  @Prop() selectedText: null | string | undefined;
  @Prop() value: any;
  @Prop() color: string | undefined;

  /* eon specific */
  @Prop() bind: any;
  @Prop() bindSelector = '[eon-bind]';
  @Prop() errorSelector = '[eon-error]';
  // @Prop() validate: string;
  @Prop() errorMsg: string = '';
  @Prop() successMsg: string = '';
  @Event() eonBlur: EventEmitter;
  @Event() eonFocus: EventEmitter;
  @Event() eonCancel: EventEmitter;
  @Event() eonInputDidLoad: EventEmitter;
  @Event() eonInputDidUnload: EventEmitter;
  @Event() eonChange: EventEmitter;
  @State() private _value: any;
  @Prop() itemShow: boolean;

  /* ion select option */
  @Prop() options: IEonSelectOption[] | string[] = [];

  /* ion label */
  @Prop() label: string = '';
  @Prop() labelPosition: 'floating' | 'fixed' | 'stacked' | undefined;
  @Prop() labelColor: string | undefined;
  @Prop() labelMode: 'ios' | 'md';

  /* ion item */
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

  componentDidLoad() {
    this.watchTrueValue();
  }

  @Method('setValue')
  setValue(value = '') {
    this._value = value;
  }

  @Method('getName')
  getName() {
    return this.name;
  }

  @Method('getValue')
  getValue() {
    return this._value;
  }

  @Method('clear')
  clear() {
    this._value = '';
  }

  @Method('open')
  open(ev?: UIEvent | undefined): Promise<HTMLIonActionSheetElement | HTMLIonAlertElement | HTMLIonPopoverElement | undefined> {
    return this.element.querySelector('ion-select').open(ev);
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
    this.eonChange.emit(this._value);
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
        this.eonChange.emit(this._value);
      }
    } else {
      this._value = '';
      this.eonChange.emit(this._value);
    }
  }

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
        {this.renderInput()}
      </ion-item>
    );
  }

  renderInput() {
    return (
      <ion-select
        cancelText={this.cancelText}
        disabled={this.disabled}
        mode={this.mode}
        multiple={this.multiple}
        name={this.name}
        placeholder={this.placeholder}
        value={this._value}
        interface={this.interface}
        interfaceOptions={this.interfaceOptions}
        compareWith={this.compareWith}
        okText={this.okText}
        selectedText={this.selectedText}
        onIonBlur={(event) => this.eonBlur.emit(event.detail)}
        onIonChange={(event) => this.updateValue(event)}
        onIonFocus={(event) => this.eonFocus.emit(event.detail)}
        onIonCancel={(event) => this.eonCancel.emit(event.detail)}
      >
        // @ts-ignore
        {this.options.map((item: any) =>
          (_.isString(item) ? <ion-select-option
              value={item}
            >{item}</ion-select-option> :
          <ion-select-option
            disabled={item.disabled}
            selected={item.selected}
            value={item.value}
          >{item && item.title}</ion-select-option>)
        )}
        <slot />
      </ion-select>
    );
  }

  render() {
    if (this.label || this.itemShow) {
      return this.renderItem();
    }
    return this.renderInput();
  }
}
