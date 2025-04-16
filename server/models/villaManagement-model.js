const mongoose = require("mongoose")

const villaManagementSchema = new mongoose.Schema({
    allVillas:{
        type:String,
        required:true
    },
    villaAvailability:{
        type:String,
        required:true
    },
    prizingManagement:{
        type:String,
        required:true
    },
    reviews:{
        type:String,
        required:true
    },
    features:{
        type:String,
        required:true
    },
})
const VillaManagement = mongoose.model("VillaManagement", villaManagementSchema)
module.exports = VillaManagement