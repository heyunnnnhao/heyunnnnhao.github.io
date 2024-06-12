import { createBrowserRouter, RouterProvider } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import { Layout } from "src/components/layout/layout";
import { ErrorPage } from "src/page/error/error";

import { Home } from "src/page/home/home";

let routes: RouteObject[] = [
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
];

export function BrowserRouter() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}
