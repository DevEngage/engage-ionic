# eon-upload



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute               | Description | Type                                                           | Default                                                                      |
| --------------------- | ----------------------- | ----------- | -------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `accept`              | `accept`                |             | `string`                                                       | `''`                                                                         |
| `adapter`             | `adapter`               |             | `any`                                                          | `undefined`                                                                  |
| `bindSelector`        | `bind-selector`         |             | `string`                                                       | `'[eon-bind]'`                                                               |
| `color`               | `color`                 |             | `string`                                                       | `undefined`                                                                  |
| `context`             | `context`               |             | `string`                                                       | `'primary'`                                                                  |
| `engStyle`            | `eng-style`             |             | `"" \| "card" \| "list" \| "simple"`                           | `'card'`                                                                     |
| `eonId`               | `eonId`                 |             | `string`                                                       | `'eon-upload-' + _.random(0, 100000000)`                                     |
| `errorMsg`            | `error-msg`             |             | `string`                                                       | `''`                                                                         |
| `errorSelector`       | `error-selector`        |             | `string`                                                       | `'[eon-error]'`                                                              |
| `imageStyle`          | `image-style`           |             | `"" \| "circle" \| "rounded" \| "square"`                      | `'rounded'`                                                                  |
| `itemButton`          | `item-button`           |             | `boolean`                                                      | `undefined`                                                                  |
| `itemColor`           | `item-color`            |             | `string`                                                       | `undefined`                                                                  |
| `itemDetail`          | `item-detail`           |             | `boolean`                                                      | `undefined`                                                                  |
| `itemDetailIcon`      | `item-detail-icon`      |             | `string`                                                       | `undefined`                                                                  |
| `itemDisabled`        | `item-disabled`         |             | `boolean`                                                      | `undefined`                                                                  |
| `itemHref`            | `item-href`             |             | `string`                                                       | `undefined`                                                                  |
| `itemLines`           | `item-lines`            |             | `"full" \| "inset" \| "none"`                                  | `undefined`                                                                  |
| `itemMode`            | `item-mode`             |             | `"ios" \| "md"`                                                | `undefined`                                                                  |
| `itemRouterDirection` | `item-router-direction` |             | `"back" \| "forward" \| "root"`                                | `undefined`                                                                  |
| `itemType`            | `item-type`             |             | `"button" \| "reset" \| "submit"`                              | `undefined`                                                                  |
| `label`               | `label`                 |             | `string`                                                       | `''`                                                                         |
| `labelColor`          | `label-color`           |             | `string`                                                       | `undefined`                                                                  |
| `labelMode`           | `label-mode`            |             | `"ios" \| "md"`                                                | `undefined`                                                                  |
| `labelPosition`       | `label-position`        |             | `"fixed" \| "floating" \| "stacked"`                           | `undefined`                                                                  |
| `mainImage`           | `main-image`            |             | `boolean`                                                      | `false`                                                                      |
| `method`              | `method`                |             | `string`                                                       | `'upload'`                                                                   |
| `mode`                | `mode`                  |             | `"ios" \| "md"`                                                | `undefined`                                                                  |
| `multiple`            | `multiple`              |             | `boolean`                                                      | `true`                                                                       |
| `name`                | `name`                  |             | `string`                                                       | `undefined`                                                                  |
| `placeholder`         | `placeholder`           |             | `string`                                                       | `'Upload File(s) - Click, tap, or drag to begin your file upload adventure'` |
| `preview`             | `preview`               |             | `boolean`                                                      | `true`                                                                       |
| `size`                | `size`                  |             | `"" \| "lg" \| "md" \| "sm" \| "xl" \| "xs"`                   | `'md'`                                                                       |
| `successMsg`          | `success-msg`           |             | `string`                                                       | `''`                                                                         |
| `type`                | `type`                  |             | `"detailed" \| "dropzone" \| "hidden" \| "input" \| "profile"` | `'dropzone'`                                                                 |
| `uploadOnSelect`      | `upload-on-select`      |             | `boolean`                                                      | `false`                                                                      |
| `value`               | `value`                 |             | `any`                                                          | `undefined`                                                                  |


## Events

| Event               | Description | Type                |
| ------------------- | ----------- | ------------------- |
| `eonFileClear`      |             | `CustomEvent<void>` |
| `eonFileSelect`     |             | `CustomEvent<void>` |
| `eonUploadEnd`      |             | `CustomEvent<void>` |
| `eonUploadProgress` |             | `CustomEvent<void>` |
| `eonUploadStart`    |             | `CustomEvent<void>` |


## Methods

### `clear(event?: any) => void`



#### Parameters

| Name    | Type  | Description |
| ------- | ----- | ----------- |
| `event` | `any` |             |

#### Returns

Type: `void`



### `getInputElement() => HTMLInputElement`



#### Returns

Type: `HTMLInputElement`



### `pause() => void`



#### Returns

Type: `void`



### `select() => void`



#### Returns

Type: `void`



### `setAdapter(adapter: any, onlyIfMissing?: boolean) => any`



#### Parameters

| Name            | Type      | Description |
| --------------- | --------- | ----------- |
| `adapter`       | `any`     |             |
| `onlyIfMissing` | `boolean` |             |

#### Returns

Type: `any`



### `start(event?: any, files?: any) => Promise<any[]>`



#### Parameters

| Name    | Type  | Description |
| ------- | ----- | ----------- |
| `event` | `any` |             |
| `files` | `any` |             |

#### Returns

Type: `Promise<any[]>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
