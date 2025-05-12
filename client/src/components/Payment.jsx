import axios from 'axios'
import React, { useState } from 'react'


const Payment = () => {
const [amount] = useState(500);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, amount });
    // Further payment logic
  };
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
    
       <div className=" w-screen flex justify-center items-center min-h-screen text-black bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Payment Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-600">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Amount</label>
            <input
              type="number"
              value={amount}
              readOnly
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>

          <button
          onClick={proceedPayment}
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
          >
            Proceed to Pay
          </button>
        </form>
      </div>
    </div>
  )
     
  
}

export default Payment;
