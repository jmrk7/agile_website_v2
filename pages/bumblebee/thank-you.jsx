import React from "react"
import Router from "next/router"

import ThankYou from "/components/Bumblebee/ThankYou"

const Thanks = () => {
  const goHome = () => {
    Router.push("/bumblebee")
  }

  return (
    <div className="agiletestware_body bumblebee">
      <header id="header" style={{background: "url('/base-header-overlay.png') top left #50a2f6"}}>
        <nav id="navigation" className="navbar">
          <div className="container" style={{paddingLeft: '0px'}}>
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu-collapse-1">
                <span className="sr-only">Menu</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="navbar-brand">
                <a onClick={goHome}>
                  <img src="/bumblebee_logo_home.png" alt="Agiletestware" className="hidden-xs" />
                  <img src="/images/bumblebee/bumblebee_banner.png" alt="Agiletestware" className="visible-xs" />
                </a>
              </div>
              <div className="navbar-brand pull-right visible-xs" style={{ paddingLeft: "16px" }}>
                <a onClick={goHome} style={{ cursor: "pointer" }}>
                  <i className="fa fa-home" style={{ fontSize: "32px", color: "#fff" }} />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <ThankYou />
    </div>
  );
};

export default Thanks;
