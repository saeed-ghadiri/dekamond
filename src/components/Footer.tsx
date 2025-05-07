import React from "react";
import footerImg from "../assets/images/footer.jpg";

const Footer = () => {
  return (
    <footer className="">
      {/* Image with overlay text */}
      <div className="relative">
        <img
          src={footerImg}
          alt="Footer"
          className="w-full rounded-lg "
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          <p className="text-white text-sm text-center px-4">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
