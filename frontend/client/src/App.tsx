import React from 'react';
import HomePage from './pages/HomePage';
import NavBar from "./components/NavBar";
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}