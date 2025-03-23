const express = require("express")
const router = express.Router()
const {register,login, registerdata, resetPassword, forgetPassword} = require("../controllers/auth-controllers")

const {clientApi,clientdata} = require("../controllers/client-controllers")



router.post("/register",register)
router.get("/registerdata",registerdata)
router.post("/login",login)
router.post("/client",clientApi)
router.get("/clientdata",clientdata)
router.post("/forget-password",forgetPassword)
router.post("/reset-password/:token",resetPassword)
module.exports = router