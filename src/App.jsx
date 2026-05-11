import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import GearShifter from './components/GearShifter';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Cast from './pages/Cast';
import Gallery from './pages/Gallery';
import './styles/global.css';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div 
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="page-wrapper"
          >
            <Home />
          </motion.div>
        } />
        <Route path="/about" element={
          <motion.div 
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="page-wrapper"
          >
            <About />
          </motion.div>
        } />
        <Route path="/cast" element={
          <motion.div 
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="page-wrapper"
          >
            <Cast />
          </motion.div>
        } />
        <Route path="/gallery" element={
          <motion.div 
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="page-wrapper"
          >
            <Gallery />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <main className="content">
          <AnimatedRoutes />
        </main>
        <GearShifter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
