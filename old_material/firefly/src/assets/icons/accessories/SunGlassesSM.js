import React from "react";

const SVG = ({
  style = {},
  width = "100%",
  height = "100%",
  className = "",
  viewBox = "0 0 508.9 216.1"
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
    <g>
      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="-256.9828"
        y1="607.7078"
        x2="-256.9828"
        y2="606.7078"
        gradientTransform="matrix(225.4421 0 0 -201.1181 58323.4844 122228.5469)"
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
        d="M298.8,14.3
		c-9.8,1.4-17.6,9.1-19.1,18.9c-11.1,72.2,2.5,118.6,39.9,140.6c70.1,41.4,113.4,46.2,143,12.6c17.6-20,31.9-49.3,36.9-77.2
		c5.6-31.5-0.8-58.5-20.1-76.8C452.8,7.4,392.5,0.9,298.8,14.3z"
      />

      <linearGradient
        id="Rectangle-Copy_1_"
        gradientUnits="userSpaceOnUse"
        x1="-256.9828"
        y1="607.7078"
        x2="-256.9828"
        y2="606.7078"
        gradientTransform="matrix(-225.4421 0 0 -201.1181 -57814.5391 122228.5469)"
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
		M210.2,14.3c9.8,1.4,17.6,9.1,19.1,18.9c11.1,72.2-2.5,118.6-39.9,140.6c-70.1,41.4-113.4,46.2-143,12.6
		c-17.6-20-31.9-49.3-36.9-77.2c-5.6-31.5,0.8-58.5,20.1-76.8C56.1,7.4,116.5,0.9,210.2,14.3z"
      />
      <path
        id="Line-3"
        fill="none"
        stroke="#322B01"
        strokeWidth="15"
        strokeLinecap="square"
        d="M232.5,101.3l42.8,0.8"
      />
    </g>
  </svg>
);

export default SVG;
