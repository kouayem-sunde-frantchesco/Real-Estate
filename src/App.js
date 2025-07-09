import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Dashboard from "./components/pages/dashboard.js";
import Navbar from './components/pages/navbar';
import PrivateRoute from './components/PrivateRoute';
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
import Favoris from './components/pages/favoris';
import Annonces from './components/pages/annonces';
import Notifications from './components/pages/notifications';
import Parametres from "./components/pages/parametres.js";
import UserInfoModal from "./components/pages/UserInfoModal.js";
import Classique from "./components/pages/classique.js";
import Vip from "./components/pages/vip.js";
import RendezVous from "./components/pages/rendez-vous.js";
import Vehicule from "./components/pages/vehicule/vehicule";
import ScrollToTop from './components/ScrollToTop.js';
import Footer from './components/pages/footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        {/* ✅ Routes publiques */}
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        {/* ✅ Routes protégées */}
        <Route path="/" element={
          <PrivateRoute><Home /></PrivateRoute>
        } />

        <Route path="/dashboard" element={
          <PrivateRoute><Dashboard /></PrivateRoute>
        } />

        <Route path="/favoris" element={
          <PrivateRoute><Favoris /></PrivateRoute>
        } /> annonces notification parametre

        <Route path="/annonces" element={
          <PrivateRoute><Annonces /></PrivateRoute>
        } />
        <Route path="/notifications" element={
          <PrivateRoute><Notifications /></PrivateRoute>
        } />
        <Route path="/parametres" element={
          <PrivateRoute><Parametres /></PrivateRoute>
        } />

        <Route path="/rendez-vous" element={
          <PrivateRoute><RendezVous /></PrivateRoute>
        } />

        <Route path="/about" element={
          <PrivateRoute><About /></PrivateRoute>
        } />

        <Route path="/contact" element={
          <PrivateRoute><Contact /></PrivateRoute>
        } />
        <Route path="/categories" element={
          <PrivateRoute><Categorie /></PrivateRoute>
        } />

        <Route path="/classique" element={
          <PrivateRoute><Classique /></PrivateRoute>
        } />

        <Route path="/vip" element={
          <PrivateRoute><Vip /></PrivateRoute>
        } />

        {/* ✅ Pages service protégées */}
        <Route path="/service/appartement" element={
          <PrivateRoute><Appartement /></PrivateRoute>
        } />

        <Route path="/service/chambre" element={
          <PrivateRoute><Chambre /></PrivateRoute>
        } />

        <Route path="/service/maison" element={
          <PrivateRoute><Maison /></PrivateRoute>
        } />

        <Route path="/service/studio" element={
          <PrivateRoute><Studio /></PrivateRoute>
        } />

        <Route path="/service/terrain" element={
          <PrivateRoute><Terrain /></PrivateRoute>
        } />

        {/* ✅ Page véhicule protégée */}
        <Route path="/vehicule/vehicule" element={
          <PrivateRoute><Vehicule /></PrivateRoute>
        } />

        {/* 🔁 Par défaut : redirection vers / */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
