import React from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'Proteine',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'Grassi',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'Carboidrati',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 'Fibre',
    uv: 2780,
    pv: 3908,
    amt: 2000
  }
];

const Chart = () => {
  return (
    <div className="w-[70%] bg-white">
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
