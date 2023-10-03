import React from 'react'
import { Header } from './Components'
import { HomePage } from './pages/HomePage'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { FormPage } from './pages/FormPage'
import Footer from './Components/Footer/Footer'




function App() {

  
  return (
    <div>
      
      <BrowserRouter>
        <Header/>        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacto" element={<FormPage />} />
        </Routes>
      </BrowserRouter>
     <Footer/>

    </div>
  )
}

export default App
