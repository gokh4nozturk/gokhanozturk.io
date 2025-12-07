import * as React from "react";

const shadcnui = (props) => (
  <svg height="1em" viewBox="0 0 256 256" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0 0h256v256H0z" fill="none" />
    <path
      d="M208 128l-80 80M192 40L40 192"
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={25}
    />
  </svg>
);
export default shadcnui;
