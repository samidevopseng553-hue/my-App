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


import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";
import StatCards from "./component/StatCards";
import Dashboard from "./pages/Dashboard";
import "./index.css";

export default function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}
