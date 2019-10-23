import React from "react";

const SVG = ({
  style = {},
  width = "100%",
  height = "100%",
  className = "",
  viewBox = "0 0 1024 1024"
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svgIcon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g id="SunGlasses">
      <rect id="Rectangle" fill="none" width="1024" height="1024" />

      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="0.5"
        y1="896.6364"
        x2="0.5"
        y2="895.6364"
        gradientTransform="matrix(225.4421 0 0 -201.1181 533.4858 180626.25)"
      >
        <stop offset="0" stopColor="#322B01" />
        <stop offset="1" stopColor="#615602" />
      </linearGradient>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="url(#SVGID_1_)"
        stroke="#322B01"
        strokeWidth="15"
        d="M556.3,303.2
		c-9.8,1.4-17.6,9.1-19.1,18.9c-11.1,72.2,2.5,118.6,39.9,140.6c70.1,41.4,113.4,46.2,143,12.6c17.6-20,31.9-49.3,36.9-77.2
		c5.6-31.5-0.8-58.5-20.1-76.8C710.3,296.4,650,289.9,556.3,303.2z"
      />

      <linearGradient
        id="Rectangle-Copy_1_"
        gradientUnits="userSpaceOnUse"
        x1="0.5"
        y1="896.6364"
        x2="0.5"
        y2="895.6364"
        gradientTransform="matrix(-225.4421 0 0 -201.1181 490.425 180626.25)"
      >
        <stop offset="0" stopColor="#322B01" />
        <stop offset="1" stopColor="#615602" />
      </linearGradient>

      <path
        id="Rectangle-Copy"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="url(#Rectangle-Copy_1_)"
        stroke="#322B01"
        strokeWidth="15"
        d="
		M467.6,303.2c9.8,1.4,17.6,9.1,19.1,18.9c11.1,72.2-2.5,118.6-39.9,140.6c-70.1,41.4-113.4,46.2-143,12.6
		c-17.6-20-31.9-49.3-36.9-77.2c-5.6-31.5,0.8-58.5,20.1-76.8C313.6,296.4,374,289.9,467.6,303.2z"
      />
      <path
        id="Line-3"
        fill="none"
        stroke="#322B01"
        strokeWidth="15"
        strokeLinecap="square"
        d="M490,390.2l42.8,0.8"
      />
    </g>
  </svg>
);

export default SVG;
