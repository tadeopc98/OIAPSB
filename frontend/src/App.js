import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Estatutos from './pages/Estatutos';
import EstadosFinancieros from './pages/EstadosFinancieros';
import Asamblea from './pages/Asamblea';
import Obras from './pages/Obras';
import ComprasPublicas from './pages/ComprasPublicas';
import ProyectosCurso from './pages/ProyectosCurso';
import Maquinaria from './pages/Maquinaria';
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
          <Route path="/asambleas" element={<Asamblea />} />
          <Route path="/obras" element={<Obras />} />
          <Route path="/compras-publicas" element={<ComprasPublicas />} />
          <Route path="/proyectos-en-curso" element={<ProyectosCurso />} />
          <Route path="/maquinaria-transporte" element={<Maquinaria />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
        
      <Footer/> {/* Incluye el Footer */}
      </div>
      
    </Router>
  );
}

export default App;
