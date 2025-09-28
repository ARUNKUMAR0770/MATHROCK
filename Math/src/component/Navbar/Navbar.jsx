import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-screen h-[60px] bg-black  text-white flex items-center justify-between font-poppins px-6 font">
      {/* Logo */}
      <div className="font-bold text-2xl">
        <h2 className="text-white">
          MATH<span className="text-blue-500">ROCK...</span>
        </h2>
      </div>

      {/* Links + Button */}
      <div className="inline-flex gap-6 items-center">
        <ul className="inline-flex gap-6 font-poppins font-bold tracking-wide">
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
    </div>
  );
};

export default Navbar;
