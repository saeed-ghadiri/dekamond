
import { Link } from "react-router-dom";
import headerImg from "../assets/images/header.jpg";

const Header = () => {
  return (
    <header className="">
      <img
        src={headerImg}
        alt="Header"
        className="w-full rounded-lg"
      />
      {/* Navbar */}
      <nav className="bg-purple-900 rounded-lg flex flex-wrap gap-3 px-4 py-2">
        <Link
          to="/"
          className="text-yellow-500 hover:text-yellow-600 transition duration-300 ease-in-out"
        >
          Home
        </Link>
        <Link
          to="/product"
          className="text-yellow-500 hover:text-yellow-600 transition duration-300 ease-in-out"
        >
          Product
        </Link>
        <a
          href="/dekamond-catalog.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:text-yellow-600 transition duration-300 ease-in-out"
        >
          Catalog
        </a>
        <Link
          to="/about"
          className="text-yellow-500 hover:text-yellow-600 transition duration-300 ease-in-out"
        >
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
