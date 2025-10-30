// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Sales from './pages/Sales';
// import Inventory from './pages/Inventory';
// import Reports from './pages/Reports';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/sales" element={<Sales />} />
//           <Route path="/inventory" element={<Inventory />} />
//           <Route path="/reports" element={<Reports />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from "./component/Sidebar";
// import Navbar from "./component/Navbar";
// import Dashboard from "./pages/Dashboard";
// import "./index.css";

// export default function App() {
//   return (
//     <div className="app-container">
//       <Sidebar />
//       <div className="main-content">
//         <Navbar />
//         <Dashboard />
//       </div>
//     </div>
//   );
// }


import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import "./index.css";

// ✅ Layout Wrapper Component
function Layout() {
  const location = useLocation();
  const hideLayout = location.pathname === "/LoginPage"; // 👈 Hide layout for login page

  return (
    <div className="app-container">
      {!hideLayout && <Sidebar />}
      <div className="main-content">
        {!hideLayout && <Navbar />}

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/LoginPage" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

