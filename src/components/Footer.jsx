import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#DD6824] text-white px-5 py-12">
      <div className="container mx-auto flex gap-10 flex-wrap items-center justify-between">
        <div>
          <h1 className="lg:text-3xl text-xl mb-2">Want to Become a Success Employers?</h1>
          <p>We'll help you to grow your career and growth.</p>
        </div>
        <div>
            <Link to={"/contact"} className="bg-white px-6 py-3 border-[#E48650] border-4 shadow-xl rounded-full text-gray-800">Apply Today</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
