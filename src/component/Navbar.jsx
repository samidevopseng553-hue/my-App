import { Search, Bell, UserCircle2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="search-bar">
        <Search size={18} color="#555" />
        <input type="text" placeholder="Search students, rooms, payments..." />
      </div>
      <div className="icons">
        <Bell size={20} />
        <UserCircle2 size={22} />
      </div>
    </header>
  );
}
