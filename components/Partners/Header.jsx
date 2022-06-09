import React from "react"
import Link from "next/link"

const Header = () => {
  return (
    <header id="header" className="header-page text-center">
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
            <Link href="/"><img src="/images/agiletestware_logo.png" alt="Agiletestware" style={{cursor: "pointer"}}/></Link>
          </div>
        </div>       
      </div>
    </nav>
  </header>
  )
}

export default Header;