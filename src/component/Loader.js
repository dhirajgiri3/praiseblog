import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Vogue from "./font/Vogue.ttf";
import gsap, { Power1 } from "gsap";

function Loader() {
  const logo_txt1 = useRef(null);
  const logo_txt2 = useRef(null);
  const logo_txt4 = useRef(null);
  const logo_txt3 = useRef(null);
  const logo_txt5 = useRef(null);
  const logo_txt6 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      logo_txt1.current,
      { y: -30 },
      {
        y: 30,
        duration: 1,
        repeat: -1,
        yoyo: true,
        stagger: 0.08,
        delay: 0.2,
        ease: Power1.easeInOut
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      logo_txt2.current,
      { y: -30 },
      { y: 30, duration: 1, repeat: -1, yoyo: true, stagger: 0.08, delay: 0.4, ease: Power1.easeInOut }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      logo_txt3.current,
      { y: -30 },
      { y: 30, duration: 1, repeat: -1, yoyo: true, stagger: 0.08, delay: 0.6 , ease: Power1.easeInOut  }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      logo_txt4.current,
      { y: -30 },
      { y: 30, duration: 1, repeat: -1, yoyo: true, stagger: 0.08, delay: 0.8 , ease: Power1.easeInOut  }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      logo_txt5.current,
      { y: -30 },
      { y: 30, duration: 1 , yoyo: true, stagger: 0.08, delay: 1 , ease: Power1.easeInOut }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      logo_txt6.current,
      { y: -30 },
      { y: 30, duration: 1, repeat: -1, yoyo: true, stagger: 0.08, delay: 1.2 , ease: Power1.easeInOut  }
    );
  }, []);

  const Logo = styled.div`
    @font-face {
      font-family: Vogue;
      src: url(${Vogue});
    }
    width: 100vw;
    height: 100vh;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: Vogue;
    font-size: 130px;

    @media (max-width: 820px) {
      font-size: 80px;
    }
  `;
  return (
    <div>
      <div className="wrapper">
        <Logo>
          <div ref={logo_txt1}>P</div>
          <div ref={logo_txt2}>R</div>
          <div ref={logo_txt3}>A</div>
          <div ref={logo_txt4}>I</div>
          <div ref={logo_txt5}>S</div>
          <div ref={logo_txt6}>E</div>
        </Logo>
      </div>
    </div>
  );
}

export default Loader;
