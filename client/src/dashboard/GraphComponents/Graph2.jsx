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
    Month: 'Feb',
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
    revenue: 2000,
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
    <div className="w-screen max-w-full h-[20rem] sm:h-[24rem] lg:h-[28rem] bg-gradient-to-br from-black via-blue-900 to-black text-white p-4 sm:p-6 rounded-xl shadow-lg mb-6">
      <div className="text-center mb-4">
        <h3 className="text-lg sm:text-xl font-bold">Monthly Revenue</h3>
        <p className="text-sm text-green-500">(+3%) compared to last month</p>
      </div>

      <div className="w-full h-full ">
        <ResponsiveContainer width="100%" height="76%">
          <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="uv" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Graph2;
