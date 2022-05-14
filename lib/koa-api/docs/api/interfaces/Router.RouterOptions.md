[nextjs-koa-api](../README.md) / [Router](../modules/Router.md) / RouterOptions

# Interface: RouterOptions

[Router](../modules/Router.md).RouterOptions

## Table of contents

### Properties

- [methods](Router.RouterOptions.md#methods)
- [prefix](Router.RouterOptions.md#prefix)
- [routerPath](Router.RouterOptions.md#routerpath)
- [sensitive](Router.RouterOptions.md#sensitive)
- [strict](Router.RouterOptions.md#strict)

## Properties

### methods

• `Optional` **methods**: `string`[]

Methods which should be supported by the router.

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:31

---

### prefix

• `Optional` **prefix**: `string`

Prefix for all routes.

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:27

---

### routerPath

• `Optional` **routerPath**: `string`

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:32

---

### sensitive

• `Optional` **sensitive**: `boolean`

Whether or not routing should be case-sensitive.

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:36

---

### strict

• `Optional` **strict**: `boolean`

Whether or not routes should matched strictly.

If strict matching is enabled, the trailing slash is taken into
account when matching routes.

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:43
