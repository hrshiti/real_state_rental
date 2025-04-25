import React, { useEffect, useState } from 'react';
import VillasCard from '../components/VillasCard';
import { useNavigate } from 'react-router-dom';

const VillaManagementPage = () => {
  const navigate = useNavigate();
  const [clients, setClients] = useState([]);

  const handleUpdate = (villa) => {
    navigate(`/villaBookingForm/${villa._id}`);
  };

  useEffect(() => {
    fetch("https://real-state-backend-uvau.onrender.com/clientdata")
      .then(res => res.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        setClients(data.msg);
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = async (villa) => {
    try {
      const confirmDelete = window.confirm(`Are you sure you want to delete ${villa.villaName}?`);
      if (!confirmDelete) return;

      const response = await fetch(`https://real-state-backend-uvau.onrender.com/clientDataDeleteApi/${villa._id}`, {
        method: 'DELETE',
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
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

  return (
    <div className="min-h-screen w-full px-4 sm:px-6 lg:px-10 pt-10 bg-gradient-to-b from-black via-blue-900 to-black text-white">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center sm:text-left">Villa Management</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client, index) => (
          <VillasCard
            key={index}
            onClick={() => console.log("Villa clicked:", client)}
            img_src={`https://real-state-backend-uvau.onrender.com${client.photo}`}
            alt_text={client.villaName}
            span1={client.checkin}
            span2="Mountains"
            heading={client.villaName}
            icon_span={`45 guests`}
            icon2_span="460m2"
            icon_span2={client.bedroom}
            icon2_span2={client.bathroom}
            onUpdate={() => handleUpdate(client)}
            onDelete={() => handleDelete(client)}
            showActions={true}
          />
        ))}
      </div>
    </div>
  );
};

export default VillaManagementPage;
