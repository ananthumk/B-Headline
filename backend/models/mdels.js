const mongoose = require('mongoose')

const headline = mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('Heading', headline)

