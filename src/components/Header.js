import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <header className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container">
          <Link className="navbar-brand" to='/'>
            Ordenes
          </Link>
          <button>Añadir Orden</button>
        </div>
      </header>
  );
};

export default Header;