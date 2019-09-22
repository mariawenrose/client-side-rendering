const express = require('express')
const hbs = require('express-handlebars')

const userRoutes = require('./routes/users')

const server = express()

// Middleware

server.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))
server.set('view engine', 'hbs')
server.set('views', __dirname + '/views')
server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))
server.use(express.json())

// Routes

server.use('/', userRoutes)
server.use('/v1', apiRoutes)


module.exports = server
