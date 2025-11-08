import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TransactionChart = ({ transactions }) => {
  // Convert transactions to simple chart data by date
  const chartData = transactions.map((t) => ({
    date: t.date,
    amount: t.type === "expense" ? -Math.abs(t.amount) : Number(t.amount),
  }));

  return (
    <div style={{ width: "100%", height: 300, marginTop: "30px" }}>
      <h4 className="text-center mb-3">Financial Trend Overview</h4>
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="#007bff"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TransactionChart;
