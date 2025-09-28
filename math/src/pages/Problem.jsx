import React from 'react'
import { Link } from 'react-router-dom';

const Problem = () => {
  return (
    <div className="bg-black w-screen h-[calc(100vh-60px)] text-sx text-white overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-full">
        
        <Link to="/basic-arithmetic" className="box">
          Basic Arithmetic
        </Link>

        <Link to="/algebra" className="box">
          Algebra
        </Link>

        <div className="box">
          Geometry
        </div>

        <div className="box">
          Data Handling / Statistics
        </div>

        <div className="box">
          Number Systems
        </div>

        <div className="box">
          Patterns & Sequences
        </div>

        <div className="box">
          Word Problems
        </div>

        <div className="box">
          Puzzles & Logical Reasoning
        </div>
      </div>
    </div>
  )
}

export default Problem;
