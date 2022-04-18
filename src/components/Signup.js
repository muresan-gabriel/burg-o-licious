import { Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar.js";

function Signup() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="signupContainer container">
        <h4 className="mb-5">Welcome!</h4>
        <h4 className="mb-3">Signup</h4>
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="signupFullName"
              placeholder="Full Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="signupEmail"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="signupPassword"
              placeholder="Password"
            />
          </div>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
