const mongoose = require("mongoose");

const {Schema} = mongoose;

const userSchema = new Schema({
    user_id: {
        type: mongoose.Types.ObjectId
    },

    user_name: {
        type: String
    },

    password: {
        type: String
    }
})

module.export = mongoose.model('User', userSchema)