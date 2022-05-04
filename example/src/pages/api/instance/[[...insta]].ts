// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { KoaApi, withKoaApi } from '../../../koa-test'

const koa = new KoaApi({
  attachBody: true,
  router: {
    prefix: '/api/instance'
  }
})

// koa.use((ctx) => {
//   console.log('use -koa ')
//   ctx.body = 'hello from USE'
// })

koa.router.get('/', (ctx, next) => {
  // ctx.body = ctx.req.body
  ctx.body = ctx.request.body
  next()
})

// koa.router.get('/hello', (ctx, next) => {
//   ctx.body = 'Hello from instance'
//   next()
// })

// console.log('API handler')
// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   return koa.run(req, res)
// }
export default withKoaApi(koa)
