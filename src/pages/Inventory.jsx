import React from 'react';
// import './Inventory.css';

function Inventory() {
  return (
    <div className="inventory-container">
      <header className="page-header">
        <h2>Inventory Management</h2>
        <p>Monitor your stock levels and manage product availability.</p>
      </header>

      <section className="inventory-grid">
        <div className="item-card">
          <h4>Product: Pepsi 500ml</h4>
          <p>Stock: 120</p>
          <button>Restock</button>
        </div>

        <div className="item-card">
          <h4>Product: Chips</h4>
          <p>Stock: 40</p>
          <button>Restock</button>
        </div>

        <div className="item-card">
          <h4>Product: Chocolate</h4>
          <p>Stock: 10</p>
          <button>Restock</button>
        </div>
      </section>
    </div>
  );
}

export default Inventory;
