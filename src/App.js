import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar"
import LandingPage from "./Containers/LandingPage";

import LoginPage from "./Containers/Auth/LoginPage";
import SignupPage from "./Containers/Auth/SignupPage";
import ClubPage from "./Containers/Club/ClubPage";
import SchedulePage from "./Containers/Club/SchedulePage";
import MembersPage from "./Containers/Club/MembersPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route exact path="/club" element={<ClubPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/members" element={<MembersPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
