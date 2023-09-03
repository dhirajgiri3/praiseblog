import React from "react";
import styled from "styled-components";
import neumeta from "./font/NeueMetana-Regular.ttf";
import Shrimp from "./font/SHRIMP.ttf";
import Gilroy from "./font/Gilroy-Medium.ttf";
import Futuramedium from "./font/futura medium bt.ttf";
import { Link } from "react-router-dom";

function Left() {
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

    .imgbox {
      overflow: hidden;
    }

    .card1 {
      img {
        width: 100%;
        height: 35vh;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        object-fit: cover;
        background-position: center;
        transition: 0.5s all ease;
      }

      img:hover {
        scale: 1.1;
      }

      h3 {
        width: 100%;
        font-family: gilroy, sans-serif;
        font-size: 1.07rem;
        line-height: 1.3rem;
        margin-top: -0.6rem;
        font-weight: 600;
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
        color: #000;
      }

      a {
        text-decoration: none;
      }
    }
    .card2 {
      img {
        width: 100%;
        height: 35vh;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        object-fit: cover;
        background-position: center;
        transition: 0.5s all ease;
      }

      img:hover {
        scale: 1.1;
      }

      h3 {
        width: 100%;
        font-family: gilroy, sans-serif;
        font-size: 1.07rem;
        line-height: 1.3rem;
        margin-top: -0.6rem;
        font-weight: 600;
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
        color: #000;
      }

      a {
        text-decoration: none;
      }
    }
  `;
  return (
    <div>
      <Wrapper>
        
        <div className="card2">
          <Link to="/sharda">
            <div className="imgbox">
              <img
                src="https://media.getmyuni.com/azure/college-images-test/sharda-university-noida/3ed51c38e9c84e5e9f52f5585b0eeff4.jpeg"
                alt=""
              />
            </div>
            <h4>Sharda University</h4> 

            <h3>The World is Here Where Are You?</h3>
          </Link>
        </div>
        <hr />
        <div className="card1">
          <Link to="/joebiden">
            <div className="imgbox">
              <img
                src="https://api.time.com/wp-content/uploads/2022/10/GettyImages-1243750375.jpg?quality=85&w=925&h=617&crop=1&resize=925,617"
                alt=""
              />
            </div>
            <h4>Joe Biden Controversy</h4>
            

            <h3>
              Joe Biden and Ron DeSantis Set Aside the Political Storm to Talk
              Hurricane Relief
            </h3>
          </Link>
        </div>
      </Wrapper>
    </div>
  );
}

export default Left;
