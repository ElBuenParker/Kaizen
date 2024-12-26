import React, { useEffect } from 'react';
import './index.css';
import { Routes, Route, Navigate } from 'react-router-dom'; // Sin Router ni BrowserRouter
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Pages
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Servicios from './pages/Servicios';
import Terminos from './pages/Terminos';
import Privacidad from './pages/Privacidad';

function App() {
  useEffect(() => {
    const leafCount = 10;
    const container = document.querySelector('.background-animation');

    if (container) {
      for (let i = 0; i < leafCount; i++) {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        container.appendChild(leaf);
      }
    }
  }, []);

  return (
    <>
      <div className="background-animation"></div>
      <div className="App">
        <Navbar />
        <main className="inicio">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
