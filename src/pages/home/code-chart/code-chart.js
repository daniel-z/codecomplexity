import React from "react";
import "./code-chart.scss";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

function CodeChart(props) {
  const { data, loading } = props;
  console.log(props);
  return loading ? (
    <div>Loading...</div>
  ) : (
    <section className="code-chart">
      <LineChart
        width={500}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="time" stroke="#82ca9d" activeDot={{ r: 2 }} />
      </LineChart>
    </section>
  );
}

export default CodeChart;
