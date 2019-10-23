import React from "react";

const SVG = ({
  style = {},
  width = "100%",
  height = "100%",
  className = "",
  viewBox = "0 0 570.2 295.1"
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
    <g id="Group" transform="translate(171.500000, 88.523274)">
      <g id="Rectangle">
        <g>
          <path
            id="path-1"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-46.8,125.5c22.9,7.7,67.9,15.6,134.9,23.7
				c67,8.1,137.5,9.5,211.4,4.3c-28.6,28.8-82.2,46.1-160.7,51.9c-117.7,8.8-306.1-33.8-310.2-46.9
				C-174.1,149.8-132.6,138.8-46.8,125.5z"
          />
        </g>
        <g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#951922"
            d="M-46.8,125.5c22.9,7.7,67.9,15.6,134.9,23.7
				c67,8.1,137.5,9.5,211.4,4.3c-28.6,28.8-82.2,46.1-160.7,51.9c-117.7,8.8-306.1-33.8-310.2-46.9
				C-174.1,149.8-132.6,138.8-46.8,125.5z"
          />
        </g>
      </g>
      <g id="Group-2" transform="translate(107.524303, 6.003210)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#C7CBD1"
          d="M-129.7-47.4C-100.1-73.8-41.8-87,45.2-87
			c98.1,0,163.9,17.5,197.2,52.5s49.6,93.3,48.7,174.8c-59.5,10.4-130.4,14.5-212.6,12.1c-123.4-3.5-249.3-14.4-249.3-22.9
			s10-20.8,10-51.2S-156.1-23.8-129.7-47.4z"
        />
        <path
          id="Rectangle-Copy"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#ABB0BA"
          fillOpacity="0.2"
          d="M-129.7-47.4
			C-100.1-73.8-41.8-87,45.2-87c15.2-3.2,33.5,3.8,54.9,21s32,90.1,32,218.4c46.5,2.4,28.6,2.4-53.7,0
			c-123.4-3.5-249.3-14.4-249.3-22.9s10-20.8,10-51.2S-156.1-23.8-129.7-47.4z"
        />
        <path
          id="Line"
          fill="none"
          stroke="#ABB0BA"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M37.6-85.5
			c-53,4.1-87.1,21-102.5,50.7S-85.5,53-80.6,139.6"
        />
        <path
          id="Line-2"
          fill="none"
          stroke="#ABB0BA"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M46.6-85.5
			c14.9,1.3,32.7,7.8,53.5,19.5s31.4,84.2,32,217.6"
        />
      </g>
      <ellipse
        id="Oval"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#951922"
        cx="155.4"
        cy="-81.8"
        rx="23.2"
        ry="6.8"
      />
      <path
        id="LambdaLogo"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#951922"
        d="M-2.3,10.8c12.4,4.4,22.9,7,31.5,7.8
		c8.6,0.8,21.5,0.8,38.6,0l-5.2,59.6l-40.9,25.3L-9.3,68.1L-2.3,10.8z M22.7,34.2L5.8,65.1l7.8,0L27,47.5l9.7,19.6l11.9,1l-15.8-33
		L22.7,34.2z"
      />
    </g>
  </svg>
);

export default SVG;
