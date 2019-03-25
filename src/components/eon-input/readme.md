# eon-input



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute               | Description | Type                                                                                            | Default         |
| --------------------- | ----------------------- | ----------- | ----------------------------------------------------------------------------------------------- | --------------- |
| `accept`              | `accept`                |             | `string`                                                                                        | `undefined`     |
| `autoSize`            | `auto-size`             |             | `boolean`                                                                                       | `false`         |
| `autocapitalize`      | `autocapitalize`        |             | `string`                                                                                        | `undefined`     |
| `autocomplete`        | `autocomplete`          |             | `"off" \| "on"`                                                                                 | `undefined`     |
| `autocorrect`         | `autocorrect`           |             | `"off" \| "on"`                                                                                 | `undefined`     |
| `autofocus`           | `autofocus`             |             | `boolean`                                                                                       | `undefined`     |
| `bind`                | `bind`                  |             | `any`                                                                                           | `undefined`     |
| `bindSelector`        | `bind-selector`         |             | `string`                                                                                        | `'[eon-bind]'`  |
| `clearInput`          | `clear-input`           |             | `boolean`                                                                                       | `undefined`     |
| `clearOnEdit`         | `clear-on-edit`         |             | `boolean`                                                                                       | `undefined`     |
| `color`               | `color`                 |             | `string`                                                                                        | `undefined`     |
| `cols`                | `cols`                  |             | `number`                                                                                        | `undefined`     |
| `debounce`            | `debounce`              |             | `number`                                                                                        | `undefined`     |
| `disabled`            | `disabled`              |             | `boolean`                                                                                       | `undefined`     |
| `errorMsg`            | `error-msg`             |             | `string`                                                                                        | `''`            |
| `errorSelector`       | `error-selector`        |             | `string`                                                                                        | `'[eon-error]'` |
| `inputmode`           | `inputmode`             |             | `string`                                                                                        | `undefined`     |
| `itemButton`          | `item-button`           |             | `boolean`                                                                                       | `undefined`     |
| `itemColor`           | `item-color`            |             | `string`                                                                                        | `undefined`     |
| `itemDetail`          | `item-detail`           |             | `boolean`                                                                                       | `undefined`     |
| `itemDetailIcon`      | `item-detail-icon`      |             | `string`                                                                                        | `undefined`     |
| `itemDisabled`        | `item-disabled`         |             | `boolean`                                                                                       | `undefined`     |
| `itemHref`            | `item-href`             |             | `string`                                                                                        | `undefined`     |
| `itemLines`           | `item-lines`            |             | `"full" \| "inset" \| "none"`                                                                   | `undefined`     |
| `itemMode`            | `item-mode`             |             | `"ios" \| "md"`                                                                                 | `undefined`     |
| `itemRouterDirection` | `item-router-direction` |             | `"back" \| "forward" \| "root"`                                                                 | `undefined`     |
| `itemType`            | `item-type`             |             | `"button" \| "reset" \| "submit"`                                                               | `undefined`     |
| `label`               | `label`                 |             | `string`                                                                                        | `''`            |
| `labelColor`          | `label-color`           |             | `string`                                                                                        | `undefined`     |
| `labelMode`           | `label-mode`            |             | `"ios" \| "md"`                                                                                 | `undefined`     |
| `labelPosition`       | `label-position`        |             | `"fixed" \| "floating" \| "stacked"`                                                            | `undefined`     |
| `max`                 | `max`                   |             | `string`                                                                                        | `undefined`     |
| `maxlength`           | `maxlength`             |             | `number`                                                                                        | `undefined`     |
| `min`                 | `min`                   |             | `string`                                                                                        | `undefined`     |
| `minlength`           | `minlength`             |             | `number`                                                                                        | `undefined`     |
| `mode`                | `mode`                  |             | `"ios" \| "md"`                                                                                 | `undefined`     |
| `multiple`            | `multiple`              |             | `boolean`                                                                                       | `undefined`     |
| `name`                | `name`                  |             | `string`                                                                                        | `undefined`     |
| `pattern`             | `pattern`               |             | `string`                                                                                        | `undefined`     |
| `placeholder`         | `placeholder`           |             | `string`                                                                                        | `undefined`     |
| `readonly`            | `readonly`              |             | `boolean`                                                                                       | `undefined`     |
| `required`            | `required`              |             | `boolean`                                                                                       | `undefined`     |
| `rows`                | `rows`                  |             | `number`                                                                                        | `undefined`     |
| `size`                | `size`                  |             | `number`                                                                                        | `undefined`     |
| `spellcheck`          | `spellcheck`            |             | `boolean`                                                                                       | `undefined`     |
| `step`                | `step`                  |             | `string`                                                                                        | `undefined`     |
| `successMsg`          | `success-msg`           |             | `string`                                                                                        | `''`            |
| `textarea`            | `textarea`              |             | `boolean`                                                                                       | `undefined`     |
| `type`                | `type`                  |             | `"date" \| "email" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "time" \| "url"` | `undefined`     |
| `value`               | `value`                 |             | `number \| string`                                                                              | `undefined`     |
| `wrap`                | `wrap`                  |             | `"hard" \| "off" \| "soft"`                                                                     | `undefined`     |


## Events

| Event               | Description | Type                |
| ------------------- | ----------- | ------------------- |
| `eonBlur`           |             | `CustomEvent<void>` |
| `eonChange`         |             | `CustomEvent<void>` |
| `eonFocus`          |             | `CustomEvent<void>` |
| `eonInput`          |             | `CustomEvent<void>` |
| `eonInputDidLoad`   |             | `CustomEvent<void>` |
| `eonInputDidUnload` |             | `CustomEvent<void>` |


## Methods

### `clear() => void`



#### Returns

Type: `void`



### `getInputElement() => Promise<HTMLInputElement>`



#### Returns

Type: `Promise<HTMLInputElement>`



### `getName() => string`



#### Returns

Type: `string`



### `getValue() => any`



#### Returns

Type: `any`



### `setFocus() => void`



#### Returns

Type: `void`



### `setValue(value?: string) => void`



#### Parameters

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| `value` | `string` |             |

#### Returns

Type: `void`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
