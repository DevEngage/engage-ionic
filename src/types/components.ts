
import {InputLabelPosition, InputType, Size, Theme, UploadType} from "./theme";

export interface EngageIInput {
  value?: any;
  name?: string;
  bind?: any;
  placeholder?: string;
  context?: string;
  label?: string;
  labelId?: string;
  labelPosition?: InputLabelPosition;
  type?: InputType;
  manualMsg?: boolean;
  errorMsg?: string;
  successMsg?: string;
  iconRight?: string;
  iconLeft?: string;
  revealInput?: boolean;
  autoExpand?: boolean;
}

export interface EngageINavMenuItem {
  name?: string;
  icon?: string;
  tooltip?: string;
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
  image?: string;
  stencil?:string;
  size?: string;
  context?: string;
  action?(event?:any);
  link?: string;
  hideWhenUser?: boolean;
  selected?: boolean;
  type?: null | undefined | 'select' | 'dropdown' | 'action';
  children?: EngageINavMenuItem[]
}

export interface EngageIUpload {
  value?: any;
  name?: string;
  placeholder?: string;
  context?: string;
  engId?: string;
  type?: UploadType;
  adapter?: any;
  method?: string;
  preview?: boolean;
  multiple?: boolean;
  mainImage?: boolean;
  uploadOnSelect?: boolean;
  errorMsg?: string;
  successMsg?: string;
  bindSelector?: string;
  errorSelector?: string;
  accept?: string;
}

export interface EngageICheckbox {
  label?: string;
  engId?: string;
  name?: string;
  bind?: any;
  value?: boolean;
  onLabel?: any;
  offLabel?: any;
  onIcon?: string;
  offIcon?: boolean;
  labelPosition?: 'left' | 'right';
  animationSpeed?: number;
  animated?: boolean;
  fontSize?: string;
  toggleSize?: number;
  onChange?: (event) => any;
  type?: 'default' | 'toggle' | 'radio';
}

export interface EngageIListItem {
  title?: string;
  name?: string;
  subTitle?: string;
  details?: string;
  context?: string;
  bgContext?: string;
  left?: EngageIListItemSide;
  right?: EngageIListItemSide[];
  borderContext?: string;
  selected?: boolean;
  borderType?: 'left' | 'right' | 'top' | 'bottom' | 'all' | 'x' | 'y' | '';
}

export interface EngageIListItemSide {
  image?: string;
  icon?: string;
  iconSize?: string;
  button?: EngageIButton;
  name?: string;
  title?: string;
  context?: string;
  action?: (e?) => any;
  stencil?: string;
}

export interface EngageIButton {
  type?: 'default' | 'a' | 'submit' | '';
  disabled?: boolean;
  theme?: Theme;
  context?: string;
  icon?: string;
  rightIcon?: string;
  textColor?: string;
  allCaps?: boolean;
  loading?: boolean;
  loadingCurrent?: number;
  loadingMin?: number;
  loadingMax?: number;
  loadingContext?: string;
  preventDefault?: boolean;
  stopPropagation?: boolean;
  block?: boolean;
  outline?: boolean;
  rounded?: boolean;
  fab?: boolean;
  dropdown?: boolean;
  size?: Size;
  fontSize?: string;
  enableToggle?: boolean;
  href?: string;
  target?: string;
  ripple?: boolean | 'center';
  onClick?: (event) => any;
}
