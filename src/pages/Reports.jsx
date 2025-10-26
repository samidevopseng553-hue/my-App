import React from 'react';
// import './Reports.css';

function Reports() {
  return (
    <div className="reports-container">
      <header className="page-header">
        <h2>Business Reports</h2>
        <p>Gain insights and analytics about your business performance.</p>
      </header>

      <section className="report-cards">
        <div className="report-card">
          <h4>Monthly Sales Report</h4>
          <p>Last Month: $45,200</p>
          <button>View Report</button>
        </div>

        <div className="report-card">
          <h4>Inventory Summary</h4>
          <p>Low Stock Items: 6</p>
          <button>View Report</button>
        </div>

        <div className="report-card">
          <h4>Customer Growth</h4>
          <p>New Customers: 320</p>
          <button>View Report</button>
        </div>
      </section>
    </div>
  );
}

export default Reports;
