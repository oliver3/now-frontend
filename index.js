const Koa = require('koa')
const { get } = require('koa-route')

let visitorCount = 0

const app = new Koa()

app.use(get('/', (ctx) => {
  ctx.body = `Hallo visitor ${visitorCount++} !!`
}))

app.listen(8080)
console.log(`Application started on http://localhost:8080`)
