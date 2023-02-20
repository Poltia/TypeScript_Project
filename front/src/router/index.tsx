import React from "react";
import Layout from "../layouts/Layout";
import SubLayout from "../layouts/SubLayout";
import { useRoutes } from "react-router-dom";
import Main from "../pages/main";
import Login from "../pages/login";

const Router = () => {
  const routes = [
    {
      element: <Layout />,
      children: [{ path: "/main", element: <Main /> }],
    },
    {
      element: <SubLayout />,
      children: [{ path: "/", element: <Login /> }],
    },
  ];

  return useRoutes(routes);
};

export default Router;
