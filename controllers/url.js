const Url = require('../models/url')
const keygen = require('../services/keygen')

const shortenUrl = async (req, res) => {
    try{
        const input = req.body;
        var object = {
            main_url: input.mainUrl,
            short_url: 'localhost:3000/v1/url/' + String(keygen.gen)
        }

        const data = await Url.create(object)

        res.json({
            success: true,
            data
        })

    }catch(err){

        res.send(err)
    }

}

const visitShortenedUrl = async (req, res) => {
    try{
        const input = req.body;
        const urlObj = await Url.findOne({short_url: input.shortUrl})

        res.redirect(urlObj.main_url)

    }catch(err){
        res.send(err)
    }
}



const fetchUrls = async (req, res) => {

    try{
        const urls = await Url.find()

        res.send(urls)
    }catch(err){
        res.send(err)
    }

}



module.exports = {
    fetchUrls,
    shortenUrl,
    visitShortenedUrl
}