import "./App.css";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//Pages
import MainPage from "./pages/index";
import NotFound from "./pages/404";
import Success from "./pages/success";
import Failure from "./pages/failure";
class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage/>} />
          <Route exact path="/auth/google/success" element={<Success/>} />
          <Route exact path="/auth.google/failure" element={<Failure/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
