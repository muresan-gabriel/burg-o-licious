import { Route, Link } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Burg-o-licious
        </Link>
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form className="nav navbar-nav navbar-right  d-flex justify-content-center align-items-center">
            <Link to="/login">
              <button
                className="btn m-1 btn-login shadow-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button
                className="btn btn-primary m-1 btn-sign-up shadow-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                Sign Up
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
