import * as React from "react";

const SVG = (props) => (
  <svg
    viewBox="0 0 300 300"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <g stroke="#000" strokeWidth={38.009}>
      <g id="svgstar" transform="translate(150 150)">
        <path
          d="M-84.149-15.851a22.417 22.417 0 1 0 0 31.702H84.15a22.417 22.417 0 1 0 0-31.702Z"
          fill="#ffb13b"
          id="svgbar"
        />
        <use transform="rotate(45)" xlinkHref="#svgbar" />
        <use transform="rotate(90)" xlinkHref="#svgbar" />
        <use transform="rotate(135)" xlinkHref="#svgbar" />
      </g>
    </g>
    <use xlinkHref="#svgstar" />
  </svg>
);
export default SVG;
