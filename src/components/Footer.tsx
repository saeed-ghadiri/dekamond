import React from "react";
import footerImg from "../assets/images/footer.jpg";

const Footer = () => {
  return (
    <footer className="mt-8">
      <img src={footerImg} alt="Footer" className="w-full h-40 object-cover" />
      <div className="bg-gray-800 text-white text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} MySite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
