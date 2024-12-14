import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow-xl bg-white fixed top-0 w-full z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link
            to={"/"}
            className="flex title-font font-medium items-center text-gray-900"
          >
            <img src="./vite.svg" alt="logo" className="h-8 w-8" />
            <span className="ml-3 text-xl">Wiki Jobs</span>
          </Link>
          <button
            onClick={toggleMenu}
            className="inline-flex items-center md:hidden text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row  md:items-center text-base w-full md:w-auto text-gray-800`}
        >
          <Link
            to={"/"}
            className="mr-5 text-gray-600 m-2 hover:text-gray-900 block md:inline"
          >
            SEARCH JOBS
          </Link>
          <Link
            to={"/work-from-home-jobs"}
            className="mr-5 hover:text-gray-900 m-2 block md:inline"
          >
            WORK FROM HOME
          </Link>
          <Link
            to={"/fresher-jobs"}
            className="mr-5 text-gray-600 m-2 hover:text-gray-900 block md:inline"
          >
            FRESHER JOB
          </Link>
          <Link
            to={"/privacy-policy"}
            className="mr-5 text-gray-600 m-2 hover:text-gray-900 block md:inline"
          >
            PRIVACY POLICY
          </Link>
        </nav>

        <Link
          to={"/contact"}
          className="md:inline-flex hidden items-center bg-[#DD6824] border-0 py-1 px-4 focus:outline-none hover:bg-yellow-700 rounded text-white mt-4 md:mt-0"
        >
          CONTACT US
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
