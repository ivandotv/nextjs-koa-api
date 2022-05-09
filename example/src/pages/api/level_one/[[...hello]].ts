import { KoaApi, withKoaApi } from 'nextjs-koa-api'

const api = new KoaApi({
  router: {
    prefix: '/api/level_one'
  }
})

api.use(async (ctx, next) => {
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
  .post('/hello', (ctx) => {
    ctx.body = ctx.request.body
  })
  .get('/throw', () => {
    throw new Error('my error')
  })

// create nested router
const subRouter = api.createNewRouter().get('/', (ctx) => {
  ctx.body = `nested params: ${JSON.stringify(ctx.params)}`
})

//mount nested router
//https://github.com/koajs/router/blob/master/API.md#nested-routers
api.router.use('/nested/:data', subRouter.routes(), subRouter.allowedMethods())

export default withKoaApi(api)
