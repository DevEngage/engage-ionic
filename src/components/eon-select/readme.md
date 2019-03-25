# eon-input



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute               | Description | Type                                                            | Default         |
| --------------------- | ----------------------- | ----------- | --------------------------------------------------------------- | --------------- |
| `bind`                | `bind`                  |             | `any`                                                           | `undefined`     |
| `bindSelector`        | `bind-selector`         |             | `string`                                                        | `'[eon-bind]'`  |
| `cancelText`          | `cancel-text`           |             | `string`                                                        | `'Cancel'`      |
| `color`               | `color`                 |             | `string`                                                        | `undefined`     |
| `compareWith`         | `compare-with`          |             | `((currentValue: any, compareValue: any) => boolean) \| string` | `undefined`     |
| `disabled`            | `disabled`              |             | `boolean`                                                       | `false`         |
| `errorMsg`            | `error-msg`             |             | `string`                                                        | `''`            |
| `errorSelector`       | `error-selector`        |             | `string`                                                        | `'[eon-error]'` |
| `interface`           | `interface`             |             | `"action-sheet" \| "alert" \| "popover"`                        | `'alert'`       |
| `interfaceOptions`    | `interface-options`     |             | `any`                                                           | `{}`            |
| `itemButton`          | `item-button`           |             | `boolean`                                                       | `undefined`     |
| `itemColor`           | `item-color`            |             | `string`                                                        | `undefined`     |
| `itemDetail`          | `item-detail`           |             | `boolean`                                                       | `undefined`     |
| `itemDetailIcon`      | `item-detail-icon`      |             | `string`                                                        | `undefined`     |
| `itemDisabled`        | `item-disabled`         |             | `boolean`                                                       | `undefined`     |
| `itemHref`            | `item-href`             |             | `string`                                                        | `undefined`     |
| `itemLines`           | `item-lines`            |             | `"full" \| "inset" \| "none"`                                   | `undefined`     |
| `itemMode`            | `item-mode`             |             | `"ios" \| "md"`                                                 | `undefined`     |
| `itemRouterDirection` | `item-router-direction` |             | `"back" \| "forward" \| "root"`                                 | `undefined`     |
| `itemShow`            | `item-show`             |             | `boolean`                                                       | `undefined`     |
| `itemType`            | `item-type`             |             | `"button" \| "reset" \| "submit"`                               | `undefined`     |
| `label`               | `label`                 |             | `string`                                                        | `''`            |
| `labelColor`          | `label-color`           |             | `string`                                                        | `undefined`     |
| `labelMode`           | `label-mode`            |             | `"ios" \| "md"`                                                 | `undefined`     |
| `labelPosition`       | `label-position`        |             | `"fixed" \| "floating" \| "stacked"`                            | `undefined`     |
| `mode`                | `mode`                  |             | `"ios" \| "md"`                                                 | `undefined`     |
| `multiple`            | `multiple`              |             | `boolean`                                                       | `false`         |
| `name`                | `name`                  |             | `string`                                                        | `undefined`     |
| `okText`              | `ok-text`               |             | `string`                                                        | `'OK'`          |
| `options`             | --                      |             | `EngageISelectOption[] \| string[]`                             | `[]`            |
| `placeholder`         | `placeholder`           |             | `string`                                                        | `undefined`     |
| `selectedText`        | `selected-text`         |             | `string`                                                        | `undefined`     |
| `successMsg`          | `success-msg`           |             | `string`                                                        | `''`            |
| `value`               | `value`                 |             | `any`                                                           | `undefined`     |


## Events

| Event               | Description | Type                |
| ------------------- | ----------- | ------------------- |
| `eonBlur`           |             | `CustomEvent<void>` |
| `eonCancel`         |             | `CustomEvent<void>` |
| `eonChange`         |             | `CustomEvent<void>` |
| `eonFocus`          |             | `CustomEvent<void>` |
| `eonInputDidLoad`   |             | `CustomEvent<void>` |
| `eonInputDidUnload` |             | `CustomEvent<void>` |


## Methods

### `clear() => void`



#### Returns

Type: `void`



### `getName() => string`



#### Returns

Type: `string`



### `getValue() => any`



#### Returns

Type: `any`



### `open(ev?: UIEvent) => Promise<HTMLIonActionSheetElement | HTMLIonAlertElement | HTMLIonPopoverElement>`



#### Parameters

| Name | Type      | Description |
| ---- | --------- | ----------- |
| `ev` | `UIEvent` |             |

#### Returns

Type: `Promise<HTMLIonActionSheetElement | HTMLIonAlertElement | HTMLIonPopoverElement>`



### `setValue(value?: string) => void`



#### Parameters

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| `value` | `string` |             |

#### Returns

Type: `void`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
