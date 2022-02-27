import React, { useRef, useState, useEffect } from "react";

import "./ThemeMenu.scss";

import { useDispatch } from "react-redux";

import { setThemeMode, setThemeColor } from "../../redux/Theme/theme.actions";

import { mode_settings, color_settings } from "./ThemeMenu.utils";

const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener("mousedown", (e) => {
    // user click toggle btn
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle("active");
    } else {
      // user clicks outside
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove("active");
      }
    }
  });
};

const ThemeMenu = () => {
  const menu_ref = useRef(null);
  const menu_toggle_ref = useRef(null);

  clickOutsideRef(menu_ref, menu_toggle_ref);

  const setActive = () => menu_ref.current.classList.add("active");
  const closeMenu = () => menu_ref.current.classList.remove("active");

  const [currMode, setCurrMode] = useState("dark");
  const [currColor, setCurrColor] = useState("blue");

  const dispatch = useDispatch();

  const setMode = (mode) => {
    setCurrMode(mode.id);
    localStorage.setItem("themeMode", mode.class);
    dispatch(setThemeMode(mode.class));
  };

  const setColor = (color) => {
    setCurrColor(color.id);
    localStorage.setItem("colorMode", color.class);
    dispatch(setThemeColor(color.class));
  };

  useEffect(() => {
    const themeClass = mode_settings.find(
      (e) => e.class === localStorage.getItem("themeMode", "theme-mode-light")
    );
    const colorClass = mode_settings.find(
      (e) => e.class === localStorage.getItem("colorMode", "theme-mode-light")
    );

    if (themeClass !== undefined) setCurrMode(themeClass.id);
    if (colorClass !== undefined) setCurrMode(colorClass.id);
  }, []);

  return (
    <div>
      <button
        ref={menu_toggle_ref}
        className="dropdown__toggle"
        onClick={() => setActive()}
      >
        <i className="bx bx-palette"></i>
      </button>
      <div ref={menu_ref} className="theme-menu">
        <h4>Theme settings</h4>
        <button className="theme-menu__close" onClick={() => closeMenu()}>
          <i className="bx bx-x"></i>
        </button>
        <div className="theme-menu__select">
          <span>Chosse mode</span>
          <ul className="mode-list">
            {mode_settings.map((item, index) => (
              <li key={index} onClick={() => setMode(item)}>
                <div
                  className={`mode-list__color ${item.background} ${
                    item.id === currMode ? "active" : ""
                  }`}
                >
                  <i className="bx bx-check"></i>
                </div>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="theme-menu__select">
          <span>Chosse color</span>
          <ul className="mode-list">
            {color_settings.map((item, index) => (
              <li key={index} onClick={() => setColor(item)}>
                <div
                  className={`mode-list__color ${item.background} ${
                    item.id === currColor ? "active" : ""
                  }`}
                >
                  <i className="bx bx-check"></i>
                </div>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThemeMenu;
