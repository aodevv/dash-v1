import React from "react";
import "./Layout.scss";

import Sidebar from "../Sidebar/Sidebar";
import RouteS from "../RouteS";

import { BrowserRouter as Router } from "react-router-dom";

const Layout = () => {
  return (
    <Router>
      <div className="layout">
        <Sidebar />
        <div className="layout__content">
          <div className="layout__content-main">
            <RouteS />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Layout;
