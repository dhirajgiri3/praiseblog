import React from "react";
import styled from "styled-components";
import neumeta from "./font/NeueMetana-Regular.ttf";
import Shrimp from "./font/SHRIMP.ttf";
import Gilroy from "./font/Gilroy-Medium.ttf";
import Futuramedium from "./font/futura medium bt.ttf";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";

function Metaverse() {
  const { scrollYProgress } = useScroll();

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

    margin: auto 5rem;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
    overflow-y: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    ::-webkit-scrollbar {
      width: 0;
    }

    .title h1 {
      font-family: shrimp, sans-serif;
      font-size: 2.5rem;
    }

    .img {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .img img {
      width: 60%;
      height: auto;
    }

    @media (max-width: 1020px) {
      .img img {
        width: 80%;
      }

      @media (max-width: 768px) {
        .img img {
          width: 100%;
          height: auto;
        }
        margin: auto 2rem;
      }

      @media (max-width: 280px) {
        margin: auto 1rem;
      }
    }

    .original h3 {
      font-family: Vogue, sans-serif;
      color: black;
      text-decoration: none;
    }
    .original h3:hover {
      font-family: Vogue, sans-serif;
      color: #3867ff;
      text-decoration: none;
    }

    .info {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .info p {
      width: 60%;
      font-family: futuramedium, sans-serif;
      line-height: 1.3rem;
    }

    @media (max-width: 1020px) {
      .info p {
        width: 100%;
        font-family: futuramedium, sans-serif;
        line-height: 1.3rem;
      }
    }
  `;

  const Big = styled.div`
    font-size: 3rem;
    color: #000;
    display: inline-block;
    font-family: futuramedium, sans-serif;
  `;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Wrapper>
        <div className="title">
          <h1>Metaverse</h1>
        </div>
        <div className="img">
          <img
            src="https://cdn.pixabay.com/photo/2022/05/17/21/46/metaverse-7203825_960_720.jpg"
            alt=""
          />
        </div>
        <div className="original">
          <Link to="/home">
            <h3>Go to Original Page</h3>
          </Link>
        </div>
        <div className="info">
          <p>
            <Big>I</Big>f you have to ask what, exactly, the metaverse is — don’t feel bad.
          </p>
          <p>
            The metaverse is hardly a brand-new concept, but the speed with
            which it recently began making headlines is impressive. And the
            meaning of “metaverse” seems to expand daily, as more and more
            recognizable brands and businesses begin to incorporate it into
            their long-term plans.
          </p>
          <p>
            This all begs the question: what even is the metaverse? The answer
            is at once a little bit complicated… and something you already know
            without even realizing it. It’s social media, the internet, video
            games, and online shopping all rolled into one.
          </p>
          <p>
            While everyone from celebrities to global brands like Nike have
            gotten involved, Facebook is responsible for setting the metaverse
            buzz in motion. The company, a pioneer in social media (in a sense
            the earliest version of the metaverse itself) recently went through
            a major rebrand. Facebook is now Meta, and the company has plans to
            make significant moves in the metaverse world in the years to come.
          </p>
          <p>
            Keep reading to learn more about the metaverse and find out if you
            should get in on the craze.
          </p>
          <div className="img">
            <img
              src="https://cdn.pixabay.com/photo/2022/01/06/18/51/metaverse-6920113_960_720.jpg"
              alt=""
            />
          </div>
          <div className="info">
            <p>
              The connections between the financial, virtual, and physical
              worlds have become increasingly linked. The devices we use to
              manage our lives give us access to almost anything we want at the
              touch of a button. The crypto ecosystem hasn't escaped this
              either. NFTs, blockchain games, and crypto payments aren't just
              limited to crypto geeks anymore. They're now all easily available
              as part of a developing metaverse.
            </p>
          </div>
        </div>
      </Wrapper>
    </motion.div>
  );
}

export default Metaverse;
