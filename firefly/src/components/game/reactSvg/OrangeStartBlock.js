import React from "react";
import uuid from "uuid/v4";

function OrangeStartBlock() {
  const id1 = uuid();
  const id2 = uuid();
  const id3 = uuid();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 85 75"
      width="85px"
      height="75px"
      className="orangeStartBlock"
    >
      <defs>
        <radialGradient
          id={id3}
          cx="50%"
          cy="50%"
          r="56.302%"
          fx="50%"
          fy="50%"
          gradientTransform="matrix(0 1 -.88312 0 .942 0)"
        >
          <stop offset="0%" stopColor="#FBB36A" />
          <stop offset="100%" stopColor="#F99128" />
        </radialGradient>
        <path
          id={id2}
          d="M325 304.32v-.703c6.786 7.785 10.998 18.652 10.998 30.675s-4.212 22.89-10.998 30.675v-.306a9.955 9.955 0 01-5.134 3.456 10 10 0 01-5.478.003c-8.637-2.455-15.765-3.683-21.382-3.683-5.593 0-12.681 1.216-21.265 3.65-5.314 1.505-10.842-1.582-12.348-6.895a10 10 0 01.003-5.465c2.41-8.464 3.615-15.531 3.615-21.201 0-5.681-1.21-12.763-3.628-21.247-1.514-5.312 1.564-10.844 6.876-12.359a10 10 0 015.47-.003c8.69 2.465 15.781 3.697 21.277 3.697 5.52 0 12.65-1.243 21.394-3.73a10.003 10.003 0 0110.6 3.436z"
        />
        <filter
          id={id1}
          width="118.2%"
          height="120.6%"
          x="-9.1%"
          y="-7.4%"
          filterUnits="objectBoundingBox"
        >
          <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation="2"
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
        </filter>
      </defs>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
        transform="translate(-304 -394) translate(49 95)"
      >
        <use fill="#000" filter={`url(#${id1})`} xlinkHref={`#${id2}`} />
        <use fill={`url(#${id3})`} xlinkHref={`#${id2}`} />
      </g>
    </svg>
  );
}

export default OrangeStartBlock;
