
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";


const data = [
  {
    Month: 'Jan',
    uv: 4000,
    pv: 2400,
    revenue: 2400,
  },
  {
    Month: 'feb',
    uv: 3000,
    pv: 1398,
    revenue: 2210,
  },
  {
    Month: 'March',
    uv: 2000,
    pv: 9800,
    revenue: 2290,
  },
  {
    Month: 'April',
    uv: 2780,
    pv: 3908,
    arevenue: 2000,
  },
  {
    Month: 'May',
    uv: 1890,
    pv: 4800,
    revenue: 2181,
  },
  {
    Month: 'June',
    uv: 2390,
    pv: 3800,
    revenue: 2500,
  },
  {
    Month: 'July',
    uv: 3490,
    pv: 4300,
    revenue: 2100,
  },
];


const Graph2 = () => {
  return (
    <div>
     <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

  
    


    </div>
  )
}

export default Graph2
