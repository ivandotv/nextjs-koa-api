[nextjs-koa-api](../README.md) / Koa

# Namespace: Koa

## Table of contents

### Interfaces

- [BaseContext](../interfaces/Koa.BaseContext.md)
- [BaseRequest](../interfaces/Koa.BaseRequest.md)
- [BaseResponse](../interfaces/Koa.BaseResponse.md)
- [Context](../interfaces/Koa.Context.md)
- [DefaultContext](../interfaces/Koa.DefaultContext.md)
- [DefaultState](../interfaces/Koa.DefaultState.md)
- [ExtendableContext](../interfaces/Koa.ExtendableContext.md)
- [Request](../interfaces/Koa.Request.md)
- [Response](../interfaces/Koa.Response.md)

### Type aliases

- [DefaultContextExtends](Koa.md#defaultcontextextends)
- [DefaultStateExtends](Koa.md#defaultstateextends)
- [IncomingMessage](Koa.md#incomingmessage)
- [Middleware](Koa.md#middleware)
- [Next](Koa.md#next)
- [ParameterizedContext](Koa.md#parameterizedcontext)
- [ServerResponse](Koa.md#serverresponse)

### Variables

- [HttpError](Koa.md#httperror)

## Type aliases

### DefaultContextExtends

Ƭ **DefaultContextExtends**: `Object`

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:547

---

### DefaultStateExtends

Ƭ **DefaultStateExtends**: `any`

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:541

---

### IncomingMessage

Ƭ **IncomingMessage**: `NextApiRequest`

#### Defined in

[lib/koa-api/src/koa-api.ts:7](https://github.com/ivandotv/nextjs-koa-api/blob/5ef1256/lib/koa-api/src/koa-api.ts#L7)

---

### Middleware

Ƭ **Middleware**<`StateT`, `ContextT`, `ResponseBodyT`\>: `compose.Middleware`<[`ParameterizedContext`](Koa.md#parameterizedcontext)<`StateT`, `ContextT`, `ResponseBodyT`\>\>

#### Type parameters

| Name            | Type                                                    |
| :-------------- | :------------------------------------------------------ |
| `StateT`        | [`DefaultState`](../interfaces/Koa.DefaultState.md)     |
| `ContextT`      | [`DefaultContext`](../interfaces/Koa.DefaultContext.md) |
| `ResponseBodyT` | `any`                                                   |

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:558

---

### Next

Ƭ **Next**: () => `Promise`<`any`\>

#### Type declaration

▸ (): `Promise`<`any`\>

##### Returns

`Promise`<`any`\>

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:743

---

### ParameterizedContext

Ƭ **ParameterizedContext**<`StateT`, `ContextT`, `ResponseBodyT`\>: [`ExtendableContext`](../interfaces/Koa.ExtendableContext.md) & { `state`: `StateT` } & `ContextT` & { `body`: `ResponseBodyT` ; `response`: { `body`: `ResponseBodyT` } }

#### Type parameters

| Name            | Type                                                    |
| :-------------- | :------------------------------------------------------ |
| `StateT`        | [`DefaultState`](../interfaces/Koa.DefaultState.md)     |
| `ContextT`      | [`DefaultContext`](../interfaces/Koa.DefaultContext.md) |
| `ResponseBodyT` | `unknown`                                               |

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:736

---

### ServerResponse

Ƭ **ServerResponse**: `NextApiResponse`

#### Defined in

[lib/koa-api/src/koa-api.ts:8](https://github.com/ivandotv/nextjs-koa-api/blob/5ef1256/lib/koa-api/src/koa-api.ts#L8)

## Variables

### HttpError

• `Const` **HttpError**: typeof `HttpErrors.HttpError`

A re-export of `HttpError` from the `http-error` package.

This is the error type that is thrown by `ctx.assert()` and `ctx.throw()`.

#### Defined in

node_modules/.pnpm/@types+koa@2.13.4/node_modules/@types/koa/index.d.ts:750
