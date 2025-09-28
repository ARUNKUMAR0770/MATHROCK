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
    <div className="bg-black w-screen h-[calc(100vh-60px)] text-sx text-white overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-full">
        
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
    </div>
    </>
  )
}

export default Algebra;