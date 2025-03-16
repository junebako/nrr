import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('NRR')
})

app.get('/nikki/:date', (c) => {
  const date = c.req.param('date')
  const newUrl = `https://jnbk.app/nikki/${date}`
  return c.redirect(newUrl)
})

export default app
