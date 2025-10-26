import React from 'react';
import '../../src/component/css/Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="navbar">
        <h1 className="logo">SmartPOS</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/sales">Sales</a>
          <a href="/inventory">Inventory</a>
          <a href="/reports">Reports</a>
          <a href="/settings">Settings</a>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-text">
          <h2>Manage Your Sales with Ease</h2>
          <p>
            SmartPOS is a modern, fast, and reliable Point of Sale system that helps you track sales, manage inventory, and grow your business efficiently.
          </p>
          <button className="get-started">Get Started</button>
        </div>
        <div className="hero-image">
          <img src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png" alt="POS Illustration" />
        </div>
      </section>

      <section className="features-section">
        <h3>Why Choose SmartPOS?</h3>
        <div className="features-grid">
          <div className="feature-card">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135673.png" alt="Sales" />
            <h4>Fast Sales Tracking</h4>
            <p>Record sales instantly and keep your customers happy with quick billing and receipts.</p>
          </div>
          <div className="feature-card">
            <img src="https://cdn-icons-png.flaticon.com/512/2921/2921822.png" alt="Inventory" />
            <h4>Inventory Management</h4>
            <p>Stay updated with real-time stock tracking and automatic alerts when inventory is low.</p>
          </div>
          <div className="feature-card">
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="Reports" />
            <h4>Insightful Reports</h4>
            <p>Gain business insights with detailed reports on sales, expenses, and growth trends.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 SmartPOS — All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;