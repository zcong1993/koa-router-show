const { table, getBorderCharacters } = require('table')

module.exports = (router, {
  path = '/routes',
  addRouter = true
} = {}) => {
  if (!Array.isArray(router.stack)) {
    throw new TypeError('not a koa-router instance!')
  }
  const _stack = [...router.stack]

  const _routes = _stack.map(l => [l.path, l.methods, l.paramNames.map(p => p.name)])

  _routes.unshift(['Path', 'Methods', 'ParamNames'])

  console.log()
  console.log(table(_routes))
  console.log()

  if (addRouter) {
    const _index = _stack.findIndex(l => l.path === path)
    if (_index > -1) {
      console.warn(`${path} is already in use!`)
      return
    }

    const config = {
      border: getBorderCharacters('void')
    }

    router.get(path, ctx => {
      ctx.body = table(_routes, config)
    })

    console.log()
    console.log(`check '${path}' see all your routers.`)
    console.log()
  }
}
