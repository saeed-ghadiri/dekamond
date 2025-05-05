import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">MySite</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/product" className="hover:text-gray-300">
            Product
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
          <a
            href="/dekamond-catalog.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            Catalog
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
