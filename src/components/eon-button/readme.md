# eon-button



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description | Type                                                                            | Default     |
| ----------------- | ------------------ | ----------- | ------------------------------------------------------------------------------- | ----------- |
| `buttonType`      | `button-type`      |             | `string`                                                                        | `undefined` |
| `color`           | `color`            |             | `string`                                                                        | `undefined` |
| `disabled`        | `disabled`         |             | `boolean`                                                                       | `false`     |
| `enableToggle`    | `enable-toggle`    |             | `boolean`                                                                       | `false`     |
| `expand`          | `expand`           |             | `"block" \| "full"`                                                             | `undefined` |
| `fill`            | `fill`             |             | `"clear" \| "default" \| "outline" \| "solid"`                                  | `undefined` |
| `href`            | `href`             |             | `string`                                                                        | `undefined` |
| `icon`            | `icon`             |             | `string`                                                                        | `undefined` |
| `iconSize`        | `icon-size`        |             | `string`                                                                        | `undefined` |
| `loading`         | `loading`          |             | `boolean`                                                                       | `false`     |
| `loadingColor`    | `loading-color`    |             | `any`                                                                           | `undefined` |
| `loadingCurrent`  | `loading-current`  |             | `number`                                                                        | `undefined` |
| `loadingMax`      | `loading-max`      |             | `any`                                                                           | `undefined` |
| `loadingMin`      | `loading-min`      |             | `any`                                                                           | `undefined` |
| `loadingType`     | `loading-type`     |             | `"bar" \| "center" \| "full" \| "spinner"`                                      | `'bar'`     |
| `mode`            | `mode`             |             | `"ios" \| "md"`                                                                 | `undefined` |
| `onClick`         | --                 |             | `(event: any) => any`                                                           | `undefined` |
| `preventDefault`  | `prevent-default`  |             | `boolean`                                                                       | `false`     |
| `rightIcon`       | `right-icon`       |             | `string`                                                                        | `undefined` |
| `routerDirection` | `router-direction` |             | `"back" \| "forward" \| "root"`                                                 | `undefined` |
| `shape`           | `shape`            |             | `"round"`                                                                       | `undefined` |
| `size`            | `size`             |             | `"" \| "default" \| "large" \| "lg" \| "md" \| "sm" \| "small" \| "xl" \| "xs"` | `undefined` |
| `stop`            | `stop`             |             | `boolean`                                                                       | `false`     |
| `stopPropagation` | `stop-propagation` |             | `boolean`                                                                       | `false`     |
| `strong`          | `strong`           |             | `boolean`                                                                       | `false`     |
| `target`          | `target`           |             | `string`                                                                        | `'_blank'`  |
| `tooltip`         | `tooltip`          |             | `string`                                                                        | `undefined` |
| `tooltipPosition` | `tooltip-position` |             | `"bottom" \| "left" \| "right" \| "top"`                                        | `'bottom'`  |
| `type`            | `type`             |             | `"button" \| "reset" \| "submit"`                                               | `'button'`  |


## Events

| Event       | Description | Type                |
| ----------- | ----------- | ------------------- |
| `eonAction` |             | `CustomEvent<void>` |


## Methods

### `endLoading() => void`



#### Returns

Type: `void`



### `setLoadingCurrent(loadingCurrent: any) => void`



#### Parameters

| Name             | Type  | Description |
| ---------------- | ----- | ----------- |
| `loadingCurrent` | `any` |             |

#### Returns

Type: `void`



### `startLoading() => void`



#### Returns

Type: `void`



### `toggle() => void`



#### Returns

Type: `void`



### `toggleLoading() => void`



#### Returns

Type: `void`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
