import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark mb-4 w-100"
      style={{ backgroundColor: "#5352ed" }}
    >
      <Link className="navbar-brand" to="/">
        Tendencys Orders And Products
      </Link>
    </nav>
  );
};

export default Header;
