import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../components/Signup";
import Login from "../components/Login";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
