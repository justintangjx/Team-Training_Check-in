import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const teamData = [
  { name: "Austin", "How was this week on a scale of 1 to 10": 2 },
  { name: "Bustin", "How was this week on a scale of 1 to 10": 5 },
  { name: "Custin", "How was this week on a scale of 1 to 10": 8 },
  { name: "Dustin", "How was this week on a scale of 1 to 10": 9 },
  { name: "Eustin", "How was this week on a scale of 1 to 10": 7 }
];

const teamBarChart = () => (
  <div id="simple-bar-chart">
    <BarChart
      width={500}
      height={300}
      data={teamData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="name" />
      <YAxis ticks={[2, 4, 6, 8, 10]} type="number" />
      <CartesianGrid strokeDasharray="3 3" />
      <Legend />
      <Bar dataKey="How was this week on a scale of 1 to 10" fill="#8884d8" />
    </BarChart>
  </div>
);

export default teamBarChart;
