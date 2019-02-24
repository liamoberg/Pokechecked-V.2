import React, { Component } from "react";
import "./playbtn.css";

class Playbtn extends Component {
  render() {
    return (
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            id="1"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19 28.3913C25.8435 28.3913 31.3913 22.8435 31.3913 16C31.3913 9.15647 25.8435 3.6087 19 3.6087C12.1565 3.6087 6.6087 9.15647 6.6087 16C6.6087 22.8435 12.1565 28.3913 19 28.3913ZM19 31C27.2843 31 34 24.2843 34 16C34 7.71573 27.2843 1 19 1C10.7157 1 4 7.71573 4 16C4 24.2843 10.7157 31 19 31Z"
            fill="white"
          />
          <path
            id="2"
            d="M25.2935 15.6536C25.6143 15.8508 25.6102 16.3183 25.2861 16.5099L16.7616 21.5497C16.4267 21.7477 16.004 21.5043 16.0072 21.1153L16.09 10.8858C16.0932 10.4966 16.5202 10.2601 16.8518 10.4639L25.2935 15.6536Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="38"
            height="38"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  }
}

export default Playbtn;
