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
  /** defaulting to the NODE_ENV or "development"*/
  env?: string
  /**  array of signed cookie keys*/
  keys?: string[]
  /** when true proxy header fields will be trusted*/
  proxy?: boolean
  /** offset of .subdomains to ignore, default to 2*/
  subdomainOffset?: number
  /** proxy ip header, default to X-Forwarded-For*/
  proxyIpHeader?: string
  /** max ips read from proxy ip header, default to 0 (means infinity)*/
  maxIpsCount?: number
}

/** Koa API options*/
export type KoaApiOptions = {
  /** original koa options*/
  koa?: KoaOptions
  /** if parsed body from Nextjs request should be attached to ctx.request */
  attachBody?: boolean
  /** {@link Router.RouterOptions}*/
  router?: Router.RouterOptions
  /** {@link Router.RouterAllowedMethodsOptions | Router.RouterAllowedMethodsOptions}*/
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

        return next()
      })
    }
  }

  /**
   * Attaches router to a particular path. Internally it setups a prefix on the router, and calls `router.routes()` and `router.allowedMethods()`
   * @param path - path to attach the router to
   * @param router - router to attach
   */
  attachRouter(path: string, router: Router): this {
    this.use(router.prefix(path).routes()).use(router.allowedMethods())

    return this
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
