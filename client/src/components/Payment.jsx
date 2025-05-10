import axios from 'axios'
import React from 'react'


const Payment = () => {
const proceedPayment = async()=>{
    try {
        const data = await axios.post("http://localhost:5000/orderData",{amount: 500})
        const options = {
            key: "rzp_test_6XWGM1pDrVgeaT",
            amount: data.data.order.amount,
            currency: "INR",
            name: "Real State",
            description: "Test Transaction",
            order_id: data.data.order.id,
            handler: function (response) {
                alert(response.razorpay_payment_id,"success");
               
            },
            theme: {
color: "#3399cc"
            }
               
    } 
        const razor = new window.Razorpay(options);
        razor.open();
        razor.on("payment.failed", function (response) {
            alert(response.error.code,"fail");
          
        });
    }
    catch (error) {
        console.log(error);
        
    }
}


  return (
    <div>
      <button className="btn3" onClick={proceedPayment}>payment</button>
    </div>
  )
}

export default Payment
