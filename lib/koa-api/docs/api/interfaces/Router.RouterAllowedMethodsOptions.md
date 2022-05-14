[nextjs-koa-api](../README.md) / [Router](../modules/Router.md) / RouterAllowedMethodsOptions

# Interface: RouterAllowedMethodsOptions

[Router](../modules/Router.md).RouterAllowedMethodsOptions

## Table of contents

### Properties

- [methodNotAllowed](Router.RouterAllowedMethodsOptions.md#methodnotallowed)
- [notImplemented](Router.RouterAllowedMethodsOptions.md#notimplemented)
- [throw](Router.RouterAllowedMethodsOptions.md#throw)

## Properties

### methodNotAllowed

• `Optional` **methodNotAllowed**: () => `any`

#### Type declaration

▸ (): `any`

throw the returned value in place of the default MethodNotAllowed error

##### Returns

`any`

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:82

---

### notImplemented

• `Optional` **notImplemented**: () => `any`

#### Type declaration

▸ (): `any`

throw the returned value in place of the default NotImplemented error

##### Returns

`any`

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:78

---

### throw

• `Optional` **throw**: `boolean`

throw error instead of setting status and header

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:74
