import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Layout from "../components/Layout";
import Form from "../components/Form";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Layout />}>
          <Route index element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
