import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white px-5 py-12">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-3xl">Want to Become a Success Employers?</h1>
          <p>We'll help you to grow your career and growth.</p>
        </div>
        <div>
            <Link to={"/contact"} className="bg-white p-3 rounded-full text-gray-800">Apply Today</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
