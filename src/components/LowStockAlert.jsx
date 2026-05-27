function LowStockAlert() {
  const lowStockItems = [
    {
      id: 1,
      product: "Wireless Mouse",
      stock: 4,
    },
    {
      id: 2,
      product: "Office Chair",
      stock: 0,
    },
  ];

  return (
    <div className="alert-section">
      <h2>🚨 Low Stock Alerts</h2>

      {lowStockItems.map((item) => (
        <div key={item.id} className="alert-card">
          <h3>{item.product}</h3>

          <p>
            Remaining Stock:
            <span> {item.stock}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default LowStockAlert;