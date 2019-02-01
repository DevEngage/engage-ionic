
export interface IEonInputItem {
  accept?: string | undefined;
  autocapitalize?: string;
  autocomplete?: 'off' | 'on';
  autocorrect?: 'off' | 'on';
  autofocus?: boolean;
  clearInput?: boolean;
  clearOnEdit?: boolean | undefined;
  color?: string | undefined;
  debounce?: number;
  disabled?: boolean;
  inputmode?: string | undefined;
  max?: string | undefined;
  maxlength?: number | undefined;
  min?: string | undefined;
  minlength?: number | undefined;
  mode?: 'ios' | 'md';
  multiple?: boolean | undefined;
  name?: string;
  pattern?: string | undefined;
  placeholder?: null | string | undefined;
  readonly?: boolean;
  required?: boolean;
  size?: number | undefined;
  spellcheck?: boolean;
  step?: string | undefined;
  type?: 'date' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url';
  value?: null | string | undefined | number;
  /* eon specific */
  bind?: any;
  bindSelector?: string;
  errorSelector?: string;
  errorMsg?: string;
  successMsg?: string;
  onEonBlur?: (event, item?) => void;
  onEonFocus?: (event, item?) => void;
  onEonInput?: (event, item?) => void;
  onEonInputDidLoad?: (event, item?) => void;
  onEonInputDidUnload?: (event, item?) => void;
  onEonChange?: (event, item?) => void;
  /* item based input */
  label?: string;
  labelPosition?: 'floating' | 'fixed' | 'stacked' | undefined;
  labelColor?: string | undefined;
  labelMode?: 'ios' | 'md';
  /* Textarea */
  textarea?: boolean;
  cols?: number | undefined;
  rows?: number | undefined;
  wrap?: 'hard' | 'off' | 'soft' | undefined;
  /* Item */
  itemButton?: boolean;
  itemColor?: string | undefined;
  itemDetail?: boolean | undefined;
  itemDetailIcon?: string;
  itemDisabled?: boolean;
  itemHref?: string | undefined;
  itemLines?: 'full' | 'inset' | 'none' | undefined;
  itemMode?: 'ios' | 'md';
  itemRouterDirection?: 'back' | 'forward' | 'root';
  itemType?: 'button' | 'reset' | 'submit';
}
