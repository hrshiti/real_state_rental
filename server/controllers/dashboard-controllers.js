const dashboardOverview = require("../models/dashboard-model")
const villaManagement = require("../models/villaManagement-model")
const bookingManagement = require("../models/bookingManagement-model")
const userManagement = require("../models/userManagement-model")
const financialReport = require("../models/financialReport-model")




const dashboardOverviewApi = async (req,res)=>{
    try {
        const {totalUsers,totalBookings,totalRevenue,totalProperties,totalReviews} = req.body
        console.log("router is created for dashboard")
        const dashboardData = await dashboardOverview.create({
            totalUsers,
            totalBookings,
            totalRevenue,
            totalProperties,
            totalReviews
        })
        console.log("Dashboard data saved:", dashboardData);
        return res.status(201).json({ msg: "New data added successfully", data: dashboardData });
    } catch (error) {
        console.log(`dashboard : ${error}`)
        
    }
}

const dashboardOverviewGetApi = async(req,res)=>{
    try {
        const response = await dashboardOverview.find()
        if(!response){
            res.status(404).json({msg:"no data found"})
            return
        }
        res.status(200).json({msg:response})
        
    } catch (error) {
        console.log(`dashboard : ${error}`)
        
    }
}

//villamanagement api model

const villaManagementApi = async (req,res)=>{
try {
    const {allVillas,villaAvailability,prizingManagement,reviews,features} = req.body
    console.log("router is created for villaManagement")
    const villaManagementData = await villaManagement.create({
        allVillas,
        villaAvailability,
        prizingManagement,
        reviews,
        features
    })
    console.log("Villa Management data saved:", villaManagementData);
    return res.status(201).json({ msg: "New data added successfully", data: villaManagementData });

} catch (error) {
    console.log(`villaManagement : ${error}`)
}
}
const villaManagementGetApi = async(req,res)=>{
    try {
        const response = await villaManagement.find()
        if(!response){
            res.status(404).json({msg:"no data found"})
            return
        }
        res.status(200).json({msg:response})
    } catch (error) {
        console.log(`villaManagement : ${error}`)
        
    }
}

const bookingManagementApi = async (req,res)=>{
    try {
        const {bookingId,upcomingBookings,bookingCompleted,canceledBookings,checkinDate,checkoutDate,paymentStatus} = req.body
        console.log("router is created for BookingManagement")
        const bookingManagementData = await bookingManagement.create({
            bookingId,
            upcomingBookings,
            bookingCompleted,
            canceledBookings,
            checkinDate,
            checkoutDate,
            paymentStatus
        })
        console.log("Booking Management data saved:", bookingManagementData);
        return res.status(201).json({ msg: "New data added successfully", data: bookingManagementData });

    } catch (error) {
        console.log(`BookingManagement : ${error}`)
    }
}

const bookingManagementGetApi = async(req,res)=>{
    try {
        const response = await bookingManagement.find()
        if(!response){
            res.status(404).json({msg:"no data found"})
            return
        }
        res.status(200).json({msg:response})
    } catch (error) {
        console.log(`BookingManagement : ${error}`)
        
    }
}

const userManagementApi = async (req,res)=>{
    try {
        const {ragisteredUser,villaOwners,verificationStatus,contactDetails} = req.body
        console.log("router is created for userManagement")
        const userManagementData = await userManagement.create({
            ragisteredUser,
            villaOwners,
            verificationStatus,
            contactDetails
        })
        console.log("User Management data saved:", userManagementData);
        return res.status(201).json({ msg: "New data added successfully", data: userManagementData });

    } catch (error) {
        console.log(`userManagement : ${error}`)
    }
}

const userManagementGetApi = async(req,res)=>{
    try {
        const response = await userManagement.find()
        if(!response){
            res.status(404).json({msg:"no data found"})
            return
        }
        res.status(200).json({msg:response})
    } catch (error) {
        console.log(`userManagement : ${error}`)
        
    }
}

const financialReportApi = async (req,res)=>{
    try {
        const {income,expenses,profitLoss,taxLiabilities,netIncome} = req.body
        console.log("router is created for financialReport")
        const financialReportData = await financialReport.create({
           
            income,
            expenses,
            profitLoss,
            taxLiabilities,
            netIncome
        })
        console.log("Financial Report data saved:", financialReportData);
        return res.status(201).json({ msg: "New data added successfully", data: financialReportData });

    } catch (error) {
        console.log(`financialReport : ${error}`)
    }
}

const financialReportGetApi = async (req,res)=>{
try {
    const response = await financialReport.find()
    if(!response){
        res.status(404).json({msg:"no data found"})
        return
    }
    res.status(200).json({msg:response})
} catch (error){
    console.log(`financialReport : ${error}`)

}

}

module.exports = {dashboardOverviewApi,dashboardOverviewGetApi, villaManagementApi,villaManagementGetApi, bookingManagementApi, userManagementApi,financialReportApi, financialReportGetApi, bookingManagementGetApi, userManagementGetApi}