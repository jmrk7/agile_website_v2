import React from "react"
import Router from "next/router"

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
            <a onClick={goLink.bind(this, "/dragonfly")} style={{cursor: "pointer"}}>
              <img src="/images/dragonfly_logo_home.png" alt="Agiletestware" className="hidden-xs" />
              <img src="/images/dragonfly_logo.png" alt="Agiletestware" className="visible-xs" />
            </a>
          </div>
          <div className="navbar-brand pull-right visible-xs" style={{paddingLeft: "16px"}}>
            <a onClick={goHome} style={{cursor: "pointer"}}><i className="fa fa-home" style={{fontSize: "32px", color: "#fff"}}/></a>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="menu-collapse-1">
          <ul className="nav navbar-nav navbar-right" style={{overflow: "visible"}}>
            <li className="hidden-xs">
              <a onClick={goHome} style={{cursor: "pointer"}}><i className="fa fa-home" style={{fontSize: "20px"}}/></a>
            </li>
            <li><a onClick={goLink.bind(this, "/dragonfly#features")} style={{cursor: "pointer"}} className="smooth-scroll">Features</a></li>
            <li><a href="/docs/dragonfly-docs/en/latest/" target="_blank" rel="noreferrer noopener" className="smooth-scroll">Docs</a></li>
            <li><a onClick={goLink.bind(this, "/dragonfly#pricing")} style={{cursor: "pointer"}} className="smooth-scroll">Pricing</a></li>
            <li><a onClick={goLink.bind(this, "/dragonfly#download")} style={{cursor: "pointer"}} className="smooth-scroll">Download</a></li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">Support <span className="caret"></span></a>
              <ul className="dropdown-menu" style={{marginTop: "-5px"}}>
                <li><a href="https://agiletestware.atlassian.net/servicedesk/customer/portal/2" target="_blank" rel="noreferrer noopener">Contact Us</a></li>
                <li><a href="/partners">Partners</a></li>
              </ul>
            </li>
            <li className="trial-cta"><a className="free_trial_track" style={{cursor: "pointer"}} title="Dragonfly Trial">Free Trial</a></li>
          </ul>
        </div>
      </div>
    </nav>  
  </header>
  )
}

export default Header;