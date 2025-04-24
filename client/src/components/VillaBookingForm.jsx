import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function VillaBookingForm() {
  const { id } = useParams(); // will be undefined if you're adding a villa
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    villaName: "",
    location: "",
    description: "",
    pricePerNight: "",
    numberOfRooms: "",
    availableFrom: "",
    availableTo: "",
    checkInTime: "",
    checkOutTime: "",
    amenities: [],
    photo: [],
    status: "Available",
  });
useEffect(() => {
  if (id) {
    fetch(`https://real-state-backend-uvau.onrender.com/client/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFormData({
          villaName: data.villaName,
          location: data.location,
          description: data.description,
          pricePerNight: data.pricePerNight,
          numberOfRooms: data.numberOfRooms,
          availableFrom: data.availableFrom?.slice(0, 10),
          availableTo: data.availableTo?.slice(0, 10),
          checkInTime: data.checkInTime,
          checkOutTime: data.checkOutTime,
          amenities: data.amenities || [],
          photo: [], // we don't pre-fill file input
          status: data.status,
        });
      });
  }
}, [id]);

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;

   
    if (type === "file") {
      setFormData({ ...formData, [name]: Array.from(files) }); // ✅ store array of files
    }
    else if (type === "checkbox") {
      const newAmenities = checked
        ? [...formData.amenities, value]
        : formData.amenities.filter((item) => item !== value);
      setFormData({ ...formData, amenities: newAmenities });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);


    const data = new FormData();

    data.append("villaName", formData.villaName);
    data.append("location", formData.location);
    data.append("description", formData.description);
    data.append("pricePerNight", formData.pricePerNight);
    data.append("numberOfRooms", formData.numberOfRooms);
    data.append("availableFrom", formData.availableFrom);
    data.append("availableTo", formData.availableTo);
    data.append("checkInTime", formData.checkInTime);
    data.append("checkOutTime", formData.checkOutTime);
    data.append("status", formData.status);

    formData.amenities.forEach((amenity, index) => {
      data.append(`amenities[]`, amenity);
    });

    if (formData.photo.length > 0) {
      formData.photo.forEach((file) => {
        data.append("photo", file); // Note: Use same field name multiple times
      });
    }    
    try {
     const res = await fetch(`https://real-state-backend-uvau.onrender.com/client${id ? `/${id}` : ""}`, {
  method: id ? "PATCH" : "POST",
  body: data,
});
      if (res.ok) {
        console.log(id ? "Villa updated successfully!" : "Villa added successfully!");
        navigate("/dashboard/villas");
      } else {
        console.error("Error submitting form");
      }
    } catch (err) {
      console.error("Network error:", err);
    }
  };

  // Post data to backend here


  const amenityOptions = ["WiFi", "Pool", "AC", "TV", "Parking", "Garden"];

  return (
    <div className="w-screen m-auto ml-84 max-w-4xl  p-6 bg-white text-black rounded-2xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Villa Details</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="villaName"
            placeholder="Villa Name"
            value={formData.villaName}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
            required
          />
          <input
            type="number"
            name="pricePerNight"
            placeholder="Price per Night (INR)"
            value={formData.pricePerNight}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
            required
          />
          <input
            type="number"
            name="numberOfRooms"
            placeholder="Number of Rooms"
            value={formData.numberOfRooms}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
            required
          />
          <input
            type="date"
            name="availableFrom"
            value={formData.availableFrom}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="date"
            name="availableTo"
            value={formData.availableTo}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="time"
            name="checkInTime"
            value={formData.checkInTime}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="time"
            name="checkOutTime"
            value={formData.checkOutTime}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
          />
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
          >
            <option value="Available">Available</option>
            <option value="Booked">Booked</option>
          </select>
        </div>

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="p-3 border rounded-lg w-full"
          rows="4"
        ></textarea>

        <div className="space-y-2">
          <label className="block font-semibold">Amenities:</label>
          <div className="flex flex-wrap gap-3">
            {amenityOptions.map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="amenities"
                  value={item}
                  checked={formData.amenities.includes(item)}
                  onChange={handleChange}
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-2">Villa Images:</label>
          <input
            type="file"
            name="photo"
            multiple // ✅ Allow selecting multiple files
            accept="image/*"
            onChange={handleChange}
            className="w-60 bg-white"
          />

        </div>

        <button
          type="submit"
          className="w-80 ml-58 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
