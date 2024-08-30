import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import { Layout } from "src/components/layout/layout";
import { ErrorPage } from "src/components/error/error";

import Home from "src/page/home/home";
const Test = lazy(() => import(/* webpackPrefetch: true */ "src/page/test/test"));
const Resume = lazy(() => import(/* webpackPrefetch: true */ "src/page/resume/resume"));

let routes: RouteObject[] = [
  {
    path: "/",
    Component: Layout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        index: true,
        Component: Home,
        ErrorBoundary: ErrorPage,
      },
      {
        path: "test",
        Component: Test,
        ErrorBoundary: ErrorPage,
      },
    ],
  },
  {
    path: "/resume",
    Component: Resume,
    ErrorBoundary: ErrorPage,
  },
];

export function BrowserRouter() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}
