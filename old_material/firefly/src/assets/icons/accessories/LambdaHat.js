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
    <g id="LambdaHat">
      <rect id="Frame" fill="none" width="1024" height="1024" />
      <g id="Group" transform="translate(171.500000, 88.523274)">
        <g id="Rectangle">
          <g>
            <path
              id="path-1"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M125,214c22.9,7.7,67.9,15.6,134.9,23.7
					c67,8.1,137.5,9.5,211.4,4.3c-28.6,28.8-82.2,46.1-160.7,51.9C192.9,302.7,4.5,260,0.5,247C-2.3,238.3,39.3,227.3,125,214z"
            />
          </g>
          <g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#951922"
              d="M125,214c22.9,7.7,67.9,15.6,134.9,23.7
					c67,8.1,137.5,9.5,211.4,4.3c-28.6,28.8-82.2,46.1-160.7,51.9C192.9,302.7,4.5,260,0.5,247C-2.3,238.3,39.3,227.3,125,214z"
            />
          </g>
        </g>
        <g id="Group-2" transform="translate(107.524303, 6.003210)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#C7CBD1"
            d="M42.1,41.1C71.7,14.7,130,1.5,217,1.5
				C315.2,1.5,380.9,19,414.2,54s49.6,93.3,48.7,174.8c-59.5,10.4-130.4,14.5-212.6,12.1C126.9,237.5,1,226.6,1,218s10-20.8,10-51.2
				S15.7,64.7,42.1,41.1z"
          />
          <path
            id="Rectangle-Copy"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#ABB0BA"
            fillOpacity="0.2"
            d="M42.1,41.1
				C71.7,14.7,130,1.5,217,1.5c15.2-3.2,33.5,3.8,54.9,21s32,90.1,32,218.4c46.5,2.4,28.6,2.4-53.7,0C126.9,237.5,1,226.6,1,218
				s10-20.8,10-51.2S15.7,64.7,42.1,41.1z"
          />
          <path
            id="Line"
            fill="none"
            stroke="#ABB0BA"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M209.5,3
				c-53,4.1-87.1,21-102.5,50.7s-20.6,87.9-15.7,174.4"
          />
          <path
            id="Line-2"
            fill="none"
            stroke="#ABB0BA"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M218.5,3
				c14.9,1.3,32.7,7.8,53.5,19.5s31.4,84.2,32,217.6"
          />
        </g>
        <ellipse
          id="Oval"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#951922"
          cx="327.3"
          cy="6.8"
          rx="23.2"
          ry="6.8"
        />
        <path
          id="LambdaLogo"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#951922"
          d="M169.5,99.3c12.4,4.4,22.9,7,31.5,7.8
			c8.6,0.8,21.5,0.8,38.6,0l-5.2,59.6L193.6,192l-31.1-35.3L169.5,99.3z M194.6,122.8l-16.9,30.8l7.8,0l13.3-17.6l9.7,19.6l11.9,1
			l-15.8-33L194.6,122.8z"
        />
      </g>
    </g>
  </svg>
);

export default SVG;
