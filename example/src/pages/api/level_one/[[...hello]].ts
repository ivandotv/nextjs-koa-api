import { Koa, KoaApi, Router, withKoaApi } from 'nextjs-koa-api'
import koaBody from 'koa-body'

interface ApiState extends Koa.DefaultState {
  seesion: boolean
}
interface ApiContext extends Koa.Context {
  user: { name: string }
}
const api = new KoaApi<ApiState, ApiContext>({
  attachBody: true,
  router: {
    prefix: '/api/level_one'
  }
})

api.use(async (ctx, next) => {
  // ctx.user.name
  // ctx.state.seesion
  try {
    await next()
  } catch (err: any) {
    //catch all errors
    err as Error
    ctx.status = err.statusCode || err.status || 500
    ctx.body = {
      message: err.message
    }
  }
})

api.router
  .get('/', (ctx) => {
    ctx.body = {
      method: 'GET',
      route: '/'
    }
    ctx.cookies.set('my_cookie', 'my_cookie_value')
  })
  .post('/hello', koaBody(), (ctx) => {
    ctx.body = ctx.request.body
  })
  .get('/throw', () => {
    throw new Error('my error')
  })

// create nested router
const subRouter = new Router<ApiState, ApiContext>().get('/', (ctx) => {
  ctx.body = `nested params: ${JSON.stringify(ctx.params)}`
})

//mount nested router
//https://github.com/koajs/router/blob/master/API.md#nested-routers
api.router.use('/nested/:data', subRouter.routes(), subRouter.allowedMethods())

export default withKoaApi(api)

export const config = {
  api: {
    bodyParser: false
  }
}
