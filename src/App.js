import "./App.css";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//Pages
import MainPage from "./pages";
import NotFound from "./pages/404";
import Success from "./pages/success";
import Failure from "./pages/failure";
import RegisterUser from "./pages/RegisterUser";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/success" element={<Success />} />
        <Route exact path="/failure" element={<Failure />} />
        <Route exact path="/register" element={<RegisterUser />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
