import React from 'react'
import './App.css'
import { Routes, Route, } from "react-router-dom";
import Dashboard from './components/Dashboard';


const App = () => {

  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={<Dashboard />}/>
     </Routes>
      
    </div>
  )
}

export default App