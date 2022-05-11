import Router from '@koa/router'
import Koa from 'koa'
import type { NextApiRequest, NextApiResponse } from 'next'
import onFinished from 'on-finished'

declare module 'koa' {
  type IncomingMessage = NextApiRequest
  type ServerResponse = NextApiResponse
  interface Request extends Koa.BaseRequest {
    body?: any
  }
}

export { Router }
export { Koa }

export type KoaOptions = {
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

export class KoaApi<
  TState extends Koa.DefaultState = Koa.DefaultState,
  TContext extends Koa.DefaultContext = Koa.DefaultContext
> extends Koa<TState, TContext> {
  router: Router<TState, TContext>

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
      this.use(async (ctx, next) => {
        ctx.request.body = ctx.req.body
        await next()
      })
    }
  }

  /**
   * Run koa api with request and response objects
   * @param req - nextjs request
   * @param res - nextjs response
   */
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
}

/**
 * Helper function for Next.js api routes that automatically runs the KoaApi.
 * It should be used as default export from the Next.js api route file
 * @param koa - KoaApi to run
 */
export function withKoaApi(koa: KoaApi<any, any>) {
  return (req: NextApiRequest, res: NextApiResponse) => koa.run(req, res)
}
