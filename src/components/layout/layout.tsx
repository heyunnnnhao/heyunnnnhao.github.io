import { CSSProperties } from "react";
import { NavLink, useLocation, Outlet } from "react-router-dom";

import "./layout.scss";

export function Layout() {
  return (
    <>
      <div className="header"></div>
      <div className="container">
        <Outlet />
      </div>
      <div className="footer"></div>
    </>
  );
}
