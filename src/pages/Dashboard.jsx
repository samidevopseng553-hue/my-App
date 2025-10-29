import RoomOccupancyChart from "../component/RoomOccupancyChart";
import StatCards from "../component/StatCards";

export default function Dashboard() {
  return (
    <main className="dashboard">
      <h2 style={{ fontSize: "24px", marginBottom: "20px", color: "#2563eb" }}>Dashboard Overview</h2>
      <p style={{ color: "#555" }}><StatCards /></p>
      <p style={{ color: "#555" }}><RoomOccupancyChart /></p>
    </main>
  );
}
