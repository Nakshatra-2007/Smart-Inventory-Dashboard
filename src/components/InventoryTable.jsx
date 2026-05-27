function InventoryTable() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      stock: 12,
      supplier: "TechZone",
      status: "In Stock",
    },
    {
      id: 2,
      name: "Wireless Mouse",
      category: "Accessories",
      stock: 4,
      supplier: "GadgetPro",
      status: "Low Stock",
    },
    {
      id: 3,
      name: "Office Chair",
      category: "Furniture",
      stock: 0,
      supplier: "FurniHub",
      status: "Out of Stock",
    },
    {
      id: 4,
      name: "Keyboard",
      category: "Accessories",
      stock: 25,
      supplier: "TechZone",
      status: "In Stock",
    },
  ];

  return (
    <div className="inventory-section">
      <h2 style={{ color: "#effaff" }} 
      >Inventory Stock Levels</h2>

      <table className="inventory-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Supplier</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.stock}</td>
              <td>{product.supplier}</td>
              <td
                className={
                  product.status === "In Stock"
                    ? "green"
                    : product.status === "Low Stock"
                    ? "orange"
                    : "red"
                }
              >
                {product.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryTable;