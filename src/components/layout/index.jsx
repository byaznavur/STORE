import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header/index";
import Footer from "./footer";

export class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="min-vh-100">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
