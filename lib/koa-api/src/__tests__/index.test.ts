import type { NextApiRequest, NextApiResponse } from 'next'
import request from 'supertest'
import { KoaApi, KoaApiOptions, withKoaApi } from '../index'

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

    test('can create new router', () => {
      const api = new KoaApi()

      const router = api.createNewRouter()
      expect(router).toBeInstanceOf(router.constructor)
    })
  })
})
