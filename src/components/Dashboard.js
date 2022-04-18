import { Route, Link } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import Navbar from "./Navbar.js";
import axios from "axios";
import PostContainer from "./PostContainer.js";

function Dashboard() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="explore-section container-fluid row row-cols-1 row-cols-lg-5 g-4">
        <PostContainer></PostContainer>
        <PostContainer></PostContainer>
        <PostContainer></PostContainer>
        <PostContainer></PostContainer>
        <PostContainer></PostContainer>
        <PostContainer></PostContainer>
        <PostContainer></PostContainer>
      </div>
    </div>
  );
}

export default Dashboard;
