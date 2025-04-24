import {createContext, useContext,useEffect, useState} from 'react';
import axios from "axios";

const VillaBookedContext = createContext()

export const VillaBookedProvider = ({children})=>{
const [villaBooked, setVillaBooked] = useState({})


const fetchVillaBooked = async () => {
    try {
        const response = await axios.get('https://real-state-backend-uvau.onrender.com/userBookedVillaGetApi'); // Adjust the endpoint as needed
        if (response.status === 200){
            setVillaBooked(response.data.msg); // Assuming the response data is in the format you need

        }
        else{
            console.error("Failed to fetch villa booked:", response.statusText);
        }
    } catch (error) {
        console.error("Error fetching villa booked:", error);
        
    }
}
useEffect(() => {
    fetchVillaBooked();
},[])

return (
    <VillaBookedContext.Provider value={{villaBooked}}>
        {children}
    </VillaBookedContext.Provider>
)

}

export const useVillaBooked =()=>{
    return useContext(VillaBookedContext)
}
