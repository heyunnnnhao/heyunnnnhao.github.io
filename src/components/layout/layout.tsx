import { Suspense, CSSProperties } from "react";
import { NavLink, useLocation, Outlet } from "react-router-dom";

import "./layout.scss";

export function Layout() {
  return (
    <>
      <div className="header">
        <NavLink to={""}>home</NavLink>
        <NavLink to={"test"}>test</NavLink>
      </div>
      <div className="container">
        <Suspense fallback={<></>}>
          <Outlet />
        </Suspense>
      </div>
      <div className="footer"></div>
    </>
  );
}
