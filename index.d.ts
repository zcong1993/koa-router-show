import Router from 'koa-router'

declare function KoaRouterShow (router: Router, opts?: KoaRouterShow.Opts): void

declare namespace KoaRouterShow {
  interface Opts {
    path: string
    addRouter: boolean
  }
}

export = KoaRouterShow
