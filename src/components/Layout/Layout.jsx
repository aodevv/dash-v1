import React, { useEffect } from "react";
import "./Layout.scss";

import Sidebar from "../Sidebar/Sidebar";
import Topnav from "../Topnav/Topnav";
import RouteS from "../RouteS";

import { BrowserRouter as Router } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { setThemeMode, setThemeColor } from "../../redux/Theme/theme.actions";

const Layout = () => {
  const theme = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");
    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

    dispatch(setThemeMode(themeClass));
    dispatch(setThemeColor(colorClass));
  }, [dispatch]);

  console.log(theme);
  return (
    <Router>
      <div className={`layout ${theme.mode} ${theme.color}`}>
        <Sidebar />
        <div className="layout__content">
          <Topnav />
          <div className="layout__content-main">
            <RouteS />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Layout;
