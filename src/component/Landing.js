import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import "./Landing.css";
import landimg from "./images/TECHGYAAN-MAG.png";
import sharda4 from "./images/sharda4.jpeg";
import futuralight from "./font/Futura-Light-font.ttf";
import shrimp from "./font/SHRIMP.ttf";
import { gsap, Power1 } from "gsap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Landing() {
  const Wrapper = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    right: 0;
    left: 0;
    top: 0;
    overflow: hidden;
    /* z-index: -2; */
  `;

  const Magimg = styled.img`
    width: auto;
    height: 70vh;
    object-fit: cover;
    background-position: center;
    background-size: cover;
    position: absolute;
    left: 15%;
    z-index: 2;

    @media (max-width: 768px) {
      width: 70vw;
      margin: auto;
      background-size: cover;
      top: 5%;
      object-fit: contain;
    }
  `;

  const Landtxt = styled.h1`
    @font-face {
      font-family: futuralight;
      src: url(${futuralight});
    }
    @font-face {
      font-family: shrimp;
      src: url(${shrimp});
    }
    font-size: 3rem;
    line-height: 3.2rem;
    color: #ffffff;
    position: absolute;
    right: -18%;
    font-family: futuralight;
    font-weight: 600;
    width: 100%;
    text-align: center;
    z-index: 3;

    @media (max-width: 820px) {
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 1.7rem;
      right: 0;
      position: absolute;
      left: .1rem;
    }

    @media (max-width: 768px) {
      bottom: 5%;
      right: 2%;
    }
  `;

  const Btn1 = styled.button`
    position: absolute;
    bottom: 25%;
    font-size: 1.3rem;
    font-family: futuralight;
    z-index: 3;
    margin: auto;
    border: none;

    @media (max-width: 820px) {
      bottom: 30%;
    }
  `;

  const Gif1 = styled(motion.img)`
    width: 70vw;
    z-index: 1;
    opacity: 0.7;
    position: absolute;

    @media (max-width: 768px) {
      bottom: 5%;
    }
  `;

 
  const landimgs = useRef(null);
  const landimgstxt = useRef(null);
  const btn1 = useRef(null);
  const gif1 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      landimgs.current,
      { opacity: 0, scale: 0.8, y: -1000 },
      {
        opacity: 1,
        duration: 1,
        delay: 1,
        scale: 1,
        y: 0,
        ease: Power1.easeInOut,
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      landimgstxt.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1 }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      btn1.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.5 }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      gif1.current,
      { opacity: 0, x: 100 , repeat :0 },
      { opacity: 1, duration: 1, delay: 0.5, x: 0 }
    );
  }, []);

  return (
    <div>
      <Wrapper>
        <Magimg ref={landimgs} src={landimg} alt="" />
        <Landtxt ref={landimgstxt}>
          We are Sharda University TechClub based Tech Magazine <br /> 'An
          Initiative to Praise the action'
        </Landtxt>
        <Link to="/home">
          <Btn1
            aria-label="Thanks"
            className="h-button centered"
            data-text="Click Here"
            ref={btn1}
          >
            <span>E</span>
            <span>X</span>
            <span>P</span>
            <span>L</span>
            <span>O</span>
            <span>R</span>
            <span>E</span>
          </Btn1>
        </Link>
        <Gif1
          title="You Can Drag Me"
          drag
          whileDrag={{ scale: 0.8 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          ref={gif1}
          src="https://moove-si.com/wp-content/uploads/2022/09/MOOVE-SI_Animation-00_Moove-Symbole-BLANC_V1.gif"
          alt=""
        />
      </Wrapper>
    </div>
  );
}

export default Landing;
