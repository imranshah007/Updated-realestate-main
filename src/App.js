import React from 'react'

import {Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar"; 
import Footer from "./Components/Footer"; 
import HomeList from "./Otherwindow/HomeList";
import PropertyDescription from "./Otherwindow/PropertyDescription";

const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeList />} />
        <Route path='/property/:id' element={<PropertyDescription />}/>
      </Routes>
      <Footer />

    </div>
  )
}

export default App;