import { Component, EventEmitter, Method, Prop, State, Watch, Element, Event } from '@stencil/core';
import _ from 'lodash';
/*
 * TODO:
 *  [ ] add ion-item with label/floating to this input
 *  [ ] large and small sizes
 *  [X] Icon left and right side
 *  [ ] Disable
 *  [ ] Auto sizing
 *  [ ] Clear icon on left (for search and select)
 *  [X] Textarea
 *  [ ] Fix auto grow on textarea
 *  [ ] Help Text
 *  [ ] More validation -password - number -url -tel
 *  [ ] Mask -tel -custom - date -time -color
 *  [ ] Add different component for -checkbox -radio -range -switch -file
 *  [ ] Reveal input on icon click
 * */
@Component({
  tag: 'eon-input',
  styleUrl: 'eon-input.scss'
})
export class EonInput {
  @Element() element: HTMLElement;
  @Prop() accept: string | undefined;
  @Prop() autocapitalize: string;
  @Prop() autocomplete: 'off' | 'on';
  @Prop() autocorrect: 'off' | 'on';
  @Prop() autofocus: boolean;
  @Prop() clearInput: boolean;
  @Prop() clearOnEdit: boolean | undefined;
  @Prop() color: string | undefined;
  @Prop() debounce: number;
  @Prop() disabled: boolean;
  @Prop() inputmode: string | undefined;
  @Prop() max: string | undefined;
  @Prop() maxlength: number | undefined;
  @Prop() min: string | undefined;
  @Prop() minlength: number | undefined;
  @Prop() mode: 'ios' | 'md';
  @Prop() multiple: boolean | undefined;
  @Prop() name: string;
  @Prop() pattern: string | undefined;
  @Prop() placeholder: null | string | undefined;
  @Prop() readonly: boolean;
  @Prop() required: boolean;
  @Prop() size: number | undefined;
  @Prop() spellcheck: boolean;
  @Prop() step: string | undefined;
  @Prop() type: 'date' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url';
  @Prop() value: null | string | undefined | number;
  /* eon specific */
  @Prop() bind: string;
  @Prop() bindSelector = '[eon-bind]';
  @Prop() errorSelector = '[eon-error]';
  @Prop() errorMsg: string = '';
  @Prop() successMsg: string = '';
  @Event() eonBlur: EventEmitter;
  @Event() eonFocus: EventEmitter;
  @Event() eonInput: EventEmitter;
  @Event() eonInputDidLoad: EventEmitter;
  @Event() eonInputDidUnload: EventEmitter;
  @Event() eonChange: EventEmitter;
  @State() private _value: any;

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

  @Method('setFocus')
  setFocus() {
    this.element.querySelector('ion-input').setFocus();
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
    this.eonInput.emit(this._value);
  }

  updateBinding(value) {
    if (this.bind && this.name) {
      this.bind[this.name] = value;
    }
  }

  updateValue(event) {
    if (event && event.detail && !_.isEmpty(event.detail)) {
      this._value = event.detail;
      this.eonInput.emit(this._value);
    } else {
      this._value = '';
      this.eonInput.emit(this._value);
    }
  }

  render() {
    return (
      <ion-input
        accept={this.accept}
        autocapitalize={this.autocapitalize}
        autocomplete={this.autocomplete}
        autocorrect={this.autocorrect}
        autofocus={this.autofocus}
        clearInput={this.clearInput}
        clearOnEdit={this.clearOnEdit}
        color={this.color}
        debounce={this.debounce}
        disabled={this.disabled}
        inputmode={this.inputmode}
        max={this.max}
        maxlength={this.maxlength}
        min={this.min}
        minlength={this.minlength}
        mode={this.mode}
        multiple={this.multiple}
        name={this.name}
        pattern={this.pattern}
        placeholder={this.placeholder}
        readonly={this.readonly}
        required={this.required}
        size={this.size}
        spellcheck={this.spellcheck}
        step={this.step}
        type={this.type}
        value={this._value}
        onIonBlur={(event) => this.eonBlur.emit(event.detail)}
        onIonChange={(event) => this.eonChange.emit(event.detail)}
        onIonFocus={(event) => this.eonFocus.emit(event.detail)}
        onIonInput={(event) => this.updateValue(event)}
        onIonInputDidLoad={(event) => this.eonInputDidLoad.emit(event.detail)}
        onIonInputDidUnload={(event) => this.eonInputDidUnload.emit(event.detail)}
      />
    );
  }
}
