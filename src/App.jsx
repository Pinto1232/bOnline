import React from 'react'
import './App.css'
import { Routes, Route, } from "react-router-dom";
import PageError from './pages/PageError';
import Dashboard from './components/layout/Dashboard';


const App = () => {


  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<PageError />} />
     </Routes>
      
    </div>
  )
}

export default App