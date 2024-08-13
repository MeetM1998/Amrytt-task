import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-newBlack text-white p-4 text-center shadow-lg">
      &copy; {new Date().getFullYear()} MyApp. All rights reserved.
    </footer>
  );
};

export default Footer;
