import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function Dashboard() {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setChartData(data));
  }, []);
  return (
    <div className="grid grid-cols-2 gap-5 ml-8 mt-20">
      <div>
        <p>
          MONTH WISE SELL
        </p>
      <LineChart

        width={500}
        height={300}
        data={chartData}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
      </div>
    <div>
      <p>Investment vs Revenew</p>
      <AreaChart
        width={500}
        height={300}
        data={chartData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="investment"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
      </div>
    <div>
    <p>Investment vs Revenew</p>
      <BarChart width={500} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="investment" fill="#8884d8" />
        <Bar dataKey="revenue" fill="#82ca9d" />
      </BarChart>
      </div>
    <div>
    <p>Investment vs Revenew</p>
      <PieChart width={500} height={300}>
  <Pie data={chartData} dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={chartData} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart>
</div>
    </div>
  );
}
