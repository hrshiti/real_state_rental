const express = require("express")
const router = express.Router()
const {register,login, registerdata, resetPassword, forgetPassword,getForgetPasswordRequests,getResetPasswordRequests} = require("../controllers/auth-controllers")

const {clientApi,clientdata, upload} = require("../controllers/client-controllers")
const { filterApi, filterGetApi } = require("../controllers/filter-controllers")



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
module.exports = router