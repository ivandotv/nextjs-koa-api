import Router, { RouterOptions } from '@koa/router'
import { default as Koa } from 'koa'
import type { NextApiRequest, NextApiResponse } from 'next'

declare module 'koa' {
  type IncomingMessage = NextApiRequest
  type ServerResponse = NextApiResponse
  interface Request extends Koa.BaseRequest {
    body?: any
  }
}

type KoaOptions = {
  env?: string | undefined
  keys?: string[] | undefined
  proxy?: boolean | undefined
  subdomainOffset?: number | undefined
  proxyIpHeader?: string | undefined
  maxIpsCount?: number | undefined
}

type KoaApiOptions = {
  koa?: KoaOptions
  attachBody?: boolean
  router?: Router.RouterOptions
  routerAllowedMethods?: Router.RouterAllowedMethodsOptions
}

export class KoaApi extends Koa {
  router: Router

  constructor(options: KoaApiOptions = {}) {
    super(options.koa)

    const { router: routerOpts = {} } = options || {}
    const opts: KoaApiOptions = {
      ...options,
      attachBody: options?.attachBody ?? true,
      router: {
        ...routerOpts,
        prefix: routerOpts.prefix ?? '/api'
      }
    }

    this.router = new Router(opts.router)
    if (opts.attachBody) {
      this.router.use((ctx, next) => {
        console.log('parse body ', ctx.req.body)
        ctx.request.body = ctx.req.body
        next()
      })
    }

    this.use(this.router.routes()).use(
      this.router.allowedMethods(opts.routerAllowedMethods)
    )
  }

  run(req: NextApiRequest, res: NextApiResponse) {
    return this.callback()(req, res)
  }

  createRouter(opts?: RouterOptions) {
    return new Router(opts)
  }
}

export function withKoaApi(koa: KoaApi) {
  return (req: NextApiRequest, res: NextApiResponse) => koa.run(req, res)
}
