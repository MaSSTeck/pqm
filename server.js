const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  // server.get('/q/:id', (req, res) => {
  //   const actualPage = '/question'
  //   const queryParams = {subject: req.params.id } 
  //   // const mergedQuery = Object.assign({}, req.query, req.params)
  //   console.log("i got this:",req.params.id);

  //     // console.log("i got this2:",req.params.uid);

  //   app.render(req, res, actualPage, queryParams)
  // })

  server.get('/q/:maskURL/:id/:subject', (req, res) => {
    const actualPage = '/question'
    // const queryParams = {subject: req.params.id } 
    const mergedQuery = Object.assign({}, req.query, req.params, req.param)
    app.render(req, res, actualPage, mergedQuery)
  })

  // server.get('/q/:uid/:id', (req, res) => {
  //   const mergedQuery = Object.assign({}, req.query, req.params)
  //   return app.render(req, res, '/question', mergedQuery);
  // })
  //console.log("i got this2:",queryParams);

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})