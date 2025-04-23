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
    description: {
        type: String,
        required: true,  // Fixed typo (require → required)
    },
    numberOfRooms: {
        type: String,
        required: true,  // Fixed typo (require → required)
    },
    pricePerNight: {
        type: String,
        required: true,  // Fixed typo (require → required)
    },
    
    amenities: {
        type: [String],
        required: false,  // Fixed typo (require → required)
    },
    checkInTime: {
        type: String,
        required: true,  // Fixed typo (require → required)
    },
    availableTo: {
        type: String,
        required: true,  // Fixed typo (require → required)
    },
    checkOutTime: {
        type: String,
        required: true,  // Fixed typo (require → required)
    },
    status: {
        type: String,
        required: true,  // Fixed typo (require → required)
    },
    photo: {
        type: [String],
        required: false,  // Fixed typo (require → required)
    },
    
})


const Client = mongoose.model("Client", clientSchema)
module.exports = Client