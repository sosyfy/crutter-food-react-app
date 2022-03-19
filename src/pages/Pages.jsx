import React from 'react'
import Home from './Home'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Cousine from './Cousine'
import Category from '../components/Category'
import Recipe from './Recipe'


function Pages() {
  return (
      <BrowserRouter>
     <Category />
    <Routes>
       <Route path='/' element={ <Home />} />
       <Route path='/cousine' element={ <Cousine />} />
       <Route path='/cousine/:type' element={ <Cousine />} />
       <Route path='/recipe/:name' element={ <Recipe />} />
    </Routes>
      </BrowserRouter>

  )
}

export default Pages