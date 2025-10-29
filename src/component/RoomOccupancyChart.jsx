import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import "./RoomOccupancyChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const RoomOccupancyChart = () => {
  const data = {
    labels: ["Occupied Rooms", "Available Rooms"],
    datasets: [
      {
        label: "Room Status",
        data: [80, 45], // you can dynamically load these later from API
        backgroundColor: ["#4e73df", "#1cc88a"],
        borderColor: ["#ffffff", "#ffffff"],
        borderWidth: 2,
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 15,
          color: "#333",
          font: { size: 14 },
        },
      },
      tooltip: {
        backgroundColor: "#333",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
  };

  return (
    <div className="chart-card">
      <h2>🏠 Room Occupancy Overview</h2>
      <div className="chart-container">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default RoomOccupancyChart;
