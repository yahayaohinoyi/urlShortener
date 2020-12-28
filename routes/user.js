const express = require('express')

const userHandler = require('../controllers/user')

const api = express.Router()

api.get('/user', userHandler.fetchUser)
api.post('/register', userHandler.registerUser)

module.exports = api