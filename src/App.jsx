import React from 'react'
import './App.css'
import { Routes, Route, } from "react-router-dom";
import ErrorPage from './pages/errorPage';
import Dashboard from './components/Dashboard';


const App = () => {

  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path='*' element={ <ErrorPage/>} />
     </Routes>
      
    </div>
  )
}

export default App