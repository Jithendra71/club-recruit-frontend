import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";

function App() {
  const Routing = () => {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />{" "}
      </Routes>
    );
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Routing />
    </BrowserRouter>
  );
}
export default App;
