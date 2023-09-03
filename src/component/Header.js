import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import gsap, { Power2 } from "gsap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import futuralight from "./font/Futura-Light-font.ttf";
import Vogue from "./font/Vogue.ttf";
import "./Header.css";

function Header() {
  const Wrapper = styled.section`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100vw;
    height: 12vh;
    overflow: hidden;
  `;

  const Head = styled.div`
    @font-face {
      font-family: Vogue;
      src: url(${Vogue});
    }
    @font-face {
      font-family: futuralight;
      src: url(${futuralight});
    }
    width: 100%;
    height: 12vh;
    background: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    color: #fff;
    position: fixed;
    top: 0;
    transition: 2s all ease;

    @media (max-width: 820px) {
      height: 8vh;
    }

    #header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
    }

    #logo {
      font-family: Vogue;
      width: 100vw;
      height: 3vh;
      letter-spacing: 3px;
      text-align: center;
      margin-top: -1rem;
    }

    #logo a {
      color: #fff;
      text-decoration: none;
    }

    #logo a h1 {
      font-weight: 200;
      font-size: 2.5rem;
      letter-spacing: 3px;
    }

    @media (max-width: 768px) {
      #logo a {
        color: #fff;
        text-decoration: none;
        font-size: 2rem;
      }
    }

    #navbar {
      margin: 2rem auto;
    }

    #navbar ul {
      display: flex;
      flex-wrap: wrap;
      margin-top: 1.5rem;
    }

    #navbar ul a {
      text-decoration: none;
      color: #fff;
      font-family: Vogue, sans-serif;
      letter-spacing: 2px;
      font-size: 1rem;
      font-weight: 400;
      position: relative;
    }

    #navbar ul a:hover {
      color: #fff;
    }

    #navbar ul a:after {
      background: none repeat scroll 0 0 transparent;
      bottom: 0;
      content: "";
      display: block;
      height: 1px;
      left: 30%;
      position: absolute;
      background: #f9f9f9;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }
    #navbar ul a:hover:after {
      width: 100%;
      left: 0;
    }

    #navbar ul li {
      margin: auto 2rem;
      list-style: none;
      text-decoration: none;
    }

    .bar {
      position: absolute;
      right: 4rem;
      top: 0.7rem;
      cursor: pointer;
    }

    .bar1,
    .bar2,
    .bar3 {
      width: 30px;
      height: 3px;
      background-color: #fff;
      margin: 6px 0;
      transition: 0.4s;
    }

    @media (max-width: 820px) {
      .bar {
        right: 2rem;
        top: 1.5rem;
      }

      #navbar ul li {
        display: none;
      }
    }
  `;

  const minheader = useRef();

  function navToggle() {
    const minihead = document.querySelector(".minihead");
    const clsbar = document.querySelector(".clsbar");

    if (minihead.style.display === "block") {
      minihead.style.display = "none";
      clsbar.style.display = "none";
    } else {
      minihead.style.display = "block";
      clsbar.style.display = "block";
    }

    gsap.fromTo(
      minheader.current,
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1, ease: "power2.out" }
    );
  }

  var lastScroll = 0;
  const [scroll, setScroll] = useState(false);
  window.addEventListener("scroll", function () {
    var currentScroll = window.pageYOffset || document.body.scrollTop;
    if (currentScroll > lastScroll) {
      setScroll(true);
    } else {
      setScroll(false);
    }
    lastScroll = currentScroll;
  });

  return (
    <div>
      <Wrapper>
        <Head
          className={scroll ? "scroll" : ""}
          style={{
            display: scroll ? "none" : "flex",
          }}
        >
          <div id="header">
            <div id="logo">
              <Link to="/home">
                <h1>PRAISE</h1>
              </Link>
            </div>
            <nav id="navbar">
              <ul>
                <div className="dropdown">
                  <Link to="/">
                    <li className="dropbtn">TOPICS</li>
                  </Link>
                  <div className="dropdown-content">
                    <Link to="/">
                      <li>EVENT</li>
                    </Link>
                    <Link to="/">
                      <li>ENGINEER CORNER'S</li>
                    </Link>
                    <Link to="/">
                      <li>HOT TOPICS</li>
                    </Link>
                  </div>
                </div>
                <Link to="/">
                  <li>EVENT</li>
                </Link>
                <Link to="/">
                  <li>ENGINEER CORNER'S</li>
                </Link>
                <Link to="/">
                  <li>HOT TOPICS</li>
                </Link>
                <Link to="/">
                  <li>WHAT'S NEW</li>
                </Link>
              </ul>
            </nav>
            <div className="bar" onClick={navToggle}>
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
            </div>
          </div>
        </Head>

        <div className="minihead" ref={minheader}>
          <div className="clsbar" onClick={navToggle}>
            <div class="bar4"></div>
            <div class="bar5"></div>
            <div class="bar6"></div>
          </div>
          <div className="navlinks">
            <ul>
              <Link to="/">
                <li>HOME</li>
              </Link>
              <Link to="/">
                <li>EVENT</li>
              </Link>
              <Link to="/">
                <li>ENGINEER CORNER'S</li>
              </Link>
              <Link to="/">
                <li>HOT TOPICS</li>
              </Link>
              <Link to="/">
                <li>WHAT'S NEW</li>
              </Link>
            </ul>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Header;
