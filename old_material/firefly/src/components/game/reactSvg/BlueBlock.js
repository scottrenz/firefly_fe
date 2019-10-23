import React from "react";
import uuid from "uuid/v4";

function BlueBlock() {
  const id1 = uuid();
  const id2 = uuid();
  const id3 = uuid();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 85 76"
      width="85px"
      height="76px"
      className="blueBlock"
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
          <stop offset="0%" stopColor="#7166FF" />
          <stop offset="100%" stopColor="#5B4EFF" />
        </radialGradient>
        <path
          id={id2}
          d="M66.003 3.826v-.83C72.788 10.783 77 21.65 77 33.673s-4.212 22.89-10.997 30.675v-.192a9.955 9.955 0 01-5.139 3.462 10 10 0 01-5.478.002c-8.636-2.455-15.763-3.682-21.38-3.682-5.592 0-12.68 1.216-21.263 3.65C7.429 69.091 1.9 66.004.395 60.691a10 10 0 01.003-5.465c2.41-8.464 3.615-15.531 3.615-21.201 0-5.681-1.21-12.763-3.628-21.247C-1.129 7.468 1.95 1.935 7.261.42a10 10 0 015.47-.004c8.688 2.465 15.78 3.697 21.275 3.697 5.519 0 12.65-1.243 21.392-3.73a10.003 10.003 0 0110.605 3.442z"
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
        transform="translate(-232 -1125) translate(108 816) translate(128 311)"
      >
        <use fill="#000" filter={`url(#${id1})`} xlinkHref={`#${id2}`} />
        <use fill={`url(#${id3})`} xlinkHref={`#${id2}`} />
      </g>
    </svg>
  );
}

export default BlueBlock;
