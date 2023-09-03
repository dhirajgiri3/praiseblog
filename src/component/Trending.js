import React from "react";
import styled from "styled-components";
import neumeta from "./font/NeueMetana-Regular.ttf";
import Shrimp from "./font/SHRIMP.ttf";
import Gilroy from "./font/Gilroy-Medium.ttf";
import Futuramedium from "./font/futura medium bt.ttf";
import { Link } from "react-router-dom";
import Fade from "react-awesome-reveal";

function Trending() {
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
    overflow: hidden;
    width: 100%;

    .imgbox {

      overflow: hidden;
    

    }

    .cards {
      display: flex;
      gap: 2rem;

      @media (max-width: 820px) {
        flex-direction: column;
      }
    }

    .card1 {
      img {
        width: 100%;
        height: 35vh;
        object-fit: cover;
        background-position: center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        transition: all 0.5s ease;
      
      }

      img:hover {
        scale: 1.1;
       
        
      }

      a {
        text-decoration: none;
        color: black;
      }

      h3 {
        font-family: gilroy;
        font-size: 1rem;
        cursor: pointer;
      }

      h5 {
        font-family: neumeta;
        letter-spacing: 2px;
        margin-top: -0.3rem;
        color: #000000cf;
      }

      h3:hover {
        text-decoration: underline;
      }
    }
    .card2 {
      img {
        width: 100%;
        height: 35vh;
        object-fit: cover;
        background-position: center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        transition: all 0.5s ease;
      }

      img:hover {
        scale: 1.1;
      }

      a {
        text-decoration: none;
        color: black;
      }

      h3 {
        font-family: gilroy;
        font-size: 1rem;
        cursor: pointer;
      }

      h5 {
        font-family: neumeta;
        letter-spacing: 2px;
        margin-top: -0.3rem;
        color: #000000cf;
      }

      h3:hover {
        text-decoration: underline;
      }
    }
    .card3 {
      img {
        width: 100%;
        height: 35vh;
        object-fit: cover;
        background-position: center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        transition: all 0.5s ease;
      }

      img:hover {
        scale: 1.1;
      }

      a {
        text-decoration: none;
        color: black;
      }

      h3 {
        font-family: gilroy;
        font-size: 1rem;
        cursor: pointer;
      }

      h5 {
        font-family: neumeta;
        letter-spacing: 2px;
        margin-top: -0.3rem;
        color: #000000cf;
      }

      h3:hover {
        text-decoration: underline;
      }
    }
    .card4 {
      img {
        width: 100%;
        height: 35vh;
        object-fit: cover;
        background-position: center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        transition: all 0.5s ease;
      }

      img:hover {
        scale: 1.1;
      }

      a {
        text-decoration: none;
        color: black;
      }

      h3 {
        font-family: gilroy;
        font-size: 1rem;
        cursor: pointer;
      }

      h5 {
        font-family: neumeta;
        letter-spacing: 2px;
        margin-top: -0.3rem;
        color: #000000cf;
      }

      h3:hover {
        text-decoration: underline;
      }
    }
  `;
  return (
    <div>
      <Wrapper>
        <div className="cards">
          <div className="card1">
            <Link to="/londonstartup">
              <div className="imgbox">
                <img
                  src="https://media.wired.com/photos/633de7e81cda20e3228c79f2/16:9/w_640,c_limit/100-HS-2022-London-Illo-Business.jpg"
                  alt=""
                />
              </div>
              <h3>Hottest StartUp In London</h3>
              <h5>London</h5>
            </Link>
          </div>

          <div className="card2">
            <Link to="/londonstartup">
              <div className="imgbox">
                <img
                  src="https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_960_720.jpg"
                  alt=""
                />
              </div>
              <h3>What Animals are Thinking?</h3>
              <h5>Animals</h5>
            </Link>
          </div>
          <div className="card3">
            <Link to="/modernizMissiles">
              <div className="imgbox">
                <img
                  src="https://api.time.com/wp-content/uploads/2022/09/nuclear-missile-fleet-biden-20.jpg?quality=85&w=2400"
                  alt=""
                />
                <h3>The Mission to Modernize America's Nuclear Missiles</h3>
                <h5>Missiles In America</h5>
              </div>
            </Link>
          </div>
          <div className="card4">
            <Link to="/sharda">
              <div className="imgbox">
                <img
                  src="https://www.educationworld.in/wp-content/uploads/2017/10/Sharda-University-Greater-Noida-1.jpg"
                  alt=""
                />
              </div>
              <h3>Inside Sharda University?</h3>
              <h5>Sharda University</h5>
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Trending;
