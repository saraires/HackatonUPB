import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UsersLoginPage from "./pages/UsersLogin";
import UsersRegisterPage from "./pages/UsersRegister";
import ExperienciasPage from "./pages/ExperienciasPage";
import HospedajesPage from "./pages/HospedajesPage";
import UserPage from "./pages/UserPage";
// import SessionTimeout from "./components/SessionTimeout"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";


export default function App() {
  // let primerTiempo = 0

  // useEffect(() => {
  //   primerTiempo = getPreviousNavTime();
  // });

  // function getCurrentTime() {
  //   let hoy = new Date();
  //   let hora = hoy.getTime;
  //   console.log(hora);
  // }

  // function getPreviousNavTime(){
  //   let hoy = new Date();
  //   let hora = hoy.getTime;
  //   console.log(hora);
  // }

  // function onUserNavigate() {
  //   let idleTime = getCurrentTime() - primerTiempo;
  //   console.log(idleTime)
  //   if (idleTime > 2) {
  //     localStorage.clear();
  //     window.location.href = '/';
  //   }
  // }


  return (
    // path="/" onEnter={onUserNavigate} onChange={onUserNavigate}
    <Router>
      <Navbar />
      {/* <SessionTimeout /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<UsersLoginPage />} />
        <Route path="/register" element={<UsersRegisterPage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/users/*" element={<UserPage />} />
        <Route path="/hospedajes/" element={<HospedajesPage />} />
        <Route path="/experiencias/" element={<ExperienciasPage />} />

        <Route path="/myusers/" element={<Navigate replace to="/users" />} />
        <Route path="/users/:id/" element={<UserPage />} />

        <Route path="/dashboard/*" element={<DashboardPage />}>
          <Route path="welcome" element={<p>Welcome!</p>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}
