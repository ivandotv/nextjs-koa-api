import Router, { RouterOptions } from '@koa/router'
import { default as Koa } from 'koa'
import type { NextApiRequest, NextApiResponse } from 'next'
import onFinished from 'on-finished'

declare module 'koa' {
  type IncomingMessage = NextApiRequest
  type ServerResponse = NextApiResponse
  interface Request extends Koa.BaseRequest {
    body?: any
  }
}

type KoaOptions = {
  env?: string
  keys?: string[]
  proxy?: boolean
  subdomainOffset?: number
  proxyIpHeader?: string
  maxIpsCount?: number
}

export type KoaApiOptions = {
  koa?: KoaOptions
  attachBody?: boolean
  router?: Router.RouterOptions
  routerAllowedMethods?: Router.RouterAllowedMethodsOptions
}

export class KoaApi extends Koa {
  router: Router

  protected firstRun = true

  protected options: KoaApiOptions

  constructor(options: KoaApiOptions = {}) {
    super(options.koa)

    this.options = {
      ...options,
      attachBody: options?.attachBody ?? true
    }

    this.router = new Router(this.options.router)

    if (this.options.attachBody) {
      this.use((ctx, next) => {
        ctx.request.body = ctx.req.body
        next()
      })
    }
  }

  async run(req: NextApiRequest, res: NextApiResponse) {
    const p = new Promise((resolve) => onFinished(res, resolve))

    if (this.firstRun) {
      this.firstRun = false
      this.use(this.router.routes()).use(
        this.router.allowedMethods(this.options.routerAllowedMethods)
      )
    }

    this.callback()(req, res) as unknown as Promise<void>

    return p
  }

  createNewRouter(opts?: RouterOptions) {
    return new Router(opts)
  }
}

export function withKoaApi(koa: KoaApi) {
  return (req: NextApiRequest, res: NextApiResponse) => koa.run(req, res)
}
