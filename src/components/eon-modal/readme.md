# eon-modal



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description | Type                                                                                                                                                                                    | Default     |
| ----------------- | ------------------ | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `animated`        | `animated`         |             | `boolean`                                                                                                                                                                               | `true`      |
| `backdropDismiss` | `backdrop-dismiss` |             | `boolean`                                                                                                                                                                               | `true`      |
| `component`       | `component`        |             | `Function \| HTMLElement \| string`                                                                                                                                                     | `undefined` |
| `componentProps`  | --                 |             | `{ [key: string]: any; }`                                                                                                                                                               | `undefined` |
| `cssClass`        | `css-class`        |             | `string \| string[]`                                                                                                                                                                    | `undefined` |
| `enterAnimation`  | `enter-animation`  |             | `any`                                                                                                                                                                                   | `undefined` |
| `fit`             | `fit`              |             | `boolean`                                                                                                                                                                               | `false`     |
| `isVisible`       | `is-visible`       |             | `boolean`                                                                                                                                                                               | `false`     |
| `keyboardClose`   | `keyboard-close`   |             | `boolean`                                                                                                                                                                               | `undefined` |
| `leaveAnimation`  | `leave-animation`  |             | `any`                                                                                                                                                                                   | `undefined` |
| `mode`            | `mode`             |             | `"ios" \| "md"`                                                                                                                                                                         | `undefined` |
| `options`         | `options`          |             | `any`                                                                                                                                                                                   | `undefined` |
| `position`        | `position`         |             | `"b" \| "bl" \| "bottom left" \| "bottom right" \| "bottom" \| "br" \| "c" \| "center" \| "l" \| "left" \| "r" \| "right" \| "t" \| "tl" \| "top left" \| "top right" \| "top" \| "tr"` | `'center'`  |
| `short`           | `short`            |             | `"b" \| "bl" \| "br" \| "c" \| "l" \| "r" \| "t" \| "tl" \| "tr"`                                                                                                                       | `undefined` |
| `size`            | `size`             |             | `"f" \| "fluid" \| "full" \| "l" \| "large" \| "lg" \| "m" \| "md" \| "medium" \| "s" \| "sm" \| "small" \| "tiny" \| "xs"`                                                             | `'m'`       |
| `type`            | `type`             |             | `"central" \| "fluid" \| "frame" \| "side"`                                                                                                                                             | `'central'` |


## Events

| Event                 | Description | Type                |
| --------------------- | ----------- | ------------------- |
| `eonModalDidDismiss`  |             | `CustomEvent<void>` |
| `eonModalDidPresent`  |             | `CustomEvent<void>` |
| `eonModalWillDismiss` |             | `CustomEvent<void>` |
| `eonModalWillPresent` |             | `CustomEvent<void>` |


## Methods

### `dismiss() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `getModal() => any`



#### Returns

Type: `any`



### `present(component?: string | Function | HTMLElement) => Promise<void>`



#### Parameters

| Name        | Type                                | Description |
| ----------- | ----------------------------------- | ----------- |
| `component` | `Function \| HTMLElement \| string` |             |

#### Returns

Type: `Promise<void>`



### `toggle() => void`



#### Returns

Type: `void`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
