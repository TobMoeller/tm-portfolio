import React, { useState } from "react";
import { Link } from "gatsby";
import "./Header.css";
import { useLanguage, useLanguageUpdate, useThemeUpdate } from "../Context/ContextProvider";
import germany from "../../images/icons/germany32.png";
import unitedstates from "../../images/icons/united-states32.png";
import roller from "../../images/icons/paint-roller32.png";
import AnimatedLogo from "../AnimatedLogo/AnimatedLogo";

export default function Header({ sections: links }) {
  const [burgerStatus, setBurgerStatus] = useState("close");
  const language = useLanguage();
  const setLanguage = useLanguageUpdate();
  const switchTheme = useThemeUpdate();
  return (
    <React.Fragment>
      <header>
        <Link to="/">
          <h1>
            {/* <AnimatedLogo alterChar={"close"} /> */}
            {"{logo}"}
          </h1>
        </Link>
        <nav id="navigation">
          <ul className={`main-nav ${burgerStatus}`}>
            {links
              .filter(({ node }) => node.frontmatter.title && node.frontmatter.lang === language)
              .map(({ node: { frontmatter: { title: link }, id } }) => (
                <li key={id}>
                  <Link to={`/#${link}`} onClick={() => setBurgerStatus("close")}>
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </Link>
                </li>
              ))}
            {/* <li>
              <a aria-current="page" href="/#projects">
                test
              </a>
            </li> */}
            <li className="theme-selector">
              <button
                className="language-selector"
                onClick={() => setLanguage(language === "en" ? "de" : "en")}
              >
                {language === "en" ? (
                  <img src={germany} alt="icon of german flag" />
                ) : (
                  <img src={unitedstates} alt="icon of united states flag" />
                )}
              </button>
              <button className="theme-selector" onClick={() => switchTheme()}>
                <img src={roller} alt="icon of a paint roller" />
              </button>
            </li>
          </ul>
          <button
            onClick={() => setBurgerStatus(burgerStatus === "open" ? "close" : "open")}
            className={`burger`}
          >
            <div className={`${burgerStatus}1`}></div>
            <div className={`${burgerStatus}2`}></div>
            <div className={`${burgerStatus}3`}></div>
          </button>
        </nav>
      </header>
    </React.Fragment>
  );
}
