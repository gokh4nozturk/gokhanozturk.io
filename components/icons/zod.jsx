import * as React from "react";

const Zod = (props) => (
  <svg
    viewBox="0 0 256 203"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <filter
        filterUnits="objectBoundingBox"
        height="106.5%"
        id="a"
        width="105.2%"
        x="-2.2%"
        y="-2.8%"
      >
        <feOffset dx={1} dy={1} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={2} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.36 0" />
      </filter>
      <path
        d="M200.42 0H53.63L0 53.355l121.76 146.624 9.714-10.9L252 53.857 200.42 0Zm-5.362 12.562 39.84 41.6-112.8 126.558L17 54.162l41.815-41.6h136.243Z"
        id="b"
      />
    </defs>
    <path d="M60.816 14.033h136.278l39.933 41.69-112.989 126.554L18.957 55.724z" fill="#18253F" />
    <path d="M151.427 152.386H98.013l-24.124-29.534 68.364-.002.002-4.19h39.078z" fill="#274D82" />
    <path
      d="m225.56 43.834-147.382 85.09-19.226-24.051 114.099-65.877-2.096-3.631 30.391-17.546zM146.596 14.075 35.93 77.968 18.719 56.483l74.095-42.78z"
      fill="#274D82"
    />
    <g transform="translate(2 1.51)">
      <use filter="url(#a)" xlinkHref="#b" />
      <use fill="#3068B7" xlinkHref="#b" />
    </g>
  </svg>
);
export default Zod;
