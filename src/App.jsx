import React from 'react'
import './App.css'
import { Routes, Route, } from "react-router-dom";
import Dashboard from './components/Dashboard';
import PageError from './pages/PageError';


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