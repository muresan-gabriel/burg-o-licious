import { Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar.js";
import axios from "axios";

function Login() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="loginContainer container">
        <h4 className="mb-5">Welcome!</h4>
        <h4 className="mb-3">Login</h4>
        <form>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="loginEmail"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="loginPassword"
              placeholder="Password"
            />
          </div>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
