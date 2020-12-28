const express = require('express');
const urlHandler = require('../controllers/url')

const api = express.Router()

api.get('/url', urlHandler.fetchUrls)
api.post('/shorten', urlHandler.shortenUrl)
api.get('/visitShortened/', urlHandler.visitShortenedUrl)
api.get('/fetchAll/', urlHandler.fetchUrls)


module.exports = api