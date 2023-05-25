import { useState } from 'react'
import Footer from "./components/Footer/Footer";
import Home from "./components/pages/Home/Home";
import Skils from "./components/pages/Skils/Skils";
import Projects from "./components/pages/Projects/Projects";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import FullProjects from "./components/pages/Projects/FullProjectsPage";
import Error from './components/pages/error/error';
function App() {
  

  return (
   <div className='App'>
     <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/FullProjects" element={<FullProjects />} />
          <Route path="*" element={<Error/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
   </div>
  )
}

export default App
