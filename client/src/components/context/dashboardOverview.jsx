import {createContext, useContext,useEffect, useState} from 'react';
import axios from "axios";

const DashboardOverviewContext = createContext()
export const DashboardOverviewProvider = ({children})=>{
    const [dashboardOverview, setDashboardOverview] = useState({})

    const fetchDashboardOverview = async () => {
        try {
            const response = await axios.get('https://real-state-backend-uvau.onrender.com/dashboardOverviewGetApi'); // Adjust the endpoint as needed
            if (response.status === 200) {
                setDashboardOverview(response.data.msg); // Assuming the response data is in the format you need
            } else {
                console.error("Failed to fetch dashboard overview:", response.statusText);
            }
               
        } catch (error) {
            console.error("Error fetching dashboard overview:", error);
        }
    };

    useEffect(() => {
        fetchDashboardOverview();
    }, []);

    return (
        <DashboardOverviewContext.Provider value={{dashboardOverview}}>
            {children}
        </DashboardOverviewContext.Provider>
    )
}

export const useDashboardOverview = () => {
    return useContext(DashboardOverviewContext)
}