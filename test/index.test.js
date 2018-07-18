
const Koa = require('koa')
const Router = require('koa-router')
const supertest = require('supertest')
const koaRouterShow = require('../')

const createRequest = (opts = {}, routerModifier = router => {
  router.get('/', () => {})
  router.get('/user/:name', () => {})
}) => {
  const app = new Koa()
  const router = new Router()
  routerModifier(router)

  koaRouterShow(router, opts)
  app.use(router.routes())
  app.use(router.allowedMethods())

  const request = supertest(app.listen())

  return request
}

test('it should add router', async () => {
  const request = createRequest()

  const res = await request
      .get('/routes')

  expect(res.status).toBe(200)
  expect(res.text).toMatchSnapshot()
})

test('it should not rewrite router', async () => {
  const request = createRequest({}, router => {
    router.get('/routes', ctx => {
      ctx.body = 'user router'
    })
  })

  const res = await request
      .get('/routes')

  expect(res.status).toBe(200)
  expect(res.text).toMatchSnapshot()
})

test('it should not add router', async () => {
  const request = createRequest({
    addRouter: false
  })

  const res = await request
      .get('/routes')

  expect(res.status).toBe(404)
})

test('it should add custom router', async () => {
  const request = createRequest({
    path: '/custom'
  })

  const res = await request
      .get('/custom')

  expect(res.status).toBe(200)
  expect(res.text).toMatchSnapshot()
})

test('it should throw error', () => {
  const router = 'bad router instance'
  expect(() => koaRouterShow(router)).toThrow('not a koa-router instance!')
})
