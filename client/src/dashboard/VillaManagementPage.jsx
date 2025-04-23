import React, { useEffect, useState } from 'react';
import VillasCard from '../components/VillasCard';
import { useNavigate } from 'react-router-dom';

const VillaManagementPage = () => {
  const navigate = useNavigate();
  const [clients, setClients] = useState([]);
  const handleUpdate = (villa) => {
    navigate(`/villaBookingForm/${villa._id}`); // redirect with ID
  };
  // Fetch client data on mount
  useEffect(() => {
    fetch("http://localhost:5000/clientdata")
      .then(res => res.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        setClients(data.msg);
      })
      .catch(err => console.log(err));
  }, []);

  // 🗑️ DELETE Villa Function
  const handleDelete = async (villa) => {
    try {
      const confirmDelete = window.confirm(`Are you sure you want to delete ${villa.villaName}?`);
      if (!confirmDelete) return;

      const response = await fetch(`http://localhost:5000/clientDataDeleteApi/${villa._id}`, {
        method: 'DELETE',
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        // Remove villa from UI
        setClients(prev => prev.filter(c => c._id !== villa._id));
        alert("Villa deleted successfully");
      } else {
        alert(result.msg || "Failed to delete");
      }
    } catch (error) {
      console.error("Error deleting villa:", error);
      alert("An error occurred while deleting the villa");
    }
  };

  // ✏️ Update handler (you can add edit form later)
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 w-screen to-black text-white px-4 sm:px-8 pt-10">
      <h1 className="text-3xl font-semibold mb-6">Villa Management</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-6xl text-black gap-4 ml-34">
        {clients.map((client, index) => (
          <VillasCard
            key={index}
            onClick={() => console.log("Villa clicked:", client)}
            img_src={`http://localhost:5000${client.photo}`}
            alt_text={client.villaName}
            span1={client.checkin}
            span2="Mountains"
            heading={client.villaName}
            icon_span={`45 guests`}
            icon2_span="460m2"
            icon_span2={client.bedroom}
            icon2_span2={client.bathroom}
            onUpdate={() => handleUpdate(client)}
            onDelete={() => handleDelete(client)} // ✅ hook it here
            showActions={true}
          />
        ))}
      </div>
    </div>
  );
};

export default VillaManagementPage;
