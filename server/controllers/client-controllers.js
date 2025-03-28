const client = require("../models/client-model")
const multer = require("multer")

const clientApi = async (req,res)=>{

     const photoPath = req.file ? `/uploads/${req.file.filename.replace(/\\/g, "/")}` : null;
    try {
        const {villaName,location,guest,bedroom,bathroom,checkin,checkout} = req.body 
        const imagePath = req.file ? req.file.path : null;
        console.log("router is created for client")
        const clientData = await client.create({
            villaName,
            location,
            guest,
            bedroom,
            bathroom,
            checkin,
            checkout,
           photo:photoPath,

        })
        console.log("Client data saved:", clientData);
        return res.status(201).json({ msg: "New data added successfully", data: clientData });

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }


}
const clientdata = async (req,res)=>{
try {
    const response = await client.find()
    if(!response){
        res.status(404).json({msg:"no data found"})
        return
    }
    res.status(200).json({msg:response})
} catch (error) {
    console.log(`services : ${error}`)
}
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});
const upload = multer({storage})

  
module.exports={clientApi,clientdata, upload}; 
