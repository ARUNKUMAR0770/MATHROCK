import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="w-screen h-[60px] bg-black text-white flex items-center justify-between font-poppins px-6 font">
        {/* Logo */}
        <div className="font-bold text-2xl">
          <h2 className="text-white">
            MATH<span className="text-blue-500">ROCK...</span>
          </h2>
        </div>

        {/* Links + Button */}
        <div className="inline-flex gap-6 items-center max-sm:hidden *">
          <ul className="inline-flex gap-6 font-poppins font-bold sx:text-sm tracking-wide">
            <Link to="/concept"><li className='underline-hover'>
              Concept
            </li></Link>
            <Link to="/problem"><li className='underline-hover'>
              Problem
            </li></Link>
          </ul>

          <button className="border border-white py-[5px] px-[18px] rounded-[20px] font-bold bg-black hover:bg-white hover:text-black cursor-pointer transition duration-300 ease-in-out">
            Login
          </button>
        </div>

        <Menu
          className="inline-flex items-center sm:hidden cursor-pointer"
          onClick={() => { setShowMenu(!showMenu); }}
        />
      </div>

      {/* Mobile Menu Drawer */}
<div
  className={`fixed top-[60px] right-0 h-[calc(100vh-60px)] w-[200px] bg-black text-white flex flex-col items-center font-poppins px-6 font-bold gap-6 z-10 transform transition-transform duration-500 ease-in-out
  ${showMenu ? "translate-x-0" : "translate-x-full"} box-shadow-extra-large`}
>
  <ul className="flex flex-col gap-6 font-poppins font-bold sm:text-sm tracking-wide mt-4">
    <Link to="/concept">
      <li className="underline-hover" onClick={() => setShowMenu(false)}>
        Concept
      </li>
    </Link>
    <Link to="/problem">
      <li className="underline-hover" onClick={() => setShowMenu(false)}>
        Problem
      </li>
    </Link>
  </ul>
  <button className="border border-white py-[5px] px-[18px] rounded-[20px] font-bold bg-black hover:bg-white hover:text-black cursor-pointer transition duration-300 ease-in-out">
    Login
  </button>
</div>

    </>
  );
};

export default Navbar;
