function SupplierTable() {
  const suppliers = [
    { id: 1, name: "TechZone", product: "Laptop, Keyboard", contact: "techzone@email.com", rating: "4.8/5" },
    { id: 2, name: "GadgetPro", product: "Wireless Mouse", contact: "gadgetpro@email.com", rating: "4.5/5" },
    { id: 3, name: "FurniHub", product: "Office Chair", contact: "furnihub@email.com", rating: "4.2/5" },
  ];

  return (
    <div className="supplier-section">
      <h2 style={{ color: "#effaff" }}
      >🚚 Supplier Management</h2>

      <table className="supplier-table">
        <thead>
          <tr>
            <th>Supplier</th>
            <th>Products Supplied</th>
            <th>Contact</th>
            <th>Rating</th>
          </tr>
        </thead>

        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.id}>
              <td>{supplier.name}</td>
              <td>{supplier.product}</td>
              <td>{supplier.contact}</td>
              <td>{supplier.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SupplierTable;