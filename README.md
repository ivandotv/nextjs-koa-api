# Next.js Koa API

<a href="https://img.shields.io/github/workflow/status/ivandotv/nextjs-koa-api/Test"><img src="https://img.shields.io/github/workflow/status/ivandotv/nextjs-koa-api/Test" alt="workflow status"></a>
<a href="https://app.codecov.io/gh/ivandotv/nextjs-koa-api"><img src="https://img.shields.io/codecov/c/gh/ivandotv/nextjs-koa-api" alt="code coverage"></a>
<a href="https://github.com/ivandotv/nextjs-koa-api/blob/main/LICENSE"><img src="https://img.shields.io/github/license/ivandotv/nextjs-koa-api" alt="sofware licence"></a>

<!-- toc -->

- [Introduction](#introduction)
- [Motivation](#motivation)
  - [Why Koa](#why-koa)
- [Installation](#installation)
- [Usage](#usage)
  - [Routing](#routing)
  - [Attaching a custom router](#attaching-a-custom-router)
  - [Nextjs request and response objects](#nextjs-request-and-response-objects)
    - [Body data](#body-data)
- [Typescript](#typescript)
- [Testing](#testing)
- [Example](#example)
- [License](#license)
- [Api Docs](#api-docs)

<!-- tocstop -->

## Introduction

Nextjs Koa API is a library that packages [Koa.js](https://github.com/koajs/koa) framework for use with the Next.js API routes.

## Motivation

Using Next.js routes is pretty straightforward, however, doing something like REST API with CRUD routes requires a more complicated setup. You end up using the `switch` statement to check which `http method` is used and then which `url` is requested, and soon you end up with a spaghetti code in your API route that is hard to maintain and test. It would be great if we could use tried and tested `HTTP` framework directly inside the routes.

So I decided to set up Koa.js to run inside the Next.js API route.

### Why Koa

There are a lot of frameworks in Node.js land for handling HTTP responses, I've decided on Koa.js because it supports `async` middleware out of the box. And the way the middleware is run via the [`onion model`](https://itnext.io/how-koa-middleware-works-f4386b5573c) is superior to other frameworks.
Koa.js source is very small and it can be initialized fast, which is important for a serverless function.

## Installation

```sh
npm install nextjs-koa-api
```

## Usage

This library bundles [Koa.js](https://github.com/koajs/koa) and [Koa router](https://github.com/koajs/router) in one easy to use class. It is important to note that nothing is changed in regards to working with Koa or Koa Router.

The simplest example that would mimic the original Next.js api router is this:

```ts
//pages/api/[[...demo]].ts
import { KoaApi, withKoaApi } from 'nextjs-koa-api'

const api = new KoaApi({ router: { prefix: '/api' } })

api.use((ctx) => {
  ctx.body = 'Hello World'
})

//use helper function
export default withKoaApi(api)

//or the standard way
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return api.run(req, res)
}
```

`KoaApi` class extends `Koa` so all `Koa` methods are available. It does not modify Koa or override any of its methods.

### Routing

When you create a new `KoaApi` instance you have `Koa Router` available as the `router` property on the instance. The router is connected to the `KoaApi` instance so all that is left is to attach the routes.

```ts
//pages/api/[[...demo]].ts
const api = new KoaApi({ router: { prefix: '/api' } })

api.router
  .get('/', (ctx, next) => {})
  .post('/', (ctx, next) => {})
  .delete('/', (ctx, next) => {})
```

In the above example the `{ prefix: '/api' }` that is passed to the `KoaApi` instance is an option on the router that enables you to prefix
the router routes with a part of the `url`.
so instead of writing:

```ts
api.router.get('/api', (ctx, next) => {}).delete('/api', (ctx, next) => {})
```

we can write:

```ts
api.router.get('/', (ctx, next) => {}).delete('/', (ctx, next) => {})
```

If your api file is nested deep: `pages/api/dir_one/dir_two/[[...]].ts`
using te prefix makes using routes a lot simpler: `prefix: api/dir_one/dir_two`.

You can also work with [nested routes](https://github.com/koajs/router/blob/master/API.md#nested-routers) by creating and mounting new routers.
You can get a new router like this:

```
import {Router} from 'nextjs-koa-api`

const router = new Router()
```

For more info check out [Koa Router docs](https://github.com/koajs/router/blob/master/API.md#nested-routers)

### Attaching a custom router

There is a convenient method for attaching a custom router. Internally it sets the `prefix` path on the router,and calls `router.routes()` and `router.allowedMethods()`

```ts
import {Router, KoaApi} from 'nextjs-koa-api`

const api = new KoaApi()
const router = new Router()

router.get('/',(ctx,next)=>{

  ctx.body = 'hello'

  return next()
})

api.attachRouter('/some/deep-path', router)

```

> Router options that are passed to the `KoaApi` are not associated with the custom router. They are only
> applicable to the _default_ router that is created.

### Nextjs request and response objects

Just like in the regular Kao.js app where the Node `request` and `response` objects are available on the `context` object via the `req` and `res` properties, the same is with the `KoaApi`

```ts
api.use((ctx) => {
  ctx.req // nextjs request
  ctx.res // nextjs response

  ctx.request //Koa request
  ctx.response // Koa response
})
```

#### Body data

Nextjs automatically [parses incoming body data](https://nextjs.org/docs/api-routes/api-middlewares) and sets it up on the `req.body`. With `KoaApi` data from the `req.body`(`ctx.req`) will also be available on the `ctx.request.body`. That means that for most cases you don't need other body parsing middleware.

If you want to disable setting the `body data` on `ctx.request.body` you can do that while creating the `KoaApi` instance.

```ts
new KoaApi({ attachBody: false })
```

## Typescript

This library exports everything from the Kao and Koa Router libraries, which includes all the types.

```ts
import { Koa, KoaApi, Router, withKoaApi } from 'nextjs-koa-api'

interface ApiState extends Koa.DefaultState {
  seesion: boolean
}
interface ApiContext extends Koa.Context {
  user: { name: string }
}
const api = new KoaApi<ApiState, ApiContext>()

api.use(async (ctx, next) => {
  ctx.user.name
  ctx.state.seesion
})
```

## Testing

Testing can be done with `supertest`(https://github.com/visionmedia/supertest)

```ts
import request from 'supertest'

test('status is 200', async () => {
  const api = new KoaApi()

  api.router.get('/hello', (ctx) => {
    ctx.body = 'hello'
  })

  const result = await request(withKoaApi(api)).post('/hello')

  expect(result.status).toBe(200)
})
```

There is also `@shopify/jest-koa-mocks`(https://github.com/Shopify/quilt/blob/main/packages/jest-koa-mocks/README.md) to easily stub Koa context and cookies.

## Example

There is a [example](./example/) directory in this repository, which is a Next.js app with one exported api route that uses `KoaApi`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Api Docs

Automatically generated API documentation can be found [here](./lib//koa-api/docs/api/README.md)
