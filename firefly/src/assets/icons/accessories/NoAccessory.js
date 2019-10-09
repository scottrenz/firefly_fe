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
    <g>
      <path
        fill="#666666"
        d="M892.4,40c50.5,0,91.6,41.1,91.6,91.6v760.8c0,50.5-41.1,91.6-91.6,91.6H131.6C81.1,984,40,942.9,40,892.4
		V131.6C40,81.1,81.1,40,131.6,40H892.4 M892.4,0H131.6C58.9,0,0,58.9,0,131.6v760.8C0,965.1,58.9,1024,131.6,1024h760.8
		c72.7,0,131.6-58.9,131.6-131.6V131.6C1024,58.9,965.1,0,892.4,0L892.4,0z"
      />
    </g>
  </svg>
);

export default SVG;
