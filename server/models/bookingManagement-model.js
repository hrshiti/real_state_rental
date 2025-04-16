const mongoose = require("mongoose")


const bookingManagementSchema = new mongoose.Schema({
    bookingId: {
        type: String,
        required: true,
    },
    upcomingBookings: {
        type: String,
        required: true,
    },
    bookingCompleted: {
        type: String,
        required: true,
    },
    canceledBookings: {
        type: Date,
        required: true,
    },
    checkinDate: {
        type: Date,
        required: true,
    },
    checkoutDate: {
        type: Date,
        required: true,
    },
    paymentStatus: {
        type: String,
        required: true,
    },
})
const BookingManagement = mongoose.model("BookingManagement", bookingManagementSchema)
module.exports = BookingManagement