import React from 'react';
// import './Sales.css';

function Sales() {
  return (
    <div className="sales-container">
      <header className="page-header">
        <h2>Sales Dashboard</h2>
        <p>Track and manage your daily sales activities here.</p>
      </header>

      <section className="sales-summary">
        <div className="summary-card">
          <h4>Total Sales</h4>
          <p>$12,540</p>
        </div>
        <div className="summary-card">
          <h4>Today's Orders</h4>
          <p>85</p>
        </div>
        <div className="summary-card">
          <h4>Pending Payments</h4>
          <p>12</p>
        </div>
      </section>

      <section className="sales-table">
        <h3>Recent Transactions</h3>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#1001</td>
              <td>Ali Khan</td>
              <td>$120</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>#1002</td>
              <td>Fatima Noor</td>
              <td>$250</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>#1003</td>
              <td>John Doe</td>
              <td>$89</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Sales;
