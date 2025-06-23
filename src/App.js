import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/pages/navbar';
// import Navbar2 from './components/pages/navbar2';
import Home from './components/pages/home';
import About from './components/pages/about';
import Contact from './components/pages/contact'; 
import Categorie from './components/pages/categories';
import Login from './components/pages/login';
import Signin from './components/pages/signin';
import ForgotPassword from './components/pages/forgotpassword';
import Appartement from './components/pages/service/appartement';
import Chambre from './components/pages/service/chambre';
import Maison from './components/pages/service/maison';
import Studio from './components/pages/service/studio';
import Terrain from './components/pages/service/terrain';
import Vehicule from "./components/pages/vehicule/vehicule";
import ScrollToTop from './components/ScrollToTop.js';
import Footer from './components/pages/footer';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categorie />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />

{/* pages service */}
        <Route path="/service/appartement" element={<Appartement />} />
        <Route path="/service/chambre" element={<Chambre />} />
        <Route path="/service/maison" element={<Maison />} />
        <Route path="/service/studio" element={<Studio />} />
        <Route path="/service/terrain" element={<Terrain />} />

{/* pages vehicules*/}
        <Route path="/vehicule/vehicule"element={<Vehicule/>} />

        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
