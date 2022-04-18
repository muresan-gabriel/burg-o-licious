import React, { useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Dashboard from "./components/Dashboard.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
