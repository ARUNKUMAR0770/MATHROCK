import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[60px] bg-black text-white flex items-center justify-between font-poppins px-8 z-20">
        {/* Logo */}
        <div className="font-bold text-2xl">
          <h2 className="text-white">
            MATH<span className="text-blue-500">ROCK...</span>
          </h2>
        </div>

        {/* Desktop Links */}
        <div className="inline-flex gap-6 items-center max-sm:hidden">
          <ul className="inline-flex gap-6 font-poppins font-bold sx:text-sm tracking-wide">
            <Link to="/concept"><li className="underline-hover">Concept</li></Link>
            <Link to="/problem"><li className="underline-hover">Problem</li></Link>
          </ul>

          {/* Login button as Link */}
          <Link
            to="/login"
            className='btn'>
            Login
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <Menu
          className="inline-flex items-center sm:hidden cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-[60px] right-0 h-[calc(100vh-60px)] w-[200px] bg-black text-white flex flex-col items-center font-poppins px-6 font-bold gap-6 z-10 transform transition-transform duration-500 ease-in-out
        ${showMenu ? "translate-x-0" : "translate-x-full"} box-shadow-extra-large`}
      >
        <ul className="flex flex-col gap-6 font-poppins font-bold sm:text-sm tracking-wide mt-4">
          <Link to="/concept" onClick={() => setShowMenu(false)}>
            <li className="underline-hover">Concept</li>
          </Link>
          <Link to="/problem" onClick={() => setShowMenu(false)}>
            <li className="underline-hover">Problem</li>
          </Link>
        </ul>

        {/* Login button in mobile drawer */}
        <Link
          to="/login"
          onClick={() => setShowMenu(false)}
          className="btn"
        >
          Login
        </Link>
      </div>
    </>
  );
};

export default Navbar;
