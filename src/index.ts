import { Hono } from 'hono'

const app = new Hono()

app.get('/nikki/:date', (c) => {
  const date = c.req.param('date')
  const newUrl = `https://app.juneboku.xyz/nikki/${date}`
  return c.redirect(newUrl)
})

export default app
