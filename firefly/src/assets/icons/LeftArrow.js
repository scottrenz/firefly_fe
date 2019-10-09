import React from "react";

const SVG = ({
  style = {},
  width = "100%",
  height = "100%",
  className = "",
  viewBox = "0 0 24 42"
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
    <g id="HF-Design">
      <g
        id="CustomizeFireflyPage"
        transform="translate(-608.000000, -406.000000)"
      >
        <g id="Accessories" transform="translate(611.000000, 366.000000)">
          <path
            id="LeftArrow"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#7CD147"
            stroke="#4AA810"
            strokeWidth="3"
            strokeLinejoin="round"
            d="
				M14.2,60.9l7-23.2L-2.1,61l23.3,23.3L14.2,60.9z"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default SVG;
