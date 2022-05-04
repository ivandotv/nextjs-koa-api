// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'
// import Koa from 'koa'
// import Router from '@koa/router'

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const app = new Koa()
//   const router = new Router({ prefix: '/api' }) //default prefix api

//   app.use(router.routes()).use(
//     router.allowedMethods({
//       notImplemented: () => {
//         'nije implementirano'
//       },
//       methodNotAllowed: () => {
//         'nije dozvoljeno!'
//       }
//     })
//   )

//   // router.use(koaBody())
//   router.use(async (ctx, next) => {
//     ctx.body = `${ctx.body ? ctx.body : ''} router use`
//     ctx.req.query
//     // ctx.req.coo
//     ctx.res.status
//     ctx.response.status
//     ctx.request.query
//     ctx.request.body
//     await next()
//     ctx.body = `${ctx.body ? ctx.body : ''} router after`
//   // })

//   router.get('/api', (ctx) => {
//     ctx.body = 'api root'

//     // ctx.res.se
//   })
//   router.get('/hello', (ctx, next) => {
//     ctx.body = `${ctx.body ? ctx.body : ''} Hello`
//     // ctx.body = JSON.stringify(ctx.request.body)
//     // throw new Error('whhhaaat?')
//     // ctx.res.se
//     next()
//   })

//   router.post('/hello', (ctx, next) => {
//     // ctx.body = `${ctx.body ? ctx.body : ''} Hello`
//     // ctx.body = JSON.stringify(ctx.req.body)
//     // ctx.body = JSON.stringify(ctx.req.body)
//     ctx.body = ctx.req.body
//     console.log('body name ', ctx.req.body)
//     // ctx.body = 'done'
//     // ctx.body = 'post hello'
//     // throw new Error('whhhaaat?')
//     // ctx.res.se
//     // next()
//   })
//   router.use((ctx, next) => {
//     ctx.body = ctx.body + 'some more data'
//     next()
//   })
//   const handler = app.callback()

//   return handler(req, res)
// }
