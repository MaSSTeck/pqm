const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'development'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = parseInt(process.env.PORT, 10) || 3000

app.prepare()
.then(() => {
  const server = express()

  server.get('/q/:maskURL/:id/:subject', (req, res) => {
    const actualPage = '/question'
    const mergedQuery = Object.assign({}, req.query, req.params, req.param)
    app.render(req, res, actualPage, mergedQuery)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})