import "./App.css";
import ForecastChart from "./components/ForecastChart";
import InventoryTable from "./components/InventoryTable";
import LowStockAlert from "./components/LowStockAlert";
import RecentOrders from "./components/RecentOrders";
import SupplierTable from "./components/SupplierTable";

function App() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2 style={{ color: "#effaff" }}
        >📦 StockWise</h2>

        <p>📊 Dashboard</p>
        <p>📦 Inventory</p>
        <p>🚚 Suppliers</p>
        <p>📈 Forecast</p>
        <p>⚙️ Settings</p>
      </aside>

      <main className="main-content">
        <nav className="navbar">
          <h2 style={{ color: "#effaff" }}
          >Smart Inventory Dashboard</h2>

          <input type="text" placeholder="Search products..." />
        </nav>

        <h1 className="dashboard-title">
          Inventory Overview
        </h1>

        <p className="dashboard-text">
          Monitor stock levels and supply chain performance 🚀
        </p>

        <div className="card-container">
          <div className="card">
            <h3>Total Products</h3>
            <h1>1,250</h1>
          </div>

          <div className="card">
            <h3>Low Stock Alerts</h3>
            <h1>18</h1>
          </div>

          <div className="card">
            <h3>Suppliers</h3>
            <h1>42</h1>
          </div>

          <div className="card">
            <h3>Monthly Orders</h3>
            <h1>320</h1>
          </div>
        </div>
        <InventoryTable/>
        <LowStockAlert/>
        <ForecastChart/>
        <SupplierTable/>
        <RecentOrders/>
      </main>
    </div>
   
  );
}

export default App;