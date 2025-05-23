import * as React from 'react';
const Raindropio = (props) => (
  <svg
    viewBox="0 0 38 31"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path id="a" d="M9.5.917a9.5 9.5 0 0 1 9.5 9.5v9.5H9.5a9.5 9.5 0 0 1 0-19z" />
      <path id="c" d="M0 19.917v-9.5l.004-.27a9.5 9.5 0 1 1 9.496 9.77H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        fill="#0B7ED0"
        d="M28.192 4.7c5.077 4.933 5.077 12.93 0 17.863-.17.165-.343.325-.519.479L19 31l-8.673-7.958c-.176-.154-.35-.314-.52-.479-5.076-4.932-5.076-12.93 0-17.863 5.077-4.933 13.309-4.933 18.385 0z"
      />
      <g transform="translate(0 11.083)">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use fill="#2CD4ED" xlinkHref="#a" />
        <path
          fill="#0DB4E2"
          d="M28.192-6.384c5.077 4.933 5.077 12.931 0 17.864-.17.165-.343.324-.519.478L19 19.917l-8.673-7.959c-.176-.154-.35-.313-.52-.478-5.076-4.933-5.076-12.93 0-17.864 5.077-4.933 13.309-4.933 18.385 0z"
          mask="url(#b)"
        />
      </g>
      <g transform="translate(19 11.083)">
        <mask id="d" fill="#fff">
          <use xlinkHref="#c" />
        </mask>
        <use fill="#3169FF" xlinkHref="#c" />
        <path
          fill="#3153FF"
          d="M9.192-6.384c5.077 4.933 5.077 12.931 0 17.864-.17.165-.343.324-.519.478L0 19.917l-8.673-7.959c-.176-.154-.35-.313-.52-.478-5.076-4.933-5.076-12.93 0-17.864 5.077-4.933 13.309-4.933 18.385 0z"
          mask="url(#d)"
        />
      </g>
    </g>
  </svg>
);
export default Raindropio;
