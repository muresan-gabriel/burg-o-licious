import { Route, Link } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import Navbar from "./Navbar.js";
import Burger from "./Burger.js";
import axios from "axios";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container-fluid d-flex justify-content-center main-container row">
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center">
          <h1 className="main-heading ">YOUR DELICIOUS BURGERS IN ONE PLACE</h1>
          <button type="button" class="btn btn-primary btn-lg get-started-btn">
            Browse Burgers
          </button>
        </div>
        <Burger className="col-md-6"></Burger>
      </div>
    </div>
  );
}

export default Home;
