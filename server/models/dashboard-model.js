const mongoose = require('mongoose');
const dashboardOverviewSchema = new mongoose.Schema({
    totalUsers: {
        type: Number,
        required: true
    },
    totalBookings: {
        type: Number,
        required: true
    },
    totalRevenue: {
        type: Number,
        required: true
    },
    totalProperties: {
        type: Number,
        required: true
    },
    totalReviews: {
        type: Number,
        required: true
    }
});
const DashboardOverview = mongoose.model('DashboardOverview', dashboardOverviewSchema);
module.exports = DashboardOverview;