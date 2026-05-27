function RecentOrders() {
  const orders = [
    {
      id: 1,
      product: "Laptop",
      quantity: 5,
      date: "27 May 2026",
      status: "Delivered",
    },

    {
      id: 2,
      product: "Wireless Mouse",
      quantity: 20,
      date: "26 May 2026",
      status: "Pending",
    },

    {
      id: 3,
      product: "Office Chair",
      quantity: 8,
      date: "25 May 2026",
      status: "Cancelled",
    },
  ];

  return (
    <div className="orders-section">
      <h2 style={{ color: "#effaff" }}
      >📦 Recent Orders</h2>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.product}</td>

              <td>{order.quantity}</td>

              <td>{order.date}</td>

              <td
                style={{
                  color:
                    order.status === "Delivered"
                      ? "#22c55e"
                      : order.status === "Pending"
                      ? "#facc15"
                      : "#ef4444",
                }}
              >
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentOrders;