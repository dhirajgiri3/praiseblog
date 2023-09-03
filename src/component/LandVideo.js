import React from "react";
import styled from "styled-components";
import neumeta from "./font/NeueMetana-Regular.ttf";
import Shrimp from "./font/SHRIMP.ttf";
import Gilroy from "./font/Gilroy-Medium.ttf";
import Futuramedium from "./font/futura medium bt.ttf";

function LandVideo() {
  const Wrapper = styled.section`
    @font-face {
      font-family: neumeta;
      src: url(${neumeta});
    }
    @font-face {
      font-family: shrimp;
      src: url(${Shrimp});
    }
    @font-face {
      font-family: gilroy;
      src: url(${Gilroy});
    }
    @font-face {
      font-family: futuramedium;
      src: url(${Futuramedium});
    }
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    video {
      width: 50%;
      height: 70vh;
      object-fit: cover;
      background-position: center;
      background-size: cover;

      @media (max-width: 820px) {
        width: 100%;
      }
    }

    h1 {

        font-family: shrimp, sans-serif;
    }
  `;
  return (
    <div>
      <Wrapper>
        <video
          autoPlay
          muted
          loop
          src="https://magezine.co/wp-content/uploads/2020/03/magezine-3-adv.mp4"
        ></video>
        <h1>We Are Launching Our First E-Magezine, Hope You Like IT.</h1>
      </Wrapper>
    </div>
  );
}

export default LandVideo;
