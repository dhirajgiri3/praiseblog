import React from "react";
import styled from "styled-components";
import neumeta from "./font/NeueMetana-Regular.ttf";
import Shrimp from "./font/SHRIMP.ttf";
import Gilroy from "./font/Gilroy-Medium.ttf";
import Futuramedium from "./font/futura medium bt.ttf";
import { Link } from "react-router-dom";

function Middle() {

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

    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;

    .imgbox {
      overflow: hidden;
    }

    img {
      width: 100%;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      object-fit: cover;
      background-position: center;
      height: 60vh;
      transition: 0.5s all ease;
    }

    img:hover {
      scale: 1.1;
    }

    a {
      text-decoration: none;
    }

    a h4:hover {
      
      color: black;
    }

    a h4 {
      width: 100%;
      font-family: gilroy, sans-serif;
      color: #000000e3;
      text-decoration: none;
      line-height: 1.3rem;
    }

    button {
      background: transparent;
      border: none;
      font-size: 1.2rem;
      font-family: futuramedium, sans-serif;
      font-weight: 100;
      padding: 0;
      padding-top: -1rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #000000bf;

      img {
        width: 20%;
        height: 17%;
        object-fit: cover;
      }
    }

    button:hover {
      text-decoration: underline;
      
      color: #003dad;
    }
  `;

  const Big = styled.div`
    font-size: 3rem;
    color: #000;
    display: inline-block;
    font-family: futuramedium, sans-serif;
  `;

  return (
    <div>
      <Wrapper>
        <Link to="/metaverse">
          <div className="imgbox">
            <img
              src="https://images.unsplash.com/photo-1566738780863-f9608f88f3a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80"
              alt=""
              loading="lazy"
            />
          </div>
          <h4>
            <Big>C</Big>rime , A 19-year-old boy was shot dead in north Delhi's
            Khajuri Khas area on Friday. The victim, who has been identified as
            Sohail, was shot in the chest, police said. Police said they were
            alerted to the incident at 10.40pm and found Sohail lying in a pool
            of blood. He was rushed to a hospital but declared dead on arrival.
            Sohail had been living with relatives in Delhi's Shri Ram Colony. He
            worked at a garment factory..
          </h4>
          <h4>
            Crime A 19-year-old boy was shot dead in north Delhi's
            Khajuri Khas area on Friday. The victim, who has been identified as
            Sohail, was shot in the chest, police said. Police said they were
            alerted to the incident at 10.40pm and found Sohail lying in a pool
            of blood. He was rushed to a hospital but declared dead on arrival.
            Sohail had been living with relatives in Delhi's Shri Ram Colony. He
            worked at a garment factory..
          </h4>
          <h4>
            Crime A 19-year-old boy was shot dead in north Delhi's
            Khajuri Khas area on Friday. The victim, who has been identified as
            Sohail, was shot in the chest, police said. Police said they were
            alerted to the incident at 10.40pm and found Sohail lying in a pool
            of blood. He was rushed to a hospital but declared dead on arrival.
            Sohail had been living with relatives in Delhi's Shri Ram Colony. He
            worked at a garment factory..
          </h4>

          <button>
            Read More{" "}
            <img loading="lazy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAgVJREFUSEulVu2VwzAIE5skm7Sb3CbtJh0l3eSyie/5IzYUsOm7/GnrYguEkENgDwFI7Xf5zhfKOoGQeoy9t22SHzy0nVTPG4h9WaTQ0xnAapM6fLaQd5vP9NgIphfDmOjAI3bBk5HqlDTePvZdLkeq4f1WwpBZeQkFqPYFpeTgKdVhyNfAmr8NwGnWyLtlsCgqtnFc7jPobwPelT6mc1oHKdYUzcsB4NZGMVe96xBfMPOKjZlmBpIrfhXwagVnMsFHOtyUKvC3Sh5nbSC8kOjWHKhUvnZAi2ojE9s+e74bQC8glcpzzwnYq+8Zs2YZiC3vhQXVTYL2S3AmMHMNZ8pKzvnAjSt2cklsCXiw+BOg3Y4nkEdjy+YJ0OPjBmE5p1lRmeoTSFLtDVCLq/9Rrr8ngMdILkR77WwNfRNwt67aFXChetp7qZ+s8K0x9Abo/nHD96NC47R2zsL4kQi3VuobwF2gfLxVMGDvMggNeXWx+khQxye0ZXJe2cxdfVK0Ew4kD9RI+v9zXFI4UOh1Kr0MxMGXRSzmiwVnn/656FXqnblD8zRjFg2OddZZ7bm32Z+rkKYmLc9kPV401GCCgOxW6kUg8iaqge2hNSYjonbfcOaqNhSuKF300piCYmsCOGIUU0L86dH4Mfe9hBOhN/ZeEada3kmjgojJOO2IpWgAR0bea98fu+rkI9aBVb4AAAAASUVORK5CYII=" />
          </button>
        </Link>
      </Wrapper>
    </div>
  );
}

export default Middle;
