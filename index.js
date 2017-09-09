const Koa = require('koa')
const staticFiles = require('koa-static')
const server = new Koa()

server.use(staticFiles('public'))

server.listen(3000)
