const mongoose = require("mongoose")

const filterSchema = new mongoose.Schema({
    locations:{
        type: [String],
        required: true
    },
    classes:{
        type: [String],
        required: true
    },
    guests:{
        type: [String],
        required: true
    },
    prizes:{
        type: [String],
        required: true
    }
})

const Filter = mongoose.model("Filter", filterSchema)
module.exports = Filter