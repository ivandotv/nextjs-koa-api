[nextjs-koa-api](../README.md) / [Router](../modules/Router.md) / RouterParamContext

# Interface: RouterParamContext<StateT, ContextT\>

[Router](../modules/Router.md).RouterParamContext

## Type parameters

| Name       | Type                                      |
| :--------- | :---------------------------------------- |
| `StateT`   | [`DefaultState`](Koa.DefaultState.md)     |
| `ContextT` | [`DefaultContext`](Koa.DefaultContext.md) |

## Table of contents

### Properties

- [\_matchedRoute](Router.RouterParamContext.md#_matchedroute)
- [\_matchedRouteName](Router.RouterParamContext.md#_matchedroutename)
- [params](Router.RouterParamContext.md#params)
- [router](Router.RouterParamContext.md#router)

## Properties

### \_matchedRoute

• **\_matchedRoute**: `undefined` \| `string` \| `RegExp`

Matched route

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:58

---

### \_matchedRouteName

• **\_matchedRouteName**: `undefined` \| `string`

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:59

---

### params

• **params**: `Record`<`string`, `string`\>

url params

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:50

---

### router

• **router**: [`Router`](../classes/Router.md)<`StateT`, `ContextT`\>

the router instance

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:54
