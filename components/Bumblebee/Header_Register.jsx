import React from "react"
import Router from "next/router"
import Link from "next/link"

const Header = () => {
  const goHome = () => {
    Router.push("/")
  }
  const goLink = (path, event) => {
    event.preventDefault();
    Router.push(path)
  }

  return (
  <header id="header">
    <nav id="navigation" className="navbar">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu-collapse-1">
            <span className="sr-only">Menu</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div className="navbar-brand">
            <a onClick={goLink.bind(this, "/bumblebee")}>
              <img src="/images/bumblebee/bumblebee_banner_black.png" alt="Agiletestware" className="hidden-xs" />
              <img src="/images/bumblebee/bumblebee_banner.png" alt="Agiletestware" className="visible-xs" />
            </a>
          </div>
          <div className="navbar-brand pull-right visible-xs" style={{paddingRight: "16px"}}>
            <a onClick={goHome} style={{cursor: "pointer"}}><i className="fa fa-home" style={{fontSize: "32px", color: "#fff"}}/></a>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="menu-collapse-1">
          <ul className="nav navbar-nav navbar-right" style={{overflow: "visible"}}>
            <li className="hidden-xs">
              <a onClick={goHome} style={{cursor: "pointer"}}><i className="fa fa-home" style={{fontSize: "20px"}}/></a>
            </li>
            <li><a onClick={goLink.bind(this, "/bumblebee#features")} className="smooth-scroll">Features</a></li>
            <li><a href="/docs/bumblebee-docs/en/latest/" target="_blank" className="smooth-scroll">Docs</a></li>
            <li><a onClick={goLink.bind(this, "/bumblebee#pricing")} className="smooth-scroll">Pricing</a></li>
            <li><a onClick={goLink.bind(this, "/bumblebee#download")} className="smooth-scroll">Download</a></li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">Support <span className="caret"></span></a>
              <ul className="dropdown-menu" style={{marginTop: "-5px"}}>
                <li><a href="https://agiletestware.atlassian.net/servicedesk/customer/portal/2">Contact Us</a></li>
                <li><a href="/partners">Partners</a></li>
              </ul>
            </li>
            <li className="trial-cta"><a className="free_trial_track" style={{cursor: "pointer"}} title="bumblebee Trial">Free Trial</a></li>
          </ul>
        </div>
      </div>
    </nav>    
  </header>
  )
}

export default Header;