import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../assets/img/logo.svg"
const Header = () => {
  return (
    <header className="border-b">
      <nav className="flex items-center justify-between flex-wrap bg-violet-800 p-4">
        <div className="flex items-center flex-shrink-0 text-white mr-8">
          <Link className="flex items-center" to="/"><svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-bold text-4x1 lg:text-[35px] tracking-tight">Estatery</span>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
          <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4  lg:inline-block lg:mt-0 text-white hover:text-violet-500 mr-4"
            >
              Rent
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-violet-500 mr-4"
            >
              Houses
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-violet-500"
            >
              Apartment
            </a>
          </div>
          <div>
            <div className="flex items-center gap-6">
          <Link className="hover:text-orange-900  text-white transition" to=" ">
            Log in
          </Link>
          <Link
            className="bg-violet-700 hover:bg-white text-white  hover:text-violet-500 px-4 py-3 rounded-lg transition"
            to=" "
          >
            Sign Up
          </Link>
        </div>
          </div>
        </div>
      </nav>

      {/* <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8 mr-4 sm:h-9"
            alt="Flowbite Logo"
          />
        </Link>
        {/* {    }
    <Link to="/">
      <img src={Logo} alt=""/>
    </Link>
    {    } */}
        {/* <div className="flex items-center gap-6">
          <Link className="hover:text-violet-900 transition" to=" ">
            Log in
          </Link>
          <Link
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
            to=" "
          >
            Sign Up
          </Link>
        </div> */}
      {/* </div> */} 
    </header>
  );
};

export default Header;
