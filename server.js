/* eslint no-console: 0 */

const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()

const authService = require('./auth/auth')()

app.prepare()
  .then(() => {
    const server = express()
    server.use(bodyParser.json())

    server.get('/add-concert', (req, res) => {
      if (authService.isLoggedIn()) {
        return app.render(req, res, '/add-concert')
      } else {
        res.redirect('/signin')
      }
    })

    server.post('/signin', (req, res) => {
      const { email, password } = req.body
      authService.authenticate(email, password)
        .then(user => {
          res.send(user)
        })
        .catch(err => {
          console.log(err)
          res.send(404, 'NO USER: ' + err.message)
        })
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    const port = process.env.PORT || 3001

    server.listen(port, err => {
      if (err) throw err

      console.log(`> Ready on port:${port}`)
    })
    
  })
  .catch(appError => {
    const msg = 'App Error: ' + appError.message
    throw new Error(msg)
  })