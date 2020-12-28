const mongoose = require("mongoose");

const {Schema} = mongoose;

const userSchema = new Schema({
    user_id: {
        type: mongoose.Types.ObjectId
    },

    email: {
        type: String
    },

    password: {
        type: String
    }
})

module.exports = mongoose.model('User', userSchema)