const express = require ('express')
const SessionController = require ('./controllers/SessionController')
const UserController = require('./controllers/UserController')

const routes = express.Router()




routes.post('/sessionauth', SessionController.store)
routes.post('/user', UserController)

module.exports = routes;