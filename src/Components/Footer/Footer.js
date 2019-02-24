import React, { Component } from "react";
import "./Footer.css";
import Gitbtn from "../SVG components/gitbtn";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <ul>
          <li>
            <a className="standard-btn" href="#">
              <Gitbtn />
              Issue
            </a>
          </li>
          <li>
            <a className="standard-btn" href="#">
              <Gitbtn />
              Star
            </a>
          </li>
          <li>
            <a className="standard-btn" href="#">
              <Gitbtn />
              Fork
            </a>
          </li>
        </ul>
        <span>
          Lorem ipsum dolor <br /> Jimmy Jardland
        </span>
      </footer>
    );
  }
}

export default Footer;
