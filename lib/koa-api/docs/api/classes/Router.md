[nextjs-koa-api](../README.md) / Router

# Class: Router<StateT, ContextT\>

## Type parameters

| Name       | Type                                                    |
| :--------- | :------------------------------------------------------ |
| `StateT`   | [`DefaultState`](../interfaces/Koa.DefaultState.md)     |
| `ContextT` | [`DefaultContext`](../interfaces/Koa.DefaultContext.md) |

## Table of contents

### Constructors

- [constructor](Router.md#constructor)

### Properties

- [methods](Router.md#methods)
- [opts](Router.md#opts)
- [params](Router.md#params)
- [stack](Router.md#stack)

### Methods

- [all](Router.md#all)
- [allowedMethods](Router.md#allowedmethods)
- [del](Router.md#del)
- [delete](Router.md#delete)
- [get](Router.md#get)
- [head](Router.md#head)
- [link](Router.md#link)
- [match](Router.md#match)
- [middleware](Router.md#middleware)
- [options](Router.md#options)
- [param](Router.md#param)
- [patch](Router.md#patch)
- [post](Router.md#post)
- [prefix](Router.md#prefix)
- [put](Router.md#put)
- [redirect](Router.md#redirect)
- [register](Router.md#register)
- [route](Router.md#route)
- [routes](Router.md#routes)
- [unlink](Router.md#unlink)
- [url](Router.md#url)
- [use](Router.md#use)
- [url](Router.md#url-1)

## Constructors

### constructor

• **new Router**<`StateT`, `ContextT`\>(`opt?`)

Create a new router.

#### Type parameters

| Name       | Type                                                    |
| :--------- | :------------------------------------------------------ |
| `StateT`   | [`DefaultState`](../interfaces/Koa.DefaultState.md)     |
| `ContextT` | [`DefaultContext`](../interfaces/Koa.DefaultContext.md) |

#### Parameters

| Name   | Type                                                     |
| :----- | :------------------------------------------------------- |
| `opt?` | [`RouterOptions`](../interfaces/Router.RouterOptions.md) |

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:167

## Properties

### methods

• **methods**: `string`[]

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:160

---

### opts

• **opts**: [`RouterOptions`](../interfaces/Router.RouterOptions.md)

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:159

---

### params

• **params**: `object`

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:161

---

### stack

• **stack**: [`Layer`](Router.Layer.md)[]

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:162

## Methods

### all

▸ **all**<`T`, `U`\>(`name`, `path`, ...`middleware`): [`Router`](Router.md)<`StateT`, `ContextT`\>

Register route with all methods.

#### Type parameters

| Name | Type |
| :--- | :--- |
| `T`  | {}   |
| `U`  | {}   |

#### Parameters

| Name            | Type                                                                                 |
| :-------------- | :----------------------------------------------------------------------------------- |
| `name`          | `string`                                                                             |
| `path`          | `string` \| `RegExp`                                                                 |
| `...middleware` | [`Middleware`](../modules/Router.md#middleware)<`StateT` & `T`, `ContextT` & `U`\>[] |

#### Returns

[`Router`](Router.md)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:315

▸ **all**<`T`, `U`\>(`path`, ...`middleware`): [`Router`](Router.md)<`StateT`, `ContextT`\>

#### Type parameters

| Name | Type |
| :--- | :--- |
| `T`  | {}   |
| `U`  | {}   |

#### Parameters

| Name            | Type                                                                                 |
| :-------------- | :----------------------------------------------------------------------------------- |
| `path`          | `string` \| `RegExp` \| (`string` \| `RegExp`)[]                                     |
| `...middleware` | [`Middleware`](../modules/Router.md#middleware)<`StateT` & `T`, `ContextT` & `U`\>[] |

#### Returns

[`Router`](Router.md)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:320

---

### allowedMethods

▸ **allowedMethods**(`options?`): [`Middleware`](../modules/Router.md#middleware)<`StateT`, `ContextT`\>

Returns separate middleware for responding to `OPTIONS` requests with
an `Allow` header containing the allowed methods, as well as responding
with `405 Method Not Allowed` and `501 Not Implemented` as appropriate.

#### Parameters

| Name       | Type                                                                                 |
| :--------- | :----------------------------------------------------------------------------------- |
| `options?` | [`RouterAllowedMethodsOptions`](../interfaces/Router.RouterAllowedMethodsOptions.md) |

#### Returns

[`Middleware`](../modules/Router.md#middleware)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:345

---

### del

▸ **del**<`T`, `U`\>(`name`, `path`, ...`middleware`): [`Router`](Router.md)<`StateT`, `ContextT`\>

Alias for `router.delete()` because delete is a reserved word

#### Type parameters

| Name | Type |
| :--- | :--- |
| `T`  | {}   |
| `U`  | {}   |

#### Parameters

| Name            | Type                                                                                 |
| :-------------- | :----------------------------------------------------------------------------------- |
| `name`          | `string`                                                                             |
| `path`          | `string` \| `RegExp`                                                                 |
| `...middleware` | [`Middleware`](../modules/Router.md#middleware)<`StateT` & `T`, `ContextT` & `U`\>[] |

#### Returns

[`Router`](Router.md)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:263

▸ **del**<`T`, `U`\>(`path`, ...`middleware`): [`Router`](Router.md)<`StateT`, `ContextT`\>

#### Type parameters

| Name | Type |
| :--- | :--- |
| `T`  | {}   |
| `U`  | {}   |

#### Parameters

| Name            | Type                                                                                 |
| :-------------- | :----------------------------------------------------------------------------------- |
| `path`          | `string` \| `RegExp` \| (`string` \| `RegExp`)[]                                     |
| `...middleware` | [`Middleware`](../modules/Router.md#middleware)<`StateT` & `T`, `ContextT` & `U`\>[] |

#### Returns

[`Router`](Router.md)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:268

---

### delete

▸ **delete**<`T`, `U`\>(`name`, `path`, ...`middleware`): [`Router`](Router.md)<`StateT`, `ContextT`\>

HTTP delete method

#### Type parameters

| Name | Type |
| :--- | :--- |
| `T`  | {}   |
| `U`  | {}   |

#### Parameters

| Name            | Type                                                                                 |
| :-------------- | :----------------------------------------------------------------------------------- |
| `name`          | `string`                                                                             |
| `path`          | `string` \| `RegExp`                                                                 |
| `...middleware` | [`Middleware`](../modules/Router.md#middleware)<`StateT` & `T`, `ContextT` & `U`\>[] |

#### Returns

[`Router`](Router.md)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:250

▸ **delete**<`T`, `U`\>(`path`, ...`middleware`): [`Router`](Router.md)<`StateT`, `ContextT`\>

#### Type parameters

| Name | Type |
| :--- | :--- |
| `T`  | {}   |
| `U`  | {}   |

#### Parameters

| Name            | Type                                                                                 |
| :-------------- | :----------------------------------------------------------------------------------- |
| `path`          | `string` \| `RegExp` \| (`string` \| `RegExp`)[]                                     |
| `...middleware` | [`Middleware`](../modules/Router.md#middleware)<`StateT` & `T`, `ContextT` & `U`\>[] |

#### Returns

[`Router`](Router.md)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:255

---

### get

▸ **get**<`T`, `U`\>(`name`, `path`, ...`middleware`): [`Router`](Router.md)<`StateT`, `ContextT`\>

HTTP get method

#### Type parameters

| Name | Type |
| :--- | :--- |
| `T`  | {}   |
| `U`  | {}   |

#### Parameters

| Name            | Type                                                                                 |
| :-------------- | :----------------------------------------------------------------------------------- |
| `name`          | `string`                                                                             |
| `path`          | `string` \| `RegExp`                                                                 |
| `...middleware` | [`Middleware`](../modules/Router.md#middleware)<`StateT` & `T`, `ContextT` & `U`\>[] |

#### Returns

[`Router`](Router.md)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:185

▸ **get**<`T`, `U`\>(`path`, ...`middleware`): [`Router`](Router.md)<`StateT`, `ContextT`\>

#### Type parameters

| Name | Type |
| :--- | :--- |
| `T`  | {}   |
| `U`  | {}   |

#### Parameters

| Name            | Type                                                                                 |
| :-------------- | :----------------------------------------------------------------------------------- |
| `path`          | `string` \| `RegExp` \| (`string` \| `RegExp`)[]                                     |
| `...middleware` | [`Middleware`](../modules/Router.md#middleware)<`StateT` & `T`, `ContextT` & `U`\>[] |

#### Returns

[`Router`](Router.md)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:190

---

### head

▸ **head**<`T`, `U`\>(`name`, `path`, ...`middleware`): [`Router`](Router.md)<`StateT`, `ContextT`\>

HTTP head method

#### Type parameters

| Name | Type |
| :--- | :--- |
| `T`  | {}   |
| `U`  | {}   |

#### Parameters

| Name            | Type                                                                                 |
| :-------------- | :----------------------------------------------------------------------------------- |
| `name`          | `string`                                                                             |
| `path`          | `string` \| `RegExp`                                                                 |
| `...middleware` | [`Middleware`](../modules/Router.md#middleware)<`StateT` & `T`, `ContextT` & `U`\>[] |

#### Returns

[`Router`](Router.md)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:276

▸ **head**<`T`, `U`\>(`path`, ...`middleware`): [`Router`](Router.md)<`StateT`, `ContextT`\>

#### Type parameters

| Name | Type |
| :--- | :--- |
| `T`  | {}   |
| `U`  | {}   |

#### Parameters

| Name            | Type                                                                                 |
| :-------------- | :----------------------------------------------------------------------------------- |
| `path`          | `string` \| `RegExp` \| (`string` \| `RegExp`)[]                                     |
| `...middleware` | [`Middleware`](../modules/Router.md#middleware)<`StateT` & `T`, `ContextT` & `U`\>[] |

#### Returns

[`Router`](Router.md)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:281

---

### link

▸ **link**<`T`, `U`\>(`name`, `path`, ...`middleware`): [`Router`](Router.md)<`StateT`, `ContextT`\>

HTTP link method

#### Type parameters

| Name | Type |
| :--- | :--- |
| `T`  | {}   |
| `U`  | {}   |

#### Parameters

| Name            | Type                                                                                 |
| :-------------- | :----------------------------------------------------------------------------------- |
| `name`          | `string`                                                                             |
| `path`          | `string` \| `RegExp`                                                                 |
| `...middleware` | [`Middleware`](../modules/Router.md#middleware)<`StateT` & `T`, `ContextT` & `U`\>[] |

#### Returns

[`Router`](Router.md)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:224

▸ **link**<`T`, `U`\>(`path`, ...`middleware`): [`Router`](Router.md)<`StateT`, `ContextT`\>

#### Type parameters

| Name | Type |
| :--- | :--- |
| `T`  | {}   |
| `U`  | {}   |

#### Parameters

| Name            | Type                                                                                 |
| :-------------- | :----------------------------------------------------------------------------------- |
| `path`          | `string` \| `RegExp` \| (`string` \| `RegExp`)[]                                     |
| `...middleware` | [`Middleware`](../modules/Router.md#middleware)<`StateT` & `T`, `ContextT` & `U`\>[] |

#### Returns

[`Router`](Router.md)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:229

---

### match

▸ **match**(`path`, `method`): [`RoutesMatch`](../interfaces/Router.RoutesMatch.md)

Match given `path` and return corresponding routes.

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `path`   | `string` |
| `method` | `string` |

#### Returns

[`RoutesMatch`](../interfaces/Router.RoutesMatch.md)

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:395

---

### middleware

▸ **middleware**(): [`Middleware`](../modules/Router.md#middleware)<`StateT`, `ContextT`\>

Returns router middleware which dispatches a route matching the request.

#### Returns

[`Middleware`](../modules/Router.md#middleware)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:338

---

### options

▸ **options**<`T`, `U`\>(`name`, `path`, ...`middleware`): [`Router`](Router.md)<`StateT`, `ContextT`\>

HTTP options method

#### Type parameters

| Name | Type |
| :--- | :--- |
| `T`  | {}   |
| `U`  | {}   |

#### Parameters

| Name            | Type                                                                                 |
| :-------------- | :----------------------------------------------------------------------------------- |
| `name`          | `string`                                                                             |
| `path`          | `string` \| `RegExp`                                                                 |
| `...middleware` | [`Middleware`](../modules/Router.md#middleware)<`StateT` & `T`, `ContextT` & `U`\>[] |

#### Returns

[`Router`](Router.md)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:289

▸ **options**<`T`, `U`\>(`path`, ...`middleware`): [`Router`](Router.md)<`StateT`, `ContextT`\>

#### Type parameters

| Name | Type |
| :--- | :--- |
| `T`  | {}   |
| `U`  | {}   |

#### Parameters

| Name            | Type                                                                                 |
| :-------------- | :----------------------------------------------------------------------------------- |
| `path`          | `string` \| `RegExp` \| (`string` \| `RegExp`)[]                                     |
| `...middleware` | [`Middleware`](../modules/Router.md#middleware)<`StateT` & `T`, `ContextT` & `U`\>[] |

#### Returns

[`Router`](Router.md)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:294

---

### param

▸ **param**(`param`, `middleware`): [`Router`](Router.md)<`StateT`, `ContextT`\>

Run middleware for named route parameters. Useful for auto-loading or validation.

#### Parameters

| Name         | Type                                                         |
| :----------- | :----------------------------------------------------------- |
| `param`      | `string`                                                     |
| `middleware` | [`ParamMiddleware`](../interfaces/Router.ParamMiddleware.md) |

#### Returns

[`Router`](Router.md)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:400

---

### patch

▸ **patch**<`T`, `U`\>(`name`, `path`, ...`middleware`): [`Router`](Router.md)<`StateT`, `ContextT`\>

HTTP patch method

#### Type parameters

| Name | Type |
| :--- | :--- |
| `T`  | {}   |
| `U`  | {}   |

#### Parameters

| Name            | Type                                                                                 |
| :-------------- | :----------------------------------------------------------------------------------- |
| `name`          | `string`                                                                             |
| `path`          | `string` \| `RegExp`                                                                 |
| `...middleware` | [`Middleware`](../modules/Router.md#middleware)<`StateT` & `T`, `ContextT` & `U`\>[] |

#### Returns

[`Router`](Router.md)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:302

▸ **patch**<`T`, `U`\>(`path`, ...`middleware`): [`Router`](Router.md)<`StateT`, `ContextT`\>

#### Type parameters

| Name | Type |
| :--- | :--- |
| `T`  | {}   |
| `U`  | {}   |

#### Parameters

| Name            | Type                                                                                 |
| :-------------- | :----------------------------------------------------------------------------------- |
| `path`          | `string` \| `RegExp` \| (`string` \| `RegExp`)[]                                     |
| `...middleware` | [`Middleware`](../modules/Router.md#middleware)<`StateT` & `T`, `ContextT` & `U`\>[] |

#### Returns

[`Router`](Router.md)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:307

---

### post

▸ **post**<`T`, `U`\>(`name`, `path`, ...`middleware`): [`Router`](Router.md)<`StateT`, `ContextT`\>

HTTP post method

#### Type parameters

| Name | Type |
| :--- | :--- |
| `T`  | {}   |
| `U`  | {}   |

#### Parameters

| Name            | Type                                                                                 |
| :-------------- | :----------------------------------------------------------------------------------- |
| `name`          | `string`                                                                             |
| `path`          | `string` \| `RegExp`                                                                 |
| `...middleware` | [`Middleware`](../modules/Router.md#middleware)<`StateT` & `T`, `ContextT` & `U`\>[] |

#### Returns

[`Router`](Router.md)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:198

▸ **post**<`T`, `U`\>(`path`, ...`middleware`): [`Router`](Router.md)<`StateT`, `ContextT`\>

#### Type parameters

| Name | Type |
| :--- | :--- |
| `T`  | {}   |
| `U`  | {}   |

#### Parameters

| Name            | Type                                                                                 |
| :-------------- | :----------------------------------------------------------------------------------- |
| `path`          | `string` \| `RegExp` \| (`string` \| `RegExp`)[]                                     |
| `...middleware` | [`Middleware`](../modules/Router.md#middleware)<`StateT` & `T`, `ContextT` & `U`\>[] |

#### Returns

[`Router`](Router.md)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:203

---

### prefix

▸ **prefix**(`prefix`): [`Router`](Router.md)<`StateT`, `ContextT`\>

Set the path prefix for a Router instance that was already initialized.

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `prefix` | `string` |

#### Returns

[`Router`](Router.md)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:328

---

### put

▸ **put**<`T`, `U`\>(`name`, `path`, ...`middleware`): [`Router`](Router.md)<`StateT`, `ContextT`\>

HTTP put method

#### Type parameters

| Name | Type |
| :--- | :--- |
| `T`  | {}   |
| `U`  | {}   |

#### Parameters

| Name            | Type                                                                                 |
| :-------------- | :----------------------------------------------------------------------------------- |
| `name`          | `string`                                                                             |
| `path`          | `string` \| `RegExp`                                                                 |
| `...middleware` | [`Middleware`](../modules/Router.md#middleware)<`StateT` & `T`, `ContextT` & `U`\>[] |

#### Returns

[`Router`](Router.md)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:211

▸ **put**<`T`, `U`\>(`path`, ...`middleware`): [`Router`](Router.md)<`StateT`, `ContextT`\>

#### Type parameters

| Name | Type |
| :--- | :--- |
| `T`  | {}   |
| `U`  | {}   |

#### Parameters

| Name            | Type                                                                                 |
| :-------------- | :----------------------------------------------------------------------------------- |
| `path`          | `string` \| `RegExp` \| (`string` \| `RegExp`)[]                                     |
| `...middleware` | [`Middleware`](../modules/Router.md#middleware)<`StateT` & `T`, `ContextT` & `U`\>[] |

#### Returns

[`Router`](Router.md)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:216

---

### redirect

▸ **redirect**(`source`, `destination`, `code?`): [`Router`](Router.md)<`StateT`, `ContextT`\>

Redirect `source` to `destination` URL with optional 30x status `code`.

Both `source` and `destination` can be route names.

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `source`      | `string` |
| `destination` | `string` |
| `code?`       | `number` |

#### Returns

[`Router`](Router.md)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:354

---

### register

▸ **register**(`path`, `methods`, `middleware`, `opts?`): [`Layer`](Router.Layer.md)

Create and register a route.

#### Parameters

| Name         | Type                                                                                                                                               |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| `path`       | `string` \| `RegExp`                                                                                                                               |
| `methods`    | `string`[]                                                                                                                                         |
| `middleware` | [`Middleware`](../modules/Router.md#middleware)<`StateT`, `ContextT`\> \| [`Middleware`](../modules/Router.md#middleware)<`StateT`, `ContextT`\>[] |
| `opts?`      | [`LayerOptions`](../interfaces/Router.LayerOptions.md)                                                                                             |

#### Returns

[`Layer`](Router.Layer.md)

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:359

---

### route

▸ **route**(`name`): `boolean` \| [`Layer`](Router.Layer.md)

Lookup route with given `name`.

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `name` | `string` |

#### Returns

`boolean` \| [`Layer`](Router.Layer.md)

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:369

---

### routes

▸ **routes**(): [`Middleware`](../modules/Router.md#middleware)<`StateT`, `ContextT`\>

Returns router middleware which dispatches a route matching the request.

#### Returns

[`Middleware`](../modules/Router.md#middleware)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:333

---

### unlink

▸ **unlink**<`T`, `U`\>(`name`, `path`, ...`middleware`): [`Router`](Router.md)<`StateT`, `ContextT`\>

HTTP unlink method

#### Type parameters

| Name | Type |
| :--- | :--- |
| `T`  | {}   |
| `U`  | {}   |

#### Parameters

| Name            | Type                                                                                 |
| :-------------- | :----------------------------------------------------------------------------------- |
| `name`          | `string`                                                                             |
| `path`          | `string` \| `RegExp`                                                                 |
| `...middleware` | [`Middleware`](../modules/Router.md#middleware)<`StateT` & `T`, `ContextT` & `U`\>[] |

#### Returns

[`Router`](Router.md)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:237

▸ **unlink**<`T`, `U`\>(`path`, ...`middleware`): [`Router`](Router.md)<`StateT`, `ContextT`\>

#### Type parameters

| Name | Type |
| :--- | :--- |
| `T`  | {}   |
| `U`  | {}   |

#### Parameters

| Name            | Type                                                                                 |
| :-------------- | :----------------------------------------------------------------------------------- |
| `path`          | `string` \| `RegExp` \| (`string` \| `RegExp`)[]                                     |
| `...middleware` | [`Middleware`](../modules/Router.md#middleware)<`StateT` & `T`, `ContextT` & `U`\>[] |

#### Returns

[`Router`](Router.md)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:242

---

### url

▸ **url**(`name`, `params?`, `options?`): `string` \| `Error`

Generate URL for route. Takes either map of named `params` or series of
arguments (for regular expression routes)

router = new Router();
router.get('user', "/users/:id", ...

router.url('user', { id: 3 });
// => "/users/3"

Query can be generated from third argument:

router.url('user', { id: 3 }, { query: { limit: 1 } });
// => "/users/3?limit=1"

router.url('user', { id: 3 }, { query: "limit=1" });
// => "/users/3?limit=1"

#### Parameters

| Name       | Type                                                         |
| :--------- | :----------------------------------------------------------- |
| `name`     | `string`                                                     |
| `params?`  | `any`                                                        |
| `options?` | [`UrlOptionsQuery`](../interfaces/Router.UrlOptionsQuery.md) |

#### Returns

`string` \| `Error`

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:390

---

### use

▸ **use**(...`middleware`): [`Router`](Router.md)<`StateT`, `ContextT`\>

Use given middleware.

Middleware run in the order they are defined by `.use()`. They are invoked
sequentially, requests start at the first middleware and work their way
"down" the middleware stack.

#### Parameters

| Name            | Type                                                                     |
| :-------------- | :----------------------------------------------------------------------- |
| `...middleware` | [`Middleware`](../modules/Router.md#middleware)<`StateT`, `ContextT`\>[] |

#### Returns

[`Router`](Router.md)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:176

▸ **use**(`path`, ...`middleware`): [`Router`](Router.md)<`StateT`, `ContextT`\>

#### Parameters

| Name            | Type                                                                     |
| :-------------- | :----------------------------------------------------------------------- |
| `path`          | `string` \| `RegExp` \| `string`[]                                       |
| `...middleware` | [`Middleware`](../modules/Router.md#middleware)<`StateT`, `ContextT`\>[] |

#### Returns

[`Router`](Router.md)<`StateT`, `ContextT`\>

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:177

---

### url

▸ `Static` **url**(`path`, `params`): `string`

Generate URL from url pattern and given `params`.

#### Parameters

| Name     | Type                 |
| :------- | :------------------- |
| `path`   | `string` \| `RegExp` |
| `params` | `object`             |

#### Returns

`string`

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:405
