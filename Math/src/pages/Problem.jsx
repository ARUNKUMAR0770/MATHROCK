import React from 'react'
import { Link } from 'react-router-dom';

const Problem = () => {
  return (
    <div className="box_grid">
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
  )
}

export default Problem;
