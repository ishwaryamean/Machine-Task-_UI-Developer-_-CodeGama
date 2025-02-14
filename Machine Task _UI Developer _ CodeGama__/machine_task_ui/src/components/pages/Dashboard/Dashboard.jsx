import React from "react";
import "./Dashboard.scss";

function Dashboard() {
  return (
    <section className="section">
      <div>
        <img
          className="main-dashboard"
          src="/assets/images/main-dashboard.png"
          alt="Main Dashboard"
        />
      </div>

      <div className="logo-section">
        <img src="/assets/images/Item -6.png" alt="Item -6" />
        <img src="/assets/images/Item -4.png" alt="Item -4" />
        <img src="/assets/images/Item -2.png" alt="Item -2" />
        <img src="/assets/images/Item -3.png" alt="Item -3" />
        <img src="/assets/images/Item-1.png" alt="Item-1" />
        <img src="/assets/images/Item -6.png" alt="Item -6" />
      </div>
    </section>
  );
}

export default Dashboard;
