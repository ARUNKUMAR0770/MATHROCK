import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar'
import Concept from './pages/Concept'
import Problem from './pages/Problem'
import BasicArithmetic from './component/BasicArithmetic/BasicArithmetic';
import Algebra from './component/Algebra/Algebra';
import ElementaryAlgebra from './component/Algebra/ElementaryAlgebra';
import Login from './pages/Login';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/concept' element={<Concept/>}/>
        <Route path='/problem' element={<Problem/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/basic-arithmetic' element={<BasicArithmetic/>}/>
        <Route path='/algebra' element={<Algebra/>}/>
        <Route path='/elementary-algebra' element={<ElementaryAlgebra/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App