import React from 'react';
import HomePage from './pages/HomePage';
import EditDetailsPage from './pages/EditDetailsPage'
import NavBar from "./components/NavBar";
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailsPage from "./pages/DetailsPage";
import Login from "./pages/LoginPage";
import AddSportPage from "./components/AddSportPage";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<DetailsPage />} />
        <Route path="/edit/:id" element={<EditDetailsPage />} />
        <Route path="/add" element={<AddSportPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
