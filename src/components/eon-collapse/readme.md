# eon-collapse



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description | Type      | Default                                |
| ----------------- | ------------------ | ----------- | --------- | -------------------------------------- |
| `accordion`       | `accordion`        |             | `boolean` | `false`                                |
| `selected`        | `selected`         |             | `number`  | `0`                                    |
| `selector`        | `selector`         |             | `string`  | `'eon-item, ion-item, ion-card'`       |
| `selectorContent` | `selector-content` |             | `string`  | `'eon-card-content, ion-card-content'` |
| `selectorHeader`  | `selector-header`  |             | `string`  | `'eon-card-header, ion-card-header'`   |


## Events

| Event     | Description | Type                |
| --------- | ----------- | ------------------- |
| `eonHide` |             | `CustomEvent<void>` |
| `eonShow` |             | `CustomEvent<void>` |


## Methods

### `hide(itemPosition: number) => void`



#### Parameters

| Name           | Type     | Description |
| -------------- | -------- | ----------- |
| `itemPosition` | `number` |             |

#### Returns

Type: `void`



### `hideAll() => void`



#### Returns

Type: `void`



### `show(itemPosition: number) => void`



#### Parameters

| Name           | Type     | Description |
| -------------- | -------- | ----------- |
| `itemPosition` | `number` |             |

#### Returns

Type: `void`



### `toggle(itemPosition: number) => void`



#### Parameters

| Name           | Type     | Description |
| -------------- | -------- | ----------- |
| `itemPosition` | `number` |             |

#### Returns

Type: `void`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
