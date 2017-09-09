import cors from 'koa-cors'
import http from 'http'
import Koa from 'koa'
import pathMatch from 'koa-path-match'
import staticFiles from 'koa-static'
import listings from './server/listings'
const app = new Koa()
const route = pathMatch({})

app.use(cors())

app.use(route('/listing').get(listings))

app.use(staticFiles('public'))

app.listen(3001)
