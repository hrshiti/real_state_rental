const mongoose = require("mongoose")

const userBookedVillaSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    checkIn:{
        type:String,
        required:true
    },
    checkOut:{
        type:String,
        required:true
    },
    guests:{
        type:Number,
        required:true
    },
    villaType:{
        type:String,
        required:true
    },
    guests:{
        type:String,
        required:true
    },
})

 const UserBookedVillaSchema = mongoose.model("UserBookedVilla", userBookedVillaSchema)
module.exports = UserBookedVillaSchema