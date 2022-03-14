import React from 'react'
import Home from './Home'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Cousine from './Cousine'

function Pages() {
  return (
      <BrowserRouter>
    <Routes>
       <Route path='/' element={ <Home />} />
       <Route path='/cousine' element={ <Cousine />} />
    </Routes>
      </BrowserRouter>

  )
}

export default Pages