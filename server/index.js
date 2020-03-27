const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const bodyParser = require('koa-bodyparser'); // 处理post请求
const json  = require('koa-json') // 美化json
const article = require('./interface/article') // 用户接口
const app = new Koa()


// 处理扩展类型
app.use(bodyParser({
  extendTypes: ['json', 'form', 'text']
}))

// json 美化
app.use(json()); 

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

async function start () {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3003
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  // 路由设置
  app.use(article.routes()).use(article.allowedMethods());

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
