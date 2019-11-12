import React from "react";
import "./code-chart.scss";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

function CodeChart(props) {
  const { data, loading } = props;

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
        <XAxis
          dataKey={data => `${data.name >= 1000 ? `${data.name / 1000},000` : data.name} items`}
        />
        <YAxis />
        <Tooltip
          formatter={(value, name, props) =>
            value >= 1000 ? `${value / 1000} secs` : `${value} ms`
          }
        />
        <Legend />
        <Line type="monotone" dataKey="time" stroke="#127cc9" />
      </LineChart>
    </section>
  );
}

export default CodeChart;
