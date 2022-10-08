import { Outlet } from "react-router-dom";
import * as React from "react";
import { Header, Footer } from "../components/index.js";

const Layout = () => {
  return (
    <div>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
