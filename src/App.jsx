/* eslint-disable no-redeclare */

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './components/Navbar.jsx'; // Ruta correcta para Navbar
//Pages
import Home from './pages/Home';
import Contacto from './pages/Contacto.jsx';
import Servicios from './pages/Servicios.jsx';



function App() {
  return (
    <>
     <div className="App">
     <main className='inicio'>
    
      <Router>
      <Navbar />
      <Routes>
      <Route index element={<Home/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/Contacto' element={<Contacto/>}/>
            <Route path='/Servicios' element={<Servicios/>}/>

            <Route path='*' element={<Navigate replace to="/" />} />
      </Routes>
    </Router>
     </main>
    </div>
  
   
    </>
    
  
  );
}

export default App;