import React, { useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import futuralight from "./font/Futura-Light-font.ttf";
import Vogue from "./font/Vogue.ttf";


function Header() {


  return (
    <div>
      <div>
        <div>
          <div id="header">
            <div id="logo">
              <h3>PRAISE</h3>
            </div>
            <nav id="navbar">
              <ul>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/">
                  <li>Home</li>
                </Link>
              </ul>
             
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
