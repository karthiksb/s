import React from "react";
import "./firstsection.css";
import bg1 from "./bg1.png";
import bg2 from "./bg2.png";
import respbg1 from "./respbg1.png";
import respbg2 from "./respbg2.png";
import man from "./man.png";
import respman from "./respman.png";
import hand from "./hand.gif";
import drop from "./Drop.png";
import view from "./view.png";
import inst from "./instagram.svg";
import fwen from "./fwenclub.svg";
import discord from "./discord.svg";
import twitter from "./twitter.svg";
import apartment from "./aprtment.png";

import { useState, useEffect } from "react";
import { margin } from "@mui/system";

function Firstsection() {
  const [active, setActive] = useState("nav__active");
  const [click, setClick] = useState(1);

  const [margin, setMargin] = useState("40vh 20vw");

  function navToggle() {
    active === "navlink"
      ? setActive("navlink nav__active")
      : setActive("navlink");
  }

  function clicks() {
    setClick(click + 1);
    if (click === 1) {
      setMargin("36vh 20vw");
    }
    if (click === 2) {
      setMargin("32vh 20vw");
    }
    if (click === 3) {
      setMargin("28vh 20vw");
    }
    if (click === 4) {
      setMargin("24vh 20vw");
    }
    if (click === 5) {
      setMargin("20vh 20vw");
    }
    if (click === 6) {
      setMargin("16vh 20vw");
    }
    if (click > 6) {
      setMargin("40vh 20vw");
      setClick(1);
    }
  }

  return (
    <div className="firstsection">
      <div className="bg-container">
        <div className="background">
          <div className="bg1">
            <div className="background1">
              <img className="bg im1" src={bg1} alt="" />
              <img className="respbg " src={respbg1} alt="" />
            </div>
          </div>

          <div className="im2">
            <img style={{ margin: margin }} src={apartment} alt="" />
          </div>

          <div className="background2">
            <img className="bg im3" src={bg2} alt="" />

            <img className="respbg g" src={respbg2} alt="" />
          </div>
          <div className="infos">
            <img className="drop" src={drop} alt="" />
            <div className="links">
              <a href="https://discord.com/invite/fwenclub">
                <img src={discord} alt="" />
              </a>
              <a href="https://www.instagram.com/fwenclub/?utm_medium=copy_link">
                <img src={inst} alt="" />
              </a>
              <a href="https://twitter.com/fwenclub">
                <img src={twitter} alt="" />
              </a>
              <a href="https://fwenclub.com/">
                <img src={fwen} alt="" />
              </a>
            </div>
            <div className="viewon">
              <h1>VIEW ON</h1>
              <img src={view} alt="" />
            </div>
          </div>
        </div>{" "}
        <div className="box">
          <div className="man-c">
            <img className="man" src={man} alt="" />
            <img className="respman" src={respman} alt="" />
          </div>

          <div className="test">
            <img src={hand} alt="" />
          </div>
          <div className="navbar">
            <div className="nav">
              <div className="nav-links">
                <div onClick={navToggle} className="nav-toggler">
                  <div className="line1"></div>

                  <div className="line1"></div>
                  <div className="line1"></div>
                </div>
                <div className={active}>
                  <ul>
                    <li>
                      <a onClick={() => setActive("nav__active")} href="#about">
                        ABOUT
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setActive("nav__active")}
                        href="#roadmap"
                      >
                        ROADMAP
                      </a>
                    </li>
                    <li>
                      <a onClick={() => setActive("nav__active")} href="#faq">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="new">
        <div className="clicks" onClick={clicks}></div>
      </div>
    </div>
  );
}

export default Firstsection;
