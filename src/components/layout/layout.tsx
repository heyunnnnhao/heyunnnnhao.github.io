import { Suspense, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Button, theme } from "antd";
import { Loading } from "src/components/loading/loading";
import clsx from "clsx";

const items = [
  {
    key: 1,
    display: "home",
    path: "",
    external: false,
  },
  {
    key: 2,
    display: "test",
    path: "test",
    external: false,
  },
  {
    key: 3,
    display: "resume",
    path: "resume",
    external: true,
  },
];

function MenuItem({ item, active, onClick }) {
  const { token } = theme.useToken();

  return (
    <Button type="link" onClick={onClick} className={clsx("menu-item", active && "active")}>
      <NavLink to={item.path}>
        <div>{item.display}</div>
      </NavLink>
    </Button>
  );
}

export function Layout() {
  const [active, setactive] = useState<number>(1);

  return (
    <Suspense fallback={<Loading />}>
      <div className="header">
        <div className="logo">123</div>
        <div className="menu-bar">
          {items.map((item) => {
            return (
              <MenuItem
                item={item}
                active={active === item.key}
                onClick={() => {
                  setactive(item.key);
                }}
              />
            );
          })}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
      <div style={{ height: "40px", width: "100vw", position: "absolute", bottom: 0 }}></div>
    </Suspense>
  );
}
