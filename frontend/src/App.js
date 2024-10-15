import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar2';  // Importa el Navbar
import Footer from './components/Footer'; // Importa el Footer

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Navbar />
        <div style={{ flex: 1, paddingLeft: '20px' }}>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer/> {/* Incluye el Footer */}
      </div>
      </div>
      
    </Router>
  );
}

export default App;
