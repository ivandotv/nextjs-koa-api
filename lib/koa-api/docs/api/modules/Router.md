[nextjs-koa-api](../README.md) / Router

# Namespace: Router

## Table of contents

### Classes

- [Layer](../classes/Router.Layer.md)
- [ParamName](../classes/Router.ParamName.md)

### Interfaces

- [LayerOptions](../interfaces/Router.LayerOptions.md)
- [ParamMiddleware](../interfaces/Router.ParamMiddleware.md)
- [RouterAllowedMethodsOptions](../interfaces/Router.RouterAllowedMethodsOptions.md)
- [RouterOptions](../interfaces/Router.RouterOptions.md)
- [RouterParamContext](../interfaces/Router.RouterParamContext.md)
- [RoutesMatch](../interfaces/Router.RoutesMatch.md)
- [UrlOptionsQuery](../interfaces/Router.UrlOptionsQuery.md)

### Type aliases

- [Middleware](Router.md#middleware)
- [RouterContext](Router.md#routercontext)

## Type aliases

### Middleware

Ƭ **Middleware**<`StateT`, `ContextT`\>: [`Middleware`](Koa.md#middleware)<`StateT`, `ContextT` & [`RouterParamContext`](../interfaces/Router.RouterParamContext.md)<`StateT`, `ContextT`\>\>

#### Type parameters

| Name       | Type                                                    |
| :--------- | :------------------------------------------------------ |
| `StateT`   | [`DefaultState`](../interfaces/Koa.DefaultState.md)     |
| `ContextT` | [`DefaultContext`](../interfaces/Koa.DefaultContext.md) |

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:64

---

### RouterContext

Ƭ **RouterContext**<`StateT`, `ContextT`\>: [`ParameterizedContext`](Koa.md#parameterizedcontext)<`StateT`, `ContextT` & [`RouterParamContext`](../interfaces/Router.RouterParamContext.md)<`StateT`, `ContextT`\>\>

#### Type parameters

| Name       | Type                                                    |
| :--------- | :------------------------------------------------------ |
| `StateT`   | [`DefaultState`](../interfaces/Koa.DefaultState.md)     |
| `ContextT` | [`DefaultContext`](../interfaces/Koa.DefaultContext.md) |

#### Defined in

node_modules/.pnpm/@types+koa__router@8.0.11/node_modules/@types/koa\_\_router/index.d.ts:62
