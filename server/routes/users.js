const express = require('express')
const request = require('superagent')
c

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers(req.app.connection)
    .then(users => {
      res.render('index', {users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/cats', (req, res) => {
  request.get('https://cat-fact.herokuapp.com/facts') 
  .then( result => {
    res.send(result)
    
  })

})


module.exports = router
