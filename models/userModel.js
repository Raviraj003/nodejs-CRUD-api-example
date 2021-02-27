const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    userName : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true,
    },
    phone : {
        type: Number,
        required: true,
        unique: true,
    },
    
    website : {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('userModel', userSchema)