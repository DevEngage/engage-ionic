

export type Mode = 'ios' | 'md' | 'flat' | 'dark' | 'game';
export type Size = 'xs' |  'sm' |  'md' |  'lg' | 'xl' | '' | null;
export type Position = 'left' | 'top' | 'right' | 'bottom' | 'center' | 'l' | 't' | 'r' | 'b' | 'c' |
  'top left' | 'top right' | 'bottom left' | 'bottom right' | 'tl' | 'tr' | 'bl' | 'br';
export type Context = 'primary' |  'secondary' |  'light' |  'dark' | 'blue' | '' | null;
export type OS = 'windows' |  'mac' |  'linux' |  'android' | 'ios' | '' | '' | '' | null;
export type Device = 'desktop' | 'tablet' | 'phone' | '' | null;
export type Animation = 'slideIn' | 'zoomOut' | 'zoomIn' | 'fadeIn' | 'bounceIn' | 'bounceOut' | 'slideOut' | null;
export type HeaderStyle = 'wide' | 'narrow' | 'regular' | 'profile' | 'overlay' | 'basic' | null | '';
export type ImageStyle = 'circle' | 'rounded' | 'square' | '' | null;
export type UploadType = 'dropzone' | 'input' | 'detailed' | 'hidden' | 'profile' | null;
export type InputLabelPosition = 'above' | 'inline' | 'float' | '' | null;
export type InputType = 'text' | 'email' | 'number' |
  'time' | 'tel' | 'date' | 'url' | 'week' |
  'month' | 'datetime-local' | 'range' | 'radio' | 'checkbox' | 'color' | 'password' | 'textarea' | null;
export type UploadStyle = 'card' | 'list' | 'simple' | '' | null;
export type ListItemType = 'checkbox' | 'radio' | 'input' | 'icons' | 'simple' | '' | null;
export type Theme = 'material' | 'flat' | 'dark' | '' | null;
