const mongoose = require('mongoose');

const {Schema} = mongoose;
const urlSchema = new Schema({
    url_id: {
        type: mongoose.Types.ObjectId
    },

    short_url: {
        type: String
    },

    main_url: {
        type: String
    }


})

module.exports = mongoose.model("URL", urlSchema)