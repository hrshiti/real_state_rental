import React, { useState } from 'react'

const ClientForm = () => {
const[data,setData]=useState({
  villaName:"",
  location:"",
  guest:"",
  bedroom:"",
  bathroom:"",
  checkin:"",
  checkout:""
})
  const [error, setError] = useState("");


  const handleChange = (e)=>{
    const {name,value} = e.target
    setData((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));

  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    const {villaName,location,guest,bedroom,bathroom, checkin, checkout} = data
    console.log(data)


  }
  return (
    <>
   <div className=" w-screen flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Villa Booking Form</h2>
        <form onClick={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Villa Name</label>
            <input
              type="text"
              name="villaName"
              value={data.villaName}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter villa name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={data.location}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter location"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Guest</label>
            <input
              type="number"
              name="guest"
              value={data.guest}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              min="1"
              placeholder="Number of guests"
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-medium">Bedrooms</label>
              <input
                type="number"
                name='bedroom'
                value={data.bedroom}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                min="1"
                placeholder="No. of bedrooms"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Bathrooms</label>
              <input
                type="number"
                name="bathroom"
                value={data.bathroom}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                min="1"
                placeholder="No. of bathrooms"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-medium">Check-in</label>
              <input
                type="date"
                name="checkin"
                value={data.checkin}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Check-out</label>
              <input
                type="date"
                name='checkout'
                value={data.checkout}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full btn bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default ClientForm
