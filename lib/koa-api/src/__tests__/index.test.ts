import type { NextApiRequest, NextApiResponse } from 'next'
import request from 'supertest'
import { KoaApi, KoaApiOptions, Router, withKoaApi } from '../index'

describe('Koa Api', () => {
  describe('Request body', () => {
    test('body data is attached from original request', async () => {
      const bodyData = { name: 'ivan' }
      const api = new KoaApi()

      api.use((ctx) => {
        ctx.body = ctx.request.body
      })

      const result = await request(
        (req: NextApiRequest, res: NextApiResponse) => {
          req.body = bodyData

          api.run(req, res)
        }
      ).get('/')

      expect(result.body).toEqual(bodyData)
    })

    test('body data is not attached', async () => {
      const bodyData = { name: 'ivan' }
      const api = new KoaApi({ attachBody: false })

      api.use((ctx) => {
        ctx.body = ctx.request.body
      })

      const result = await request(
        (req: NextApiRequest, res: NextApiResponse) => {
          req.body = bodyData
          api.run(req, res)
        }
      ).get('/')

      expect(result.body).toEqual({})
    })
  })

  describe('Router', () => {
    test('router options are passed down to the router', () => {
      const routerOptions: KoaApiOptions['router'] = {
        prefix: '/abc',
        strict: true
      }
      const api = new KoaApi({ router: routerOptions })

      expect(api.router.opts).toEqual(routerOptions)
    })

    test('handle method not allowed', async () => {
      const api = new KoaApi()
      const getHello = jest.fn()

      api.router.get('/hello', getHello)

      const result = await request(withKoaApi(api)).post('/hello')

      expect(getHello).not.toHaveBeenCalled()
      expect(result.status).toBe(405)
    })

    test('handle route not implemented', async () => {
      const api = new KoaApi()
      const getHello = jest.fn()

      api.router.get('/hello', getHello)

      const result = await request(withKoaApi(api)).search('/hello')

      expect(result.status).toBe(501)
    })

    describe('Attach router', () => {
      test('attach a custom router', async () => {
        const api = new KoaApi()
        const router = new Router()
        const mountPath = '/some-path/for-router'
        const responseBody = { msg: 'hello' }

        router.post('/', async (ctx, next) => {
          ctx.body = responseBody

          return next()
        })

        api.attachRouter(mountPath, router)

        const result = await request(withKoaApi(api)).post(mountPath)

        expect(result.body).toEqual(responseBody)
        expect(result.status).toBe(200)
      })

      test('attached router can respond to not allowed methods', async () => {
        const api = new KoaApi()
        const router = new Router()
        const mountPath = '/some-path/for-router'

        router.get('/', async (ctx, next) => {
          ctx.body = { msg: 'hello' }

          return next()
        })

        api.attachRouter(mountPath, router)

        const result = await request(withKoaApi(api)).post(mountPath)

        expect(result.status).toBe(405)
      })
    })
  })
})
