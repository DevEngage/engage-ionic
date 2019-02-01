import {
  Component,
  // Event,
  // EventEmitter,
  // Method,
  // Watch,
  Prop,
  Element,
} from '@stencil/core';
import {IEonInputItem} from "./eon-form-builder.interface";

/*
* TODO:
* */

@Component({
  tag: 'eon-form-builder',
  styleUrl: 'eon-form-builder.scss'
})
export class EonFormBuilder {

  @Prop({ context: 'config' }) config: any;
  @Element() element: HTMLElement;
  @Prop() value: IEonInputItem[];

  componentDidLoad() {
  }

  buildItem(item: IEonInputItem) {
    return (
      <eon-input
        type={item.type}
        accept={item.accept}
        autocapitalize={item.autocapitalize}
        autocomplete={item.autocomplete}
        autocorrect={item.autocorrect}
        autofocus={item.autofocus}
        clearInput={item.clearInput}
        clearOnEdit={item.clearOnEdit}
        color={item.color}
        debounce={item.debounce}
        inputmode={item.inputmode}
        max={item.max}
        maxlength={item.maxlength}
        min={item.min}
        minlength={item.minlength}
        mode={item.mode}
        multiple={item.multiple}
        name={item.name}
        pattern={item.pattern}
        placeholder={item.placeholder}
        readonly={item.readonly}
        required={item.required}
        size={item.size}
        spellcheck={item.spellcheck}
        step={item.step}
        value={item.value}
        bind={item.bind}
        bindSelector={item.bindSelector}
        errorSelector={item.errorSelector}
        errorMsg={item.errorMsg}
        successMsg={item.successMsg}
        label={item.label}
        labelPosition={item.labelPosition}
        labelColor={item.labelColor}
        labelMode={item.labelMode}
        textarea={item.textarea}
        cols={item.cols}
        rows={item.rows}
        wrap={item.wrap}
        itemButton={item.itemButton}
        itemColor={item.itemColor}
        itemDetail={item.itemDetail}
        itemDetailIcon={item.itemDetailIcon}
        itemDisabled={item.itemDisabled}
        itemHref={item.itemHref}
        itemLines={item.itemLines}
        itemMode={item.itemMode}
        itemRouterDirection={item.itemRouterDirection}
        itemType={item.itemType}

        onEonBlur={(e) => item.onEonBlur(e, item)}
        onEonFocus={(e) => item.onEonFocus(e, item)}
        onEonInput={(e) => item.onEonInput(e, item)}
        onEonInputDidLoad={(e) => item.onEonInputDidLoad(e, item)}
        onEonInputDidUnload={(e) => item.onEonInputDidUnload(e, item)}
        onEonChange={(e) => item.onEonChange(e, item)}
      />
    );
  }

  render() {
    return (
     <ion-list>
       {this.value.map(item => this.buildItem(item))}
     </ion-list>
    )
  }
}
