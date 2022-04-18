import { Route, Link } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import Navbar from "./Navbar.js";
import axios from "axios";

function Dashboard() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container-fluid row d-flex align-items-center justify-content-center">
        <h1>Hello.</h1>
      </div>
    </div>
  );
}

export default Dashboard;
