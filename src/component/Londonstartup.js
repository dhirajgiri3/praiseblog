import React from "react";
import styled from "styled-components";
import neumeta from "./font/NeueMetana-Regular.ttf";
import Shrimp from "./font/SHRIMP.ttf";
import Gilroy from "./font/Gilroy-Medium.ttf";
import Futuramedium from "./font/futura medium bt.ttf";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";

function Londonstartup() {
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
      font-size: 2rem;
    }

    .img {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .img img {
      width: 60%;
      height: 90vh;
      object-fit: cover;
    }

    @media (max-width: 1020px) {
      .img img {
        width: 100%;
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
          <h1>The Hottest Startups in London</h1>
        </div>
        <div className="img">
          <img
            src="https://media.wired.com/photos/633de7e85a49457c993f5385/master/w_1600,c_limit/100-HS-2022-Valentina-Milanova-London-Business.jpg"
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
            <Big>D</Big>espite the Covid epidemic, Brexit disruption, and
            Westminster’s never-ending political drama, the success of London’s
            tech scene continues unabated. According to a report by Startup
            Genome, London remains the second-best place in the world to launch
            a startup, after Silicon Valley. Last year, London attracted $11.3
            billion in tech investment—more than double Berlin and Paris
            combined. Underpinning this success is a welcoming and tight-knit
            community of founders and investors.
          </p>
          <p>
            “I was one of those kids at age 10, concocting different, completely
            wacky ideas for a perpetual motion machine,” says Grant Aarons.
            “I’ve always wanted to build something physical and impactful.” In
            2019, he achieved that goal when he launched FabricNano with a
            cofounder he met at Entrepreneur First. The startup makes a powder
            that can be used to mass-produce sustainable chemicals, from
            biofuels to bioplastics. “Our platform is already being used by two
            large protein-engineering partners,” he says. “Our engineering
            partners plan to start selling novel and proprietary proteins at the
            end of 2022.”
          </p>
          <p>
            Hoxton Farms grows animal fat—without involving any animals in the
            process. Instead, they use a combination of synthetic biology and
            mathematical optimization. “Starting with just a few cells, we grow
            cultivated animal fat to produce a cruelty-free, sustainable
            ingredient for the plant-based meat industry,” says founder Ed
            Steele. In July 2020, Steele, who has mathematics master degrees
            from Oxford and Imperial College, launched the company with
            geneticist Max Jamilly. “We’re both avid home chefs,” Steele says.
            “We’ve been obsessed with the ‘big fat problem’ in plant-based meat
            for years, and both got excited by cultivated meat when Max was
            doing his PhD.”
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
              src="https://media.wired.com/photos/633de7e9fe6027f6ad16e5be/master/w_1600,c_limit/100-HS-2022-Vira%20Health-London-Business.jpg"
              alt=""
            />
          </div>
          <div className="info">
            <p>
              TNader AlSalim, the CEO and founder of Gaia, believes that
              parenthood is a fundamental right. “I founded Gaia after my wife
              and I experienced the frustrations and limitations of IVF
              firsthand,” he says. He launched his startup in 2019, aiming to
              make fertility care affordable to all. Gaia provides personalized
              financing based on predictive modeling that forecasts the number
              of IVF rounds a couple might need—couples that fail to conceive
              only pay a fraction of the cost. The startup has raised $23
              million so far. “Designing the world’s first IVF insurance product
              has been our biggest challenge.” AlSalim says. “Underwriters were
              not willing nor prepared to spend the time and investment needed
              to design this complex proposition.”
            </p>
          </div>
        </div>
      </Wrapper>
    </motion.div>
  );
}

export default Londonstartup;
