require("dotenv").config();
const express = require("express")
const cors = require("cors")
const app = express()
const router = require("./router/auth-router")
const connectDB = require("./utils/db")




const corsOptions ={
    origin:["http://localhost:5173","https://real-state-rental-front.onrender.com"],
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
}


app.use(express.json())
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true })); // ✅ Parses URL-encoded data
app.use("/", router)
app.use("/uploads", express.static("uploads"));


const PORT = process.env.PORT || 5000;
connectDB().then(()=>{

    app.listen(PORT,()=>{
        console.log("our server is running hurry")
        
    })
})