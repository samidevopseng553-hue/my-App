// import { Search, Bell, UserCircle2 } from "lucide-react";

// export default function Navbar() {
//   return (
//     <header className="navbar">
//       <div className="search-bar">
//         <Search size={18} color="#555" />
//         <input type="text" placeholder="Search students, rooms, payments..." />
//       </div>
//       <div className="icons">
//         <Bell size={20} />
//         <UserCircle2 size={22} />
//       </div>
//     </header>
//   );
// }


import { Search, Bell, UserCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="search-bar">
        <Search size={18} color="#555" />
        <input type="text" placeholder="Search students, rooms, payments..." />
      </div>
      <div className="icons">
        <Bell size={20} />
        <UserCircle2
          size={22}
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/LoginPage")}
        />
      </div>
    </header>
  );
}
