import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from "./views/LandingPage/Sections/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";

function App() {
  return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
