import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
import "./index.css";

// ✅ Layout Wrapper Component
function Layout() {
  const location = useLocation();
  const hideLayout = location.pathname === "/LoginPage";

  return (
    <div className="app-container">
      {!hideLayout && <Sidebar />}
      <div className="main-content">
        {!hideLayout && <Navbar />}

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          {/* <Route path="/RegisterPage" element={<RegisterPage />} /> */}
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

