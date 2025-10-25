import React from "react";
import "./css/MainPage.css"; 

const HomePage = () => {
  return (
    <div className="main-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">SmartPOS</div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="/login" className="login-btn">Login</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Manage Your Sales Easily with <span>SmartPOS</span></h1>
          <p>
            The all-in-one Point of Sale solution to track sales, manage inventory,
            and grow your business efficiently — anytime, anywhere.
          </p>
          <button className="get-started-btn">Get Started</button>
        </div>
      </header>

      {/* Features Section */}
      <section className="features" id="features">
        <h2>Powerful Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>💰 Sales Management</h3>
            <p>Record every sale instantly and keep your transaction history organized.</p>
          </div>
          <div className="feature-card">
            <h3>📦 Inventory Tracking</h3>
            <p>Monitor stock levels, low inventory alerts, and automatic restocking suggestions.</p>
          </div>
          <div className="feature-card">
            <h3>📊 Real-time Analytics</h3>
            <p>Understand your business with clean, insightful reports and charts.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 SmartPOS. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
