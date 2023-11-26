import React from "react";
import footer from "../assest/img/footer.jpg";

const Footer = () => {
  return (
    <div className="sticky top-[100vh] bg-footer mt-10">
      <img src={footer} alt="Footer" className="w-full h-auto" />
      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-xl">
        <p className="text-white text-center">2500+ Happy Customers </p>
      </div>
    </div>
  );
};
export default Footer;
