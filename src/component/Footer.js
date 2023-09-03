import React from "react";
import styled from "styled-components";
import neumeta from "./font/NeueMetana-Regular.ttf";
import Shrimp from "./font/SHRIMP.ttf";
import Gilroy from "./font/Gilroy-Medium.ttf";
import Futuramedium from "./font/futura medium bt.ttf";
import { Link } from "react-router-dom";

function Footer() {
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

    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    z-index: 0;

    .footer {
      display: flex;
      align-items: center;
      flex-direction: column;
      background: linear-gradient(199deg, #242424 0%, #000000 100%);
      backdrop-filter: blur(10px);
      width: 100%;
      height: 100%;
      color: white;

      .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
        width: 100%;
        gap: 1rem;

        h1 {
          font-family: Vogue;
          font-size: 3rem;
          margin: 0;
          margin-top: 1rem;
          letter-spacing: 2px;
          font-weight: 200;
        }

        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          transition: 0.3s all ease-in-out;

          .icons:hover {
            border: 1px #87878763 solid;
            border-radius: 30px;
            padding: 8px;
          }
          .icons {
            border: 1px transparent solid;
            border-radius: 30px;
            padding: 8px;
            cursor: pointer;
            color: white;
          }
        }
      }

      .foot_links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 5rem;
        margin-top: 4rem;

        .footer1 {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 5rem;

          a {
            text-decoration: none;
            color: white;
            font-family: futuramedium;
            font-size: 1rem;
            letter-spacing: 1px;
            margin: 1rem auto;
            color: #c4c4c4;
            transition: 0.4s all ease;
            transition-delay: 0.05s;
          }

          a:hover {
            color: #ebebeb;
          }

          @media (max-width: 820px) {
            a {
              color: #ebebeb;
            }
          }

          @media (max-width: 820px) {
            display: none;
          }

          .footer1_1 {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            text-align: left;
          }
        }
        .footer2 {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 5rem;

          a {
            text-decoration: none;
            color: white;
            font-family: futuramedium;
            font-size: 1rem;
            letter-spacing: 1px;
            margin: 1rem auto;
            color: #c4c4c4;
            transition: 0.4s all ease;
            transition-delay: 0.05s;
          }

          a:hover {
            color: #ebebeb;
          }

          @media (max-width: 820px) {
            a {
              color: #ebebeb;
            }
          }

          .footer2_2 {
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;
            text-align: justify;
          }
        }

        @media (max-width: 820px) and (min-width: 480px) {
          height: 100vh;

          gap: 1rem;

          .footer1 {
            gap: 1rem;
          }

          .footer2 {
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          height: 100vh;

          gap: 1rem;

          .footer1 {
            gap: 1rem;
          }

          .footer2 {
            gap: 1rem;
          }
        }
      }

      .foot_down {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 2rem;

        @media (max-width: 820px) {
          margin-top: -3rem;
          margin-bottom: 2.7rem;
        }

        h4 {
          font-family: futuramedium;
          font-weight: 300;
          color: #c4c4c4;
        }

        a {
          text-decoration: none;
          h3 {
            font-family: futuramedium;
            color: #c3c3c3;
            margin-top: -1rem;
            font-size: 1rem;
          }
        }

        .cond {
          display: flex;
          gap: 3rem;
          margin-top: 1rem;
        }
      }

      @media (max-width: 820px) {
        height: 100vh;

        .foot_links {
          margin-top: 0;
        }
      }
    }
  `;
  return (
    <div>
      <Wrapper>
        <hr />
        <hr />
        <div className="footer">
          <div className="title">
            <h1>PRAISE</h1>
            <div className="icon">
              <a
                href="https://www.facebook.com/cyperstudioo"
                title="Facebook"
                target="_blank"
              >
                <i class="fab fa-facebook-f icons" aria-hidden="true"></i>
              </a>
              <a
                title="Instagram"
                href="https://www.instagram.com/cyperstudioo"
                target="_blank"
              >
                <i class="fab fa-instagram icons" aria-hidden="true"></i>
              </a>
              <a
                title="Twitter"
                href="https://twitter.com/freelancerr_7"
                target="_blank"
              >
                <i class="fab fa-twitter icons" aria-hidden="true"></i>
              </a>
              <a
                title="Linkedin"
                href="https://www.linkedin.com/in/dhirajgiri/"
                target="_blank"
              >
                <i class="fab fa-linkedin icons" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div className="foot_links">
            <div className="footer1">
              <div className="footer1_1">
                <Link to="/motivation">Motivation</Link>
                <Link to="/creativity">Creativity</Link>
                <Link to="/inspiration">Inspiration</Link>
                <Link to="/entrepreneurship">Entrepreneurship</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact-us">Contact Us</Link>
              </div>
            </div>
            <div className="footer2">
              <div className="footer2_2">
                <Link to="/about-us">About Us</Link>
                <Link to="/contact-us">Contact Us</Link>
                <Link to="/our-team">Our Team</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/newsletter">Newsletter</Link>
                <Link to="/faq">FAQ</Link>
              </div>
            </div>
          </div>

          <div className="foot_down">
            <h4>@2022-2023 All Rights Are Reserved</h4>
            <div className="cond">
              <Link>
                <h3>Term and Condition</h3>
              </Link>
              <Link>
                <h3>Privicy and Security</h3>
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Footer;
