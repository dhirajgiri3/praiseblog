import React from "react";
import styled from "styled-components";
import neumeta from "./font/NeueMetana-Regular.ttf";
import Shrimp from "./font/SHRIMP.ttf";
import Gilroy from "./font/Gilroy-Medium.ttf";
import Futuramedium from "./font/futura medium bt.ttf";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

function Right() {
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;

    .imgbox {
      overflow: hidden;
      width: 50%;
      height: 23vh;
    }

    a {
      text-decoration: none;
      color: #000;
    }

    .card1 {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      margin-bottom: 1rem;
      gap: 1rem;

      img {
        width: 50%;
        height: 23vh;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        object-fit: cover;
        background-position: center;
        cursor: pointer;
      }

      h3 {
        width: 100%;
        font-family: gilroy, sans-serif;
        font-size: 1.07rem;
        line-height: 1.3rem;
        margin-top: -0.6rem;
        color: #000000e3;
        font-weight: 600;
        cursor: pointer;
      }

      h3 a {
        text-decoration: none;
        color: #000000d1;
      }

      h3:hover {
        color: #000;
        text-decoration: underline;
      }

      h4 {
        width: 100%;
        font-family: shrimp;
        font-weight: 300;
        letter-spacing: 1.5px;
        margin-top: 0.5rem;
      }
    }
    .card2 {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      gap: 1rem;
      margin-bottom: 1rem;
      img {
        width: 50%;
        height: 23vh;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        object-fit: cover;
        background-position: center;
        cursor: pointer;
      }


      h3 {
        width: 100%;
        font-family: gilroy, sans-serif;
        font-size: 1.07rem;
        line-height: 1.3rem;
        margin-top: -0.6rem;
        color: #000000e3;
        cursor: pointer;
        font-weight: 600;
      }

      h3:hover {
        color: #000;
        text-decoration: underline;
      }

      h3 a:hover {
        color: #000;
        text-decoration: underline;
      }

      h4 {
        width: 100%;
        font-family: shrimp;
        font-weight: 300;
        letter-spacing: 1.5px;
        margin-top: 0.5rem;
      }
    }
    .card3 {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      margin-bottom: 1rem;
      gap: 1rem;

      img {
        width: 50%;
        height: 23vh;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        object-fit: cover;
        background-position: center;
        cursor: pointer;
      }

   

      h3 {
        width: 100%;
        font-family: gilroy, sans-serif;
        font-size: 1.07rem;
        line-height: 1.3rem;
        margin-top: -0.6rem;
        color: #000000e3;
        font-weight: 600;
        cursor: pointer;
      }

      h3 a {
        text-decoration: none;
        color: #000000d1;
      }

      h3:hover {
        color: #000;
        text-decoration: underline;
      }

      h4 {
        width: 100%;
        font-family: shrimp;
        font-weight: 300;
        letter-spacing: 1.5px;
        margin-top: 0.5rem;
      }
    }
    .card4 {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      margin-bottom: 1rem;
      gap: 1rem;
      img {
        width: 50%;
        height: 23vh;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        object-fit: cover;
        background-position: center;
        cursor: pointer;
      }


      h3 {
        width: 100%;
        font-family: gilroy, sans-serif;
        font-size: 1.07rem;
        line-height: 1.3rem;
        margin-top: -0.6rem;
        color: #000000e3;
        font-weight: 600;
        cursor: pointer;
      }

      h3:hover {
        color: #000;
        text-decoration: underline;
      }

      h3 a:hover {
        color: #000;
        text-decoration: underline;
      }

      h4 {
        width: 100%;
        font-family: shrimp;
        font-weight: 300;
        letter-spacing: 1.5px;
        margin-top: 0.5rem;
      }
    }
  `;
  return (
    <div>
      <Wrapper>
        <Link to="/londonstartup">
          <div className="card1">
            <img
              src="https://api.time.com/wp-content/uploads/2022/10/thailand-daycare-shooting-03.jpg?quality=85&w=925&h=617&crop=1&resize=925,617"
              alt=""
            />

            <div className="card1_info">
              <h4>Mass Shooting in Thailanad</h4>

              <h3>What We Know About the Mass Shooting in Thailand</h3>
            </div>
          </div>
          <div className="card2">
            <img
              src="https://metamandrill.com/wp-content/uploads/2020/02/metaverse-blogs.jpg"
              alt=""
            />

            <div className="card1_info">
              <h4>Julian Chokkatu</h4>

              <h3>Google Refines the Pixel 7 With Small but Welcome Changes</h3>
            </div>
          </div>
          <div className="card3">
            <img
              src="https://media.wired.com/photos/633dc95b669c7202654d7d3c/1:1/w_1280%2Cc_limit/Google-Pixel-News-Gadget-Lab-Podcast-Gear.jpg"
              alt=""
            />

            <div className="card1_info">
              <h4>Dhiraj Giri</h4>

              <h3>
                Google Catches Up to Apple and Samsung in the Hardware Race
              </h3>
            </div>
          </div>
          <div className="card4">
            <img
              src="https://media.wired.com/photos/63373748a546819a4885f45f/master/w_1600,c_limit/19-Android-Settings-You-Don't-Know-About-02-captions-Gear.jpg"
              alt=""
            />

            <div className="card1_info">
              <h4>Gear</h4>

              <h3>19 Android Settings You May Not Know About</h3>
            </div>
          </div>
        </Link>
      </Wrapper>
    </div>
  );
}

export default Right;
