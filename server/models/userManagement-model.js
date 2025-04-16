const mongoose = require("mongoose")


const userManagementSchema = new mongoose.Schema({
    ragisteredUser: {
        type: String,
        required: true,
    },
    villaOwners: {
        type: String,
        required: true,
    },
    verificationStatus: {
        type: String,
        required: true,
    },
    contactDetails: {
        type: String,
        required: true,
    },
})
const UserManagement = mongoose.model("UserManagement", userManagementSchema)
module.exports = UserManagement