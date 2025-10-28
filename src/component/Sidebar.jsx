import { Home, Users, Bed, CreditCard, Wrench, FileBarChart2, Settings } from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: Home },
  { name: "Students", icon: Users },
  { name: "Rooms", icon: Bed },
  { name: "Payments", icon: CreditCard },
  { name: "Maintenance", icon: Wrench },
  { name: "Reports", icon: FileBarChart2 },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h1>🏠 HostelSys</h1>
      <nav>
        {menuItems.map((item) => (
          <button key={item.name}>
            <item.icon size={18} />
            <span>{item.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
