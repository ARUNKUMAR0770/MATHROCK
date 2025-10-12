import React from 'react'
import { Link } from 'react-router-dom'

const Algebra = () => {
    
   const algebra_concept = [
    "Elementary Algebra",
    "Abstract Algebra",
    "Universal Algebra",
    "Linear Algebra",
    "Commutative Algebra",
    "Boolean Algebra",
  ]

  return (
    <>
    <div className="box_grid">
      <Link to="/elementary-algebra" className="box">
          Elementary Algebra
        </Link>

        <div className="box">
          Abstract Algebra
        </div>

        <div className="box">
          Universal Algebra
        </div>

        <div className="box">
         Linear Algebra
        </div>

        <div className="box">
         Commutative Algebra
        </div>

        <div className="box">
         Boolean Algebra
        </div>
    </div>
    </>
  )
}

export default Algebra;