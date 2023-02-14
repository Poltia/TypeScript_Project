import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "components/footer";
import Header from "components/header";
import { LayoutContainer } from "./styles";

const Layout = () => {
  return (
    <>
      <LayoutContainer>
        <Header />
        <Outlet />
        <Footer />
      </LayoutContainer>
    </>
  );
};

export default Layout;
