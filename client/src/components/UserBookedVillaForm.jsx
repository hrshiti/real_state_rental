// src/components/BookingForm.jsx
import React, { useState } from 'react';

const UserBookedVillaForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    villaType: '',
    requests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    // You can integrate backend API here later
  
try {
      const response = await fetch('https://real-state-backend-uvau.onrender.com/userBookedVilla', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const res_data = await response.json();
        console.log('Booking successful:', res_data);
        alert('Booking successful!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          checkIn: '',
          checkOut: '',
          guests: 1,
          villaType: '',
          requests: '',
        });
      } else {
        alert('Booking failed. Please try again.');
      }
    }
    catch (error) {
      console.error('Error during booking:', error);
      alert('An error occurred. Please try again later.');
    }

  };

  return (
    <div className="max-w-xl ml-120 mx-auto mt-10 p-6 bg-white text-black rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Book Your Villa</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Full Name" required
          value={formData.name} onChange={handleChange}
          className="w-full border p-3 rounded-xl"
        />

        <input type="email" name="email" placeholder="Email" required
          value={formData.email} onChange={handleChange}
          className="w-full border p-3 rounded-xl"
        />

        <input type="tel" name="phone" placeholder="Phone Number" required
          value={formData.phone} onChange={handleChange}
          className="w-full border p-3 rounded-xl"
        />

        <div className="flex gap-4">
          <input type="date" name="checkIn" required
            value={formData.checkIn} onChange={handleChange}
            className="w-1/2 border p-3 rounded-xl"
          />
          <input type="date" name="checkOut" required
            value={formData.checkOut} onChange={handleChange}
            className="w-1/2 border p-3 rounded-xl"
          />
        </div>

        <input type="number" name="guests" min="1" placeholder="Number of Guests" required
          value={formData.guests} onChange={handleChange}
          className="w-full border p-3 rounded-xl"
        />

        <select name="villaType" required value={formData.villaType} onChange={handleChange}
          className="w-full border p-3 rounded-xl">
          <option value="">Select Villa Type</option>
          <option value="Luxury">Luxury</option>
          <option value="Deluxe">Deluxe</option>
          <option value="Budget">Budget</option>
        </select>

        <textarea name="requests" placeholder="Special Requests (optional)"
          value={formData.requests} onChange={handleChange}
          className="w-full border p-3 rounded-xl h-24"
        ></textarea>

        <button type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default UserBookedVillaForm;
