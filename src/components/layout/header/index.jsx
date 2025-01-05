import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <header className="alert m-0 alert-primary ">
        <nav className="container d-flex justify-content-between align-items-center">
          <Link to="/" className="text-decoration-none h2 fw-bold">
            Strore
          </Link>

          <ul className="d-flex justify-content-between align-items-center gap-3 m-0">
            <li>
              <Link className=" text-decoration-none" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className=" text-decoration-none" to="/users">
                Users
              </Link>
            </li>
            <li>
              <Link className=" text-decoration-none" to="/products">
                Products
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
