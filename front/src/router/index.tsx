import React from "react";
import Layout from "@/layouts/Layout";
import SubLayout from "@/layouts/SubLayout";
import { useRoutes } from "react-router-dom";
import Main from "@/pages/main";
import Login from "@/pages/login";
import Spending from "@/pages/spending";
import {
  INCOME_PATH,
  LOGIN_PATH,
  MAIN_PATH,
  SPENDING_PATH,
  TRANSFER_PATH,
} from "@/constants/pathConstant";
import Income from "@/pages/income";
import Transfer from "@/pages/transfer";

const Router = () => {
  const routes = [
    {
      element: <Layout />,
      children: [
        { path: MAIN_PATH, element: <Main /> },
        { path: SPENDING_PATH, element: <Spending /> },
        { path: INCOME_PATH, element: <Income /> },
        { path: TRANSFER_PATH, element: <Transfer /> },
      ],
    },
    {
      element: <SubLayout />,
      children: [{ path: LOGIN_PATH, element: <Login /> }],
    },
  ];

  return useRoutes(routes);
};

export default Router;
