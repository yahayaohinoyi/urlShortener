const express = require('express');
const urlHandler = require('../controllers/url')

const api = express.Router()

api.get('/url', urlHandler.fetchUrls)

module.exports = api