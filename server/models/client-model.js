const mongoose = require("mongoose")


const clientSchema = new mongoose.Schema({
    villaName: {
        type: String,
        required: true,  // Fixed typo (require → required)
    },
    location: {
        type: String,
        required: true,  // Fixed typo (require → required)
    },
    guest: {
        type: String,
        required: true,  // Fixed typo (require → required)
    },
    bedroom: {
        type: String,
        required: true,  // Fixed typo (require → required)
    },
    bathroom: {
        type: String,
        required: true,  // Fixed typo (require → required)
    },
    checkin: {
        type: String,
        required: true,  // Fixed typo (require → required)
    },
    checkout: {
        type: String,
        required: true,  // Fixed typo (require → required)
    },
    photo: {
        type: String,
        required: true,  // Fixed typo (require → required)
    },
    
})


const Client = mongoose.model("Client", clientSchema)
module.exports = Client