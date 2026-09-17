import React from "react";

const Footer = () => {
  return (
    <footer className="bg-component-background text-center py-6">
      <p>
        &copy; {new Date().getFullYear()} Nischal Shrestha. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
