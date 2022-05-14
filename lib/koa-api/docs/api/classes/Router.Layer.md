[nextjs-koa-api](../README.md) / [Router](../modules/Router.md) / Layer

# Class: Layer

[Router](../modules/Router.md).Layer

## Table of contents

### Constructors

- [constructor](Router.Layer.md#constructor)

### Properties

- [methods](Router.Layer.md#methods)
- [name](Router.Layer.md#name)
- [opts](Router.Layer.md#opts)
- [paramNames](Router.Layer.md#paramnames)
- [path](Router.Layer.md#path)
- [regexp](Router.Layer.md#regexp)
- [stack](Router.Layer.md#stack)

### Methods

- [captures](Router.Layer.md#captures)
- [match](Router.Layer.md#match)
- [param](Router.Layer.md#param)
- [params](Router.Layer.md#params)
- [setPrefix](Router.Layer.md#setprefix)
- [url](Router.Layer.md#url)

## Constructors

### constructor

• **new Layer**(`path`, `methods`, `middleware`, `opts?`)

#### Parameters

| Name         | Type                                                                                                                                                                                                                                                                                                                               |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `path`       | `string` \| `RegExp`                                                                                                                                                                                                                                                                                                               |
| `methods`    | `string`[]                                                                                                                                                                                                                                                                                                                         |
| `middleware` | [`Middleware`](../modules/Router.md#middleware)<[`DefaultState`](../interfaces/Koa.DefaultState.md), [`DefaultContext`](../interfaces/Koa.DefaultContext.md)\> \| [`Middleware`](../modules/Router.md#middleware)<[`DefaultState`](../interfaces/Koa.DefaultState.md), [`DefaultContext`](../interfaces/Koa.DefaultContext.md)\>[] |
| `opts?`      | [`LayerOptions`](../interfaces/Router.LayerOptions.md)                                                                                                                                                                                                                                                                             |

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:124

## Properties

### methods

• **methods**: `string`[]

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:118

---

### name

• **name**: `null` \| `string`

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:117

---

### opts

• **opts**: [`LayerOptions`](../interfaces/Router.LayerOptions.md)

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:116

---

### paramNames

• **paramNames**: [`ParamName`](Router.ParamName.md)[]

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:119

---

### path

• **path**: `string`

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:122

---

### regexp

• **regexp**: `RegExp`

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:121

---

### stack

• **stack**: [`Middleware`](../modules/Router.md#middleware)<[`DefaultState`](../interfaces/Koa.DefaultState.md), [`DefaultContext`](../interfaces/Koa.DefaultContext.md)\>[]

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:120

## Methods

### captures

▸ **captures**(`path`): `string`[]

Returns array of regexp url path captures.

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `path` | `string` |

#### Returns

`string`[]

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:139

---

### match

▸ **match**(`path`): `boolean`

Returns whether request `path` matches route.

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `path` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:129

---

### param

▸ **param**(`param`, `fn`): [`Layer`](Router.Layer.md)

Run validations on route named parameters.

#### Parameters

| Name    | Type                                                                                                                                                           |
| :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `param` | `string`                                                                                                                                                       |
| `fn`    | [`Middleware`](../modules/Router.md#middleware)<[`DefaultState`](../interfaces/Koa.DefaultState.md), [`DefaultContext`](../interfaces/Koa.DefaultContext.md)\> |

#### Returns

[`Layer`](Router.Layer.md)

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:149

---

### params

▸ **params**(`path`, `captures`, `existingParams?`): `object`

Returns map of URL parameters for given `path` and `paramNames`.

#### Parameters

| Name              | Type                 |
| :---------------- | :------------------- |
| `path`            | `string` \| `RegExp` |
| `captures`        | `string`[]           |
| `existingParams?` | `object`             |

#### Returns

`object`

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:134

---

### setPrefix

▸ **setPrefix**(`prefix`): [`Layer`](Router.Layer.md)

Prefix route path.

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `prefix` | `string` |

#### Returns

[`Layer`](Router.Layer.md)

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:154

---

### url

▸ **url**(`params`): `string`

Generate URL for route using given `params`.

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `params` | `object` |

#### Returns

`string`

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:144
