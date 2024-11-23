import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Estatutos from './pages/Estatutos';
import EstadosFinancieros from './pages/EstadosFinancieros';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';  // Importa el Navbar
import Footer from './components/Footer'; // Importa el Footer

function App() {
  return (
    <Router>
       <div >
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/estatutos" element={<Estatutos />} />
          <Route path="/estados-financieros" element={<EstadosFinancieros />} /> 
          <Route path="*" element={<NotFound />} />
          
        </Routes>
        
      <Footer/> {/* Incluye el Footer */}
      </div>
      
    </Router>
  );
}

export default App;
