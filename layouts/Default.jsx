import React from "react";
import Head from "next/head";
import NavItem from "../components/NavItem";

export function DefaultLayout({ props, children }) {
  return (
    <>
      <Head>
        {/* <title>{meta.title}</title> */}
        <meta name="robots" content="follow, index" />
        {/* <meta content={meta.description} name="description" /> */}
        {/* <meta
          property="og:url"
          content={`https://gokhanozturk.io${router.asPath}`}
        /> */}
        {/* <link
          rel="canonical"
          href={`https://gokhanozturk.io${router.asPath}`}
        /> */}
        {/* <meta property="og:type" content={meta.type} /> */}
        <meta property="og:site_name" content="Gökhan Öztürk" />
        {/* <meta property="og:description" content={meta.description} /> */}
        {/* <meta property="og:title" content={meta.title} /> */}
        {/* <meta property="og:image" content={meta.image} /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gokh4anozturk" />
        {/* <meta name="twitter:title" content={meta.title} /> */}
        {/* <meta name="twitter:description" content={meta.description} /> */}
        {/* <meta name="twitter:image" content={meta.image} /> */}
        {/* {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )} */}
      </Head>
      <div className="">
        <nav>
          <NavItem deneme={"deneme"} />
          <NavItem deneme={"deneme"} />
          <NavItem deneme={"deneme"} />
          <NavItem deneme={"deneme"} />
          <NavItem deneme={"deneme"} />
        </nav>
        <div>{children}</div>
      </div>
    </>
  );
}
