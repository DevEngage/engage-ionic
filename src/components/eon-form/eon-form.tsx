import {
  Component,
  Event,
  EventEmitter,
  Method,
  Prop,
  Element, Watch,
} from '@stencil/core';
import _ from 'lodash';


/*
* TODO:
*  [ ] Test with firebase adapter
*  [ ] Test with feathers adapter
*  [ ] Test reset
*  [ ] Populate fields from value
*  [ ] Handle error and different types
*  [ ] File upload
* */

@Component({
  tag: 'eon-form',
  styleUrl: 'eon-form.scss'
})
export class EonForm {

  @Prop({ context: 'config' }) config: any;
  @Element() element: HTMLElement;
  @Prop() value: object;
  @Prop() adapter: any;
  @Prop() type: 'save' | 'update' | 'patch' | 'create' | 'custom' = 'save';
  @Prop() refresh = false;
  @Prop() path = ''; // path to send data
  @Prop() eonId: string | number = null; // on the object
  @Prop() handleUpload: boolean = true;
  @Prop() uploadSelector: string = 'eon-upload';
  @Prop() inputSelector: string = `
    input[type=text], 
    input[type=email], 
    input[type=number], 
    input[type=time], 
    input[type=tel], 
    input[type=date], 
    input[type=url], 
    input[type=week], 
    input[type=month], 
    input[type=datetime-local], 
    input[type=range], 
    input[type=radio] checked, 
    input[type=checkbox] checked, 
    input[type=color]
  `;
  @Prop() bindSelector = '[eon-bind]';
  @Prop() propertyNameAttribute = 'name';
  @Prop() errorSelector = '[eon-error]';
  @Prop() allowUndefined: boolean = false;
  @Event() onSubmit: EventEmitter;
  private eonInputSelector: string = `eon-input, eon-checkbox, eon-select`;
  private values: object = {};

  componentDidLoad() {
    this.watchValue();
  }

  getForm() {
    return this.element.querySelector('form');
  }

  getFormSubmitButton(): HTMLButtonElement {
    return this.element.querySelector('.eon-form-submit-button');
  }

  getInputs(): any {
    return this.element.querySelectorAll(this.inputSelector);
  }

  getEonInputs(): any {
    return this.element.querySelectorAll(this.eonInputSelector);
  }


  getEonUploads(): any {
    return this.element.querySelectorAll(this.uploadSelector);
  }

  bindValues() {
    this.getForm().querySelectorAll(this.bindSelector);
  }

  @Watch('value')
  watchValue() {
    this.setValue();
  }

  @Method('setValue')
  setValue(value = this.value) {
    if (_.isObject(value)) {
      this.values = {
        ...this.values,
        ...value,
      }

    }
    for (let valuesKey in this.values) {
      const val = this.values[valuesKey];
      this.getInputs().forEach((item: HTMLInputElement) => {
        if (!item.classList.contains('eon-input-exclude')) {
          if (item.getAttribute(this.propertyNameAttribute) === valuesKey) {
            item.value = val;
          }
        }
      });
      this.getEonInputs().forEach((item: HTMLEonInputElement) => {
        if (item.getName() === valuesKey) {
          item.setValue(val);
        }
      });
    }
  }

  @Method('submit')
  submit() {
    const element = this.getFormSubmitButton();
    element.click();
    // this.onSubmit.emit(this.value);
  }

  @Method('reset')
  reset() {
    const element = this.getForm();
    element.reset();
    // this.onSubmit.emit(this.value);
  }

  @Method('getValues')
  getValues(): object {
    this.getInputs().forEach((item: HTMLInputElement) => {
      if (!item.classList.contains('eon-input-exclude') && !item.classList.contains('eon-exclude')) {
        this.values[item.getAttribute(this.propertyNameAttribute)] = item.value || (this.allowUndefined ? undefined : '');
      }
    });
    this.getEonInputs().forEach((item: HTMLEonInputElement) => {
      this.values[item.getName()] = item.getValue() || (this.allowUndefined ? undefined : '');
    });
    return this.values;
  }

  /*
  * TODO:
  * [ ] Handle Progress
  * [ ]
  * */
  handleFileUpload(adapter = this.adapter) {
    console.log(adapter);
    const promises = [];
    let files: any[] = [];
    if (!this.handleUpload) return;
    this.getEonUploads().forEach((item: HTMLEonUploadElement) => {
      if (!item.classList.contains('eon-exclude')) {
        item.setAdapter(adapter);
        let itemPromise = item.start();
        itemPromise.then(_files => files = files.concat(_files));
        promises.push(itemPromise);
      }
    });
    return Promise.all(promises).then(() => files);
  }

  private async _onSubmit(event) {
    event.preventDefault();
    let files = [];
    this.getValues();
    console.log(this.values);
    if (this.path) {
      this.adapter.path = this.path;
    }
    if (this.adapter && this.type && this.adapter[this.type] && this.type !== 'custom') {
      const newValue = await this.adapter[this.type](this.values);
      files = await this.handleFileUpload(newValue);
      this.setValue(newValue);
    }
    this.onSubmit.emit({
      type: this.type,
      values: this.values,
      id: this.eonId,
      files: files
    });
  }

  render() {
    return (
      <form onSubmit={(e) => this._onSubmit(e)}>
        <slot />
        <button type="submit" style={{'display': 'none'}} class="eon-form-submit-button" />
      </form>
    )
  }
}
