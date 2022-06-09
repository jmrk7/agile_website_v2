import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Head from "next/head"
import Router from "next/router"
import titleMsg from "/components/Utils/Title.js"

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [titleText, setTitleText] = useState("");

  useEffect(() => {
    titleMsg.map((value) => {
      if( value.route === Router.pathname ) setTitleText(value.text)
    })
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>{titleText}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
