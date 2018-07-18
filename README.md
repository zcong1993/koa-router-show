
# koa-router-show

[![NPM version](https://img.shields.io/npm/v/@zcong/koa-router-show.svg?style=flat)](https://npmjs.com/package/@zcong/koa-router-show) [![NPM downloads](https://img.shields.io/npm/dm/@zcong/koa-router-show.svg?style=flat)](https://npmjs.com/package/@zcong/koa-router-show) [![CircleCI](https://circleci.com/gh/zcong1993/koa-router-show/tree/master.svg?style=shield)](https://circleci.com/gh/zcong1993/koa-router-show/tree/master)  [![codecov](https://codecov.io/gh/zcong1993/koa-router-show/branch/master/graph/badge.svg)](https://codecov.io/gh/zcong1993/koa-router-show)
 [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/zcong1993/donate)

## Install

```bash
$ yarn add @zcong/koa-router-show
```

## Usage

```js
const Koa = require('koa')
const Router = require('koa-router')
const koaRouterShow = require('@zcong/koa-router-show')

const app = new Koa()
const router = new Router()

router.get('/', () => {})
router.get('/user/:name', () => {})

// use it after registing all the routers
koaRouterShow(router)

app.use(router.routes())
app.use(router.allowedMethods())

app.listen()

// will show all the routers in text-table and router
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**koa-router-show** © [zcong1993](https://github.com/zcong1993), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by zcong1993 with help from contributors ([list](https://github.com/zcong1993/koa-router-show/contributors)).

> [github.com/zcong1993](https://github.com/zcong1993) · GitHub [@zcong1993](https://github.com/zcong1993)
