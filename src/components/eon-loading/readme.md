# eon-loading



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type                                                     | Default           |
| -------------- | --------------- | ----------- | -------------------------------------------------------- | ----------------- |
| `adapter`      | `adapter`       |             | `any`                                                    | `undefined`       |
| `autoprogress` | `autoprogress`  |             | `boolean`                                                | `false`           |
| `color`        | `color`         |             | `string`                                                 | `'clear'`         |
| `current`      | `current`       |             | `number`                                                 | `0`               |
| `duration`     | `duration`      |             | `number`                                                 | `10000`           |
| `frequency`    | `frequency`     |             | `"determinate" \| "indeterminate" \| "ion" \| "regular"` | `'indeterminate'` |
| `max`          | `max`           |             | `number`                                                 | `100`             |
| `message`      | `message`       |             | `string`                                                 | `'Loading...'`    |
| `min`          | `min`           |             | `number`                                                 | `0`               |
| `modal`        | `modal`         |             | `boolean`                                                | `false`           |
| `modalOptions` | `modal-options` |             | `any`                                                    | `{}`              |
| `mode`         | `mode`          |             | `"ios" \| "md"`                                          | `undefined`       |
| `size`         | `size`          |             | `"" \| "lg" \| "md" \| "sm" \| "xl" \| "xs"`             | `'md'`            |
| `type`         | `type`          |             | `"bar" \| "spinner"`                                     | `'bar'`           |


## Events

| Event       | Description | Type                |
| ----------- | ----------- | ------------------- |
| `eonFinish` |             | `CustomEvent<void>` |
| `eonStart`  |             | `CustomEvent<void>` |
| `eonUpdate` |             | `CustomEvent<void>` |


## Methods

### `hide() => void`



#### Returns

Type: `void`



### `show() => void`



#### Returns

Type: `void`



### `toggle() => void`



#### Returns

Type: `void`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
