import React, { useEffect, useState } from "react";

export default function Sales() {
  const [sales, setSales] = useState([]);
  const [newSale, setNewSale] = useState({ product: "", quantity: "", price: "" });

  // Fetch all sales from API
  const fetchSales = async () => {
    const res = await fetch("http://localhost:5000/api/sales");
    const data = await res.json();
    setSales(data);
  };

  useEffect(() => {
    fetchSales();
  }, []);

  const addSale = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/sales", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSale),
    });
    setNewSale({ product: "", quantity: "", price: "" });
    fetchSales();
  };

  const deleteSale = async (id) => {
    await fetch(`http://localhost:5000/api/sales/${id}`, { method: "DELETE" });
    fetchSales();
  };

  const total = sales.reduce((sum, s) => sum + s.price * s.quantity, 0);

  return (
    <div style={{ maxWidth: "800px", margin: "auto", fontFamily: "Arial" }}>
      <h1>📊 Sales Dashboard</h1>
      <form onSubmit={addSale} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Product"
          value={newSale.product}
          onChange={(e) => setNewSale({ ...newSale, product: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newSale.quantity}
          onChange={(e) => setNewSale({ ...newSale, quantity: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={newSale.price}
          onChange={(e) => setNewSale({ ...newSale, price: e.target.value })}
          required
        />
        <button type="submit">Add Sale</button>
      </form>

      <table border="1" width="100%" cellPadding="8">
        <thead>
          <tr style={{ background: "#f0f0f0" }}>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.product}</td>
              <td>{sale.quantity}</td>
              <td>${sale.price}</td>
              <td>${sale.price * sale.quantity}</td>
              <td>
                <button onClick={() => deleteSale(sale.id)}>❌ Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 style={{ marginTop: "20px" }}>Total Revenue: ${total}</h3>
    </div>
  );
}
