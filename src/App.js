import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/pages/navbar';
import Home from './components/pages/home';
import About from './components/pages/about';
import Contact from './components/pages/contact'; 
import Service from './components/pages/services';
import Login from './components/pages/login';
import ForgotPassword from './components/pages/forgotpassword';
import Signin from './components/pages/signin';
import Appartement from './components/pages/service/appartement';
import Chambre from './components/pages/service/chambre';
import Maison from './components/pages/service/maison';
import Studio from './components/pages/service/studio';
import Terrain from './components/pages/service/terrain';
import ScrollToTop from './components/ScrollToTop.js';
// import Alerte from './components/pages/notification';

import Footer from './components/pages/footer';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        {/* <Route path='/notification' element={<Alerte />} /> */}

{/* pages service */}
        <Route path="/service/appartement" element={<Appartement />} />
        <Route path="/service/chambre" element={<Chambre />} />
        <Route path="/service/maison" element={<Maison />} />
        <Route path="/service/studio" element={<Studio />} />
        <Route path="/service/terrain" element={<Terrain />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
