// import { useState } from 'react'
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import './App.css'
import Home from './pages/Home';
import Resume from './components/Resume';


function App() {
  

  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Resume/>
    </>
  )
}

export default App
