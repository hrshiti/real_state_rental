const Razorpay = require("razorpay");

const orderData = async(req,res)=>{
    const razorpay = new Razorpay({
        key_id: process.env.TEST_KEY_ID,
        key_secret: process.env.TEST_KEY_SECRET
    })
try {
    const amount = req.body.amount;
    const order= await razorpay.orders.create({
        amount: amount*100,
        currency: "INR",
        // receipt: "receipt#1",
        // notes: {
        //     key1: "value3",
        //     key2: "value2",

        
    })
    return res.status(200).json({success:true,order})

    

} catch (error) {
    return res.status(500).json({"status":false, msg:error})
}
}

module.exports = {orderData}