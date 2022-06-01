nextjs-koa-api

# nextjs-koa-api

## Table of contents

### Namespaces

- [Koa](modules/Koa.md)
- [Router](modules/Router.md)

### Classes

- [Koa](classes/Koa.md)
- [KoaApi](classes/KoaApi.md)
- [Router](classes/Router.md)

### Type aliases

- [KoaApiOptions](README.md#koaapioptions)
- [KoaOptions](README.md#koaoptions)

### Functions

- [attachRouter](README.md#attachrouter)
- [withKoaApi](README.md#withkoaapi)

## Type aliases

### KoaApiOptions

Ƭ **KoaApiOptions**: `Object`

Koa API options

#### Type declaration

| Name                    | Type                                                                              | Description                                                                            |
| :---------------------- | :-------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------- |
| `attachBody?`           | `boolean`                                                                         | if parsed body from Nextjs request should be attached to ctx.request                   |
| `koa?`                  | [`KoaOptions`](README.md#koaoptions)                                              | original koa options                                                                   |
| `router?`               | [`RouterOptions`](interfaces/Router.RouterOptions.md)                             | [Router.RouterOptions](interfaces/Router.RouterOptions.md)                             |
| `routerAllowedMethods?` | [`RouterAllowedMethodsOptions`](interfaces/Router.RouterAllowedMethodsOptions.md) | [Router.RouterAllowedMethodsOptions](interfaces/Router.RouterAllowedMethodsOptions.md) |

#### Defined in

[lib/koa-api/src/koa-api.ts:33](https://github.com/ivandotv/nextjs-koa-api/blob/5ef1256/lib/koa-api/src/koa-api.ts#L33)

---

### KoaOptions

Ƭ **KoaOptions**: `Object`

#### Type declaration

| Name               | Type       | Description                                                      |
| :----------------- | :--------- | :--------------------------------------------------------------- |
| `env?`             | `string`   | defaulting to the NODE_ENV or "development"                      |
| `keys?`            | `string`[] | array of signed cookie keys                                      |
| `maxIpsCount?`     | `number`   | max ips read from proxy ip header, default to 0 (means infinity) |
| `proxy?`           | `boolean`  | when true proxy header fields will be trusted                    |
| `proxyIpHeader?`   | `string`   | proxy ip header, default to X-Forwarded-For                      |
| `subdomainOffset?` | `number`   | offset of .subdomains to ignore, default to 2                    |

#### Defined in

[lib/koa-api/src/koa-api.ts:17](https://github.com/ivandotv/nextjs-koa-api/blob/5ef1256/lib/koa-api/src/koa-api.ts#L17)

## Functions

### attachRouter

▸ **attachRouter**(`path`, `app`, `router`): `void`

Attaches router to a particular path. Internally it setups a prefix on the router, and calls `router.routes()` and `router.allowedMethods()`

#### Parameters

| Name     | Type                                                                                                                                   | Description                  |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------- |
| `path`   | `string`                                                                                                                               | path to attach the router to |
| `app`    | [`KoaApi`](classes/KoaApi.md)<[`DefaultState`](interfaces/Koa.DefaultState.md), [`DefaultContext`](interfaces/Koa.DefaultContext.md)\> | -                            |
| `router` | [`Router`](classes/Router.md)<[`DefaultState`](interfaces/Koa.DefaultState.md), [`DefaultContext`](interfaces/Koa.DefaultContext.md)\> | router to attach             |

#### Returns

`void`

#### Defined in

[lib/koa-api/src/koa-api.ts:108](https://github.com/ivandotv/nextjs-koa-api/blob/5ef1256/lib/koa-api/src/koa-api.ts#L108)

---

### withKoaApi

▸ **withKoaApi**(`koa`): (`req`: `NextApiRequest`, `res`: `NextApiResponse`<`any`\>) => `Promise`<`unknown`\>

Helper function for Next.js api routes that automatically runs the KoaApi.
It should be used as default export from the Next.js api route file

#### Parameters

| Name  | Type                                         | Description   |
| :---- | :------------------------------------------- | :------------ |
| `koa` | [`KoaApi`](classes/KoaApi.md)<`any`, `any`\> | KoaApi to run |

#### Returns

`fn`

▸ (`req`, `res`): `Promise`<`unknown`\>

##### Parameters

| Name  | Type                      |
| :---- | :------------------------ |
| `req` | `NextApiRequest`          |
| `res` | `NextApiResponse`<`any`\> |

##### Returns

`Promise`<`unknown`\>

#### Defined in

[lib/koa-api/src/koa-api.ts:99](https://github.com/ivandotv/nextjs-koa-api/blob/5ef1256/lib/koa-api/src/koa-api.ts#L99)
