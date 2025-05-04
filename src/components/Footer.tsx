import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-6 text-sm text-gray-500">
      © {new Date().getFullYear()} MySite. All rights reserved.
    </footer>
  );
};

export default Footer;
