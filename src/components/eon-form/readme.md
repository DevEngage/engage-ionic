# eon-form



<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                 | Description | Type                                                    | Default                                                                                                                                                                                                                                                                                                                                                                    |
| ----------------------- | ------------------------- | ----------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `adapter`               | `adapter`                 |             | `any`                                                   | `undefined`                                                                                                                                                                                                                                                                                                                                                                |
| `allowUndefined`        | `allow-undefined`         |             | `boolean`                                               | `false`                                                                                                                                                                                                                                                                                                                                                                    |
| `bindSelector`          | `bind-selector`           |             | `string`                                                | `'[eon-bind]'`                                                                                                                                                                                                                                                                                                                                                             |
| `eonId`                 | `eon-id`                  |             | `number \| string`                                      | `null`                                                                                                                                                                                                                                                                                                                                                                     |
| `errorSelector`         | `error-selector`          |             | `string`                                                | `'[eon-error]'`                                                                                                                                                                                                                                                                                                                                                            |
| `handleUpload`          | `handle-upload`           |             | `boolean`                                               | `true`                                                                                                                                                                                                                                                                                                                                                                     |
| `inputSelector`         | `input-selector`          |             | `string`                                                | ``     input[type=text],      input[type=email],      input[type=number],      input[type=time],      input[type=tel],      input[type=date],      input[type=url],      input[type=week],      input[type=month],      input[type=datetime-local],      input[type=range],      input[type=radio] checked,      input[type=checkbox] checked,      input[type=color]   `` |
| `path`                  | `path`                    |             | `string`                                                | `''`                                                                                                                                                                                                                                                                                                                                                                       |
| `propertyNameAttribute` | `property-name-attribute` |             | `string`                                                | `'name'`                                                                                                                                                                                                                                                                                                                                                                   |
| `refresh`               | `refresh`                 |             | `boolean`                                               | `false`                                                                                                                                                                                                                                                                                                                                                                    |
| `type`                  | `type`                    |             | `"create" \| "custom" \| "patch" \| "save" \| "update"` | `'save'`                                                                                                                                                                                                                                                                                                                                                                   |
| `uploadSelector`        | `upload-selector`         |             | `string`                                                | `'eon-upload'`                                                                                                                                                                                                                                                                                                                                                             |
| `value`                 | --                        |             | `object`                                                | `undefined`                                                                                                                                                                                                                                                                                                                                                                |


## Events

| Event      | Description | Type                |
| ---------- | ----------- | ------------------- |
| `onSubmit` |             | `CustomEvent<void>` |


## Methods

### `getValues() => object`



#### Returns

Type: `object`



### `reset() => void`



#### Returns

Type: `void`



### `setValue(value?: object) => void`



#### Parameters

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| `value` | `object` |             |

#### Returns

Type: `void`



### `submit() => void`



#### Returns

Type: `void`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
