import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import { Layout } from "src/components/layout/layout";
import { ErrorPage } from "src/page/error/error";

import Home from "src/page/home/home";
const Test = lazy(() => import(/* webpackPrefetch: true */ "src/page/test/test"));

let routes: RouteObject[] = [
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "test",
        Component: Test,
      },
    ],
  },
];

export function BrowserRouter() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}
