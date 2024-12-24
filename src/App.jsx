import React, { useEffect } from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { FaLeaf } from 'react-icons/fa';

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
    const leafCount = 10; // Número de hojas
    const container = document.querySelector(".background-animation");

    if (container) {
      for (let i = 0; i < leafCount; i++) {
        const leaf = document.createElement("div");
        leaf.classList.add("leaf");
        container.appendChild(leaf);
      }
    }
  }, []);

  return (
    <>
      {/* Fondo animado */}
      <div className="background-animation"></div>

      {/* Contenido principal */}
      <div className="App">
        <main className="inicio">
          <Router>
            <Navbar />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/Contacto" element={<Contacto />} />
              <Route path="/Servicios" element={<Servicios />} />
              <Route path="/Terminos" element={<Terminos />} />
              <Route path="/Privacidad" element={<Privacidad />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
          </Router>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
