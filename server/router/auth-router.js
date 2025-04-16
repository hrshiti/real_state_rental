const express = require("express")
const router = express.Router()
const {register,login, registerdata, resetPassword, forgetPassword,getForgetPasswordRequests,getResetPasswordRequests} = require("../controllers/auth-controllers")

const {clientApi,clientdata, upload} = require("../controllers/client-controllers")
const { filterApi, filterGetApi } = require("../controllers/filter-controllers")
const {dashboardOverviewApi,dashboardOverviewGetApi,villaManagementApi,villaManagementGetApi, bookingManagementApi,userManagementApi,financialReportApi,financialReportGetApi, bookingManagementGetApi, userManagementGetApi} = require("../controllers/dashboard-controllers")
const { userBookedVillaApi } = require("../controllers/userBookedVilla-controller")




router.post("/register",register)
router.get("/registerdata",registerdata)
router.post("/login",login)
router.post("/client", upload.single('photo'),clientApi)
router.get("/clientdata",clientdata)
router.post("/forget-password",forgetPassword)

router.post("/reset-password/:token",resetPassword)
router.get("/forget-password-requests", getForgetPasswordRequests);

// Get all reset password requests
router.get("/reset-password-requests", getResetPasswordRequests);
router.post("/filterdata" , filterApi)
router.get("/filterGetdata" , filterGetApi)


//dashboard routes dfining
router.post("/dashboardOverviewApi",dashboardOverviewApi)
router.get("/dashboardOverviewGetApi",dashboardOverviewGetApi)
router.post("/villaManagementApi",villaManagementApi)
router.get("/villaManagementGetApi",villaManagementGetApi)
router.post("/bookingManagementApi",bookingManagementApi)
router.get("/bookingManagementGetApi",bookingManagementGetApi)
router.get("/userManagementGetApi",userManagementGetApi)
router.post("/userManagementApi",userManagementApi)
router.get("/financialReportGetApi",financialReportGetApi)
router.post("/financialReportApi",financialReportApi)

//villa booking routing
router.post("/userBookedVilla", userBookedVillaApi)




module.exports = router