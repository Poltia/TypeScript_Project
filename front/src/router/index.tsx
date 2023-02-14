import Layout from "layouts/Layout";
import Main from "pages/Main";
import React from "react";
import { useRoutes } from "react-router-dom";

const Router = () => {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Main /> }],
    },
  ];

  return useRoutes(routes);
};

export default Router;
