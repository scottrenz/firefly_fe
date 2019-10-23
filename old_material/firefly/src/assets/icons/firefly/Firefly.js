import React from "react";
import styled from "styled-components";

const FireFly = styled.div`
  position: relative;
  width: 100%;
`;

const SVG = ({
  style = {},
  accessory = 0,
  width = "100%",
  height = "100%",
  className = "",
  viewBox = "0 0 1024 1024",
  mouthStroke = "#3E8C0B",
  pupilFill = "#17191C",
  eyeFill = "#FFFFFF",
  headFill = "#4AA810",
  headStroke = "#4AA810",
  shineStroke = "#FBE66A",
  antennaStroke = "#17191C",
  lighttopFill = "#DFC104",
  lightmidFill = "#F9DC28",
  lightbottomFill = "#FBE66A",
  bodyBoth = "#3E8C0B",
  wingLittleBoth = "#E3E5E8",
  wingBigBoth = "#C7CBD1"
}) => {
  const accPath = acc => {
    switch (acc) {
      case 1:
        return (
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
        );
      case 2:
        return (
          <g id="NerdGlasses">
            <rect id="Frame" fill="none" width="1024" height="1024" />
            <g
              id="Hipster-glasses-by-Rones"
              transform="translate(247.000000, 300.136437)"
            >
              <path
                id="path2998"
                d="M247.2,27.6c-8.2-0.4-16.9-2.4-25.8-7.8C200.1,7.1,146.4,0,130.4,0C85.3,0,40.9,1.6,0,8.4l1.4,33.1
			C13,46.1,16.6,54.7,18.2,65.1c7.4,48,17.7,88.9,37,105.6c13.7,11.9,30.8,22.3,63,21.2c34.2-1.1,70.6-11.3,88.4-33.6
			c15.7-19.6,32-49.7,37.9-82.6C246.7,63.4,254.8,58,264,58c9.2,0,17.3,5.5,19.6,17.9c5.9,32.9,22.2,63,37.9,82.6
			c17.8,22.3,54.2,32.5,88.4,33.6c32.1,1.1,49.3-9.3,63-21.2c19.2-16.8,29.6-57.6,37-105.6c1.6-10.4,5.2-19,16.8-23.7L528,8.4
			C487.1,1.6,442.7,0,397.6,0c-16,0-69.7,7.1-91,19.9c-8.9,5.3-17.5,7.4-25.8,7.8C269.6,28.2,258.4,28.2,247.2,27.6z M115.7,16.3
			c9.9,0,20,0.2,29.5,0.1c8.2-0.1,64.9-1.8,74.1,35c8.7,35.1-4.2,79.7-31.8,104.9C168.3,174,92.7,193,63,155.4
			c-20.3-25.8-24.6-49.3-26.8-81.7C34.8,53,39.7,32,70.7,21.4C83,17.1,99.2,16.4,115.7,16.3L115.7,16.3z M377.6,16.3
			c2.4,0,4.1,0.1,5.2,0.1c9.5,0.2,19.6-0.1,29.5-0.1c16.5,0,32.7,0.8,45,5c31,10.7,35.9,31.7,34.5,52.3
			c-2.2,32.5-6.5,55.9-26.8,81.7c-29.7,37.7-105.3,18.6-124.5,1c-27.6-25.2-40.5-69.8-31.8-104.9C316.7,19.2,361.1,16.4,377.6,16.3
			L377.6,16.3z M13.5,24.5H36V30H13.5V24.5z M492,24.5h22.5V30H492V24.5z"
              />
            </g>
          </g>
        );
      case 3:
        return (
          <g id="PinkHeadphone">
            <g
              id="Right"
              transform="translate(774.500000, 400.000000) scale(-1, 1) translate(-774.500000, -400.000000) translate(723.000000, 286.000000)"
            >
              <path
                id="Inside"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#FFCCE7"
                d="M85.5,0c15.8,0,20.9,13,15.4,39
			c-1.9,24.7-3.1,49.8-3.5,75.3s0.8,51.8,3.5,79.1c5.5,23.1,0.3,34.7-15.4,34.7c-5.4,0-13.8-4-17-10.6c-10.8-22.2-6.6-74-6.6-103.4
			c0-27.7-0.7-80.3,8.4-104.3C73.6,0.7,79,0,85.5,0z"
              />
              <path
                id="Outside"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#F54291"
                d="M0.3,116.7c-0.1-0.6-0.1-1.2-0.1-1.8
			C-1.1,76.4,5,61.3,14.8,25.6c12.5,0.9,3.3-6,12.2-6.3c3.6-0.1,10.8,1.1,21.1-2.9c3-1.2,7.5-5,13.4-9c4.4-3,7.9-3.1,10.5-0.4
			c-5.5,43.6-7.8,78.8-6.9,105.6c0.1,2.5-0.1,4.9-0.5,7.1c0,0.4,0,0.8,0,1.3c0,26.7,3.5,61.7,10.4,104.9c-2.5,2.8-5.9,2.8-10.4,0
			c-6-3.8-10.6-7.4-13.6-8.5c-10.4-3.7-17.5-2.2-21.1-2.2c-8.9,0,0-7.2-12.4-5.9C6.6,174.2,0,159.3,0,120.9
			C0,119.5,0.1,118,0.3,116.7z"
              />
            </g>
            <g id="Left" transform="translate(198.000000, 286.000000)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#FFCCE7"
                d="M85.5,0c15.8,0,20.9,13,15.4,39c-1.9,24.7-3.1,49.8-3.5,75.3
			s0.8,51.8,3.5,79.1c5.5,23.1,0.3,34.7-15.4,34.7c-5.4,0-13.8-4-17-10.6c-10.8-22.2-6.6-74-6.6-103.4c0-27.7-0.7-80.3,8.4-104.3
			C73.6,0.7,79,0,85.5,0z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#F54291"
                d="M0.3,116.7c-0.1-0.6-0.1-1.2-0.1-1.8C-1.1,76.4,5,61.3,14.8,25.6
			c12.5,0.9,3.3-6,12.2-6.3c3.6-0.1,10.8,1.1,21.1-2.9c3-1.2,7.5-5,13.4-9c4.4-3,7.9-3.1,10.5-0.4c-5.5,43.6-7.8,78.8-6.9,105.6
			c0.1,2.5-0.1,4.9-0.5,7.1c0,0.4,0,0.8,0,1.3c0,26.7,3.5,61.7,10.4,104.9c-2.5,2.8-5.9,2.8-10.4,0c-6-3.8-10.6-7.4-13.6-8.5
			c-10.4-3.7-17.5-2.2-21.1-2.2c-8.9,0,0-7.2-12.4-5.9C6.6,174.2,0,159.3,0,120.9C0,119.5,0.1,118,0.3,116.7z"
              />
            </g>
            <path
              id="Top"
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#F76EAA"
              stroke="#F76EAA"
              strokeWidth="4"
              d="M342.4,212.2
		c-42.2,26.7-67.8,59.8-76.7,99.2c-3.2,14.2-5.7,37.6-7.3,69.9l0,0.6l-0.4,0.5c-6.3,8.3-13,12.5-20.1,12.5c-7.1,0-13-3.5-17.6-10.3
		l-0.4-0.5l0-0.6c0.9-36.1,3.3-61,7.1-74.9c14.1-51.5,43.3-94.1,87.5-128l-2.5-2.8l1.7-1.3c56.6-43.2,122-64.8,196.3-64.8
		c74.3,0,141,22.3,200.1,66.9l1.7,1.3l-1.2,1.4c43.6,33.7,72.4,76.2,86.4,127.2c3.8,13.9,6.2,38.8,7.1,74.9l0,0.6l-0.4,0.5
		c-4.6,6.8-10.5,10.3-17.6,10.3c-7.1,0-13.8-4.3-20.1-12.5l-0.4-0.5l0-0.6c-1.6-32.3-4-55.6-7.3-69.9c-8.9-38.9-33.8-71.6-75-98.1
		l-1.2,1.4l-1.5-0.9c-55.2-33.1-111.5-49.6-168.9-49.6c-57.4,0-112.7,16.5-166.1,49.6l-1.4,0.9l-1.1-1.3L342.4,212.2z"
            />
          </g>
        );
      case 4:
        return (
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
        );
      default:
        return null;
    }
  };

  return (
    <FireFly>
      <svg
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={`svgIcon ${className || ""}`}
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect id="Frame" fill="none" width="1024" height="1024" />
        <path
          id="LeftBigWing"
          fillRule="evenodd"
          clipRule="evenodd"
          fill={wingBigBoth}
          stroke={wingBigBoth}
          strokeWidth="22.5"
          d="
	M44.4,457.2c67.2-38.3,151.9-40.5,222.2,1.8c69.6,41.8,107.4,116.5,105.9,193c-67.2,38.3-151.9,40.5-222.2-1.8
	C80.8,608.4,42.9,533.7,44.4,457.2z"
        />
        <path
          id="LeftSmallWing"
          fillRule="evenodd"
          clipRule="evenodd"
          fill={wingLittleBoth}
          stroke={wingLittleBoth}
          strokeWidth="22.5"
          d="
	M132.4,745.4c9.9-49.1,44.4-91.7,94.7-109c51.7-17.8,106.7-4.4,144.9,30.3c-9.9,49.1-44.4,91.7-94.7,109
	C225.6,793.5,170.6,780.1,132.4,745.4z"
        />
        <path
          id="RightBigWing"
          fillRule="evenodd"
          clipRule="evenodd"
          fill={wingBigBoth}
          stroke={wingBigBoth}
          strokeWidth="22.5"
          d="
	M982.8,461c-68.6-40.2-154.6-43.4-225.4-0.8c-70.1,42.1-107.6,118.4-105.2,197c68.6,40.2,154.6,43.4,225.4,0.8
	C947.7,615.9,985.2,539.6,982.8,461z"
        />
        <path
          id="RightSmallWing"
          fillRule="evenodd"
          clipRule="evenodd"
          fill={wingLittleBoth}
          stroke={wingLittleBoth}
          strokeWidth="22.5"
          d="
	M892.8,743.2c-9.6-50.6-44.1-94.2-94.8-111.7c-52.1-17.9-107.8-3.6-146.6,32.5c9.6,50.6,44.1,94.2,94.8,111.7
	C798.3,793.6,854,779.3,892.8,743.2z"
        />
        <path
          id="Body"
          fillRule="evenodd"
          clipRule="evenodd"
          fill={bodyBoth}
          stroke={bodyBoth}
          strokeWidth="22.5"
          d="M401.5,600.7
	c29.7,13.2,69.4,20.4,109,20.4c40.5,0,81-7.5,110.9-21.2c34.6,27.5,56.4,67.8,56.4,112.7c0,82.8-75,120.1-166.6,120.1
	s-165-37.3-165-120.1C346.2,668.1,367.5,628.1,401.5,600.7z"
        />
        <path
          id="BodyLightBottom"
          fillRule="evenodd"
          clipRule="evenodd"
          fill={lightbottomFill}
          d="M688.7,698.9c0.8,6.2,1.2,12.4,1.2,18.8
	c0,89.6-80.5,130-178.7,130s-177-40.3-177-130c0-8.8,0.8-17.5,2.3-26c50.4,35,116,53.9,181.6,53.9
	C579,745.6,639.9,729.3,688.7,698.9z"
        />
        <path
          id="BodyLightMid"
          fillRule="evenodd"
          clipRule="evenodd"
          fill={lightmidFill}
          d="M681.8,760c-49,25-108.3,38.2-167.5,38.2
	c-61.6,0-123.3-14.4-173.4-41.3c-4.4-12.3-6.7-26-6.7-41.2c0-8.4,0.7-16.7,2.1-24.7c50.1,33.8,115.1,52,180.1,52
	c61.6,0,123.1-16.3,172.1-46.8c0.9,6.4,1.3,12.9,1.3,19.6C689.8,732.2,687,746.9,681.8,760z"
        />
        <path
          id="BodyLightTop"
          fillRule="evenodd"
          clipRule="evenodd"
          fill={lighttopFill}
          d="M689.8,706.8c-50.5,25.2-113,38.7-175.5,38.7
	c-64.4,0-128.8-14.3-180.1-41c0.2-19.1,5.4-37.3,14.5-53.9c48.2,25.2,108,38.7,167.8,38.7c56.9,0,113.9-12.2,160.8-35.2
	c8.1,16,12.6,33.5,12.6,51.7C689.8,706.2,689.8,706.5,689.8,706.8z"
        />
        <path
          id="LeftAntenna"
          fill="none"
          stroke={antennaStroke}
          strokeWidth="22.5"
          strokeLinecap="round"
          d="M459.2,200.6
	c-11.7-39.5-32.4-74.3-62.1-104.6s-63.5-40.9-101.4-31.9"
        />
        <path
          id="RightAntenna"
          fill="none"
          stroke={antennaStroke}
          strokeWidth="22.5"
          strokeLinecap="round"
          d="M577.4,200.6
	c11.8-39.5,32.9-74.3,63.1-104.4s64.7-40.7,103.3-31.6"
        />
        <path
          id="LightLeft"
          fill="none"
          stroke={shineStroke}
          strokeWidth="22.5"
          strokeLinecap="round"
          d="M372.8,870.6l-52.9,40.5"
        />
        <path
          id="LightMiddle"
          fill="none"
          stroke={shineStroke}
          strokeWidth="22.5"
          strokeLinecap="round"
          d="M511.8,911.3v67.9"
        />
        <path
          id="LightRight"
          fill="none"
          stroke={shineStroke}
          strokeWidth="22.5"
          strokeLinecap="round"
          d="M651.6,871.9l52.1,39.3"
        />
        <path
          id="Head"
          fillRule="evenodd"
          clipRule="evenodd"
          fill={headFill}
          stroke={headStroke}
          strokeWidth="22.5"
          d="M512,607.5
	c115.9,0,231.9-75.1,231.9-203.2s-103.8-232-231.9-232s-231.9,103.9-231.9,232S396.1,607.5,512,607.5z"
        />
        <ellipse
          id="LeftEye"
          fillRule="evenodd"
          clipRule="evenodd"
          fill={eyeFill}
          cx="400.2"
          cy="385.4"
          rx="96"
          ry="96.1"
        />
        <path
          id="LeftPupil"
          fillRule="evenodd"
          clipRule="evenodd"
          fill={pupilFill}
          d="M401.1,443.9c31.8,0,57.7-26.8,57.7-60
	s-25.9-62.4-57.7-60c-29.6,2.3-37.5,13.5-24,33.6c-19.8-10.3-31-1.5-33.7,26.4C340.2,416.9,369.2,443.9,401.1,443.9z"
        />
        <ellipse
          id="RightEye"
          fillRule="evenodd"
          clipRule="evenodd"
          fill={eyeFill}
          cx="623.8"
          cy="385.4"
          rx="96"
          ry="96.1"
        />
        <path
          id="RightPupil"
          fillRule="evenodd"
          clipRule="evenodd"
          fill={pupilFill}
          d="M624,444.7c32,0,58-26.9,58-60.2
	S656,322,624,324.4c-29.7,2.3-37.8,13.5-24.1,33.7c-19.9-10.4-31.2-1.5-33.9,26.5C562.8,417.6,592,444.7,624,444.7z"
        />
        <path
          id="Smile"
          fill="none"
          stroke={mouthStroke}
          strokeWidth="22.5"
          strokeLinecap="round"
          d="M466.2,528
	c14.8,10.3,29.8,15.4,45.1,15.4c15.3,0,31.2-5.1,47.7-15.4"
        />
        {accPath(accessory)}
      </svg>
    </FireFly>
  );
};

export default SVG;
