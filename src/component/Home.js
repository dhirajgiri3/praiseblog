import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";
import Trending from "./Trending";
import LandVideo from "./LandVideo";
import "./Home.css";
import Footer from "./Footer";
import Scroll from "./Scroll";

function Home() {
  
  const Wrapper = styled.section`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    margin: auto 3rem;
    flex-wrap: wrap;
    overflow: hidden;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      width: 0;
    }

    -ms-overflow-style: none;

    @media (max-width: 820px) {
      margin: auto 1rem;
    }
  `;

  const Wrapper2 = styled.section`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 3rem;

    @media (max-width: 820px) {
      flex-direction: column;
      gap: 2rem;
    }
  `;

  const Tit = styled.h1`
    font-family: futuramedium, sans-serif;
    font-size: 1.1rem;
    margin: 1rem 4rem;
    padding: 0.3rem;
    margin-top: -0.7rem;
    border: none;
    background: #1746a2;
    text-align: center;
    font-weight: 100;
    color: #fff;
    width: 11%;

    @media (max-width: 820px) {
      width: 25%;
    }
  `;

  return (
    <div>
      <Header />

      <Wrapper>
        <hr />
        <hr />
        <Tit>Hot Topics</Tit>
        <Wrapper2>
          <Left />
          <Middle />
          <Right />
        </Wrapper2>
        <hr />
        <hr />
        <Tit>Trending Stories</Tit>
        <Trending />
        <hr />
        <hr />
        <Tit>What's Knew</Tit>
        <LandVideo />
        <hr />
        <hr />
        <Tit>Fashion</Tit>
        <Trending />
      </Wrapper>
      <Footer />
      <Scroll />
    </div>
  );
}

export default Home;
