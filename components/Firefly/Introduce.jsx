import React from 'react'

export default function Introduce() {
  return (
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-5 col-sm-offset-0 col-md-offset-0 col-lg-5" style={{paddingLeft: "0"}}>
        <div className="margin-top50">
          <ul className="list-icon">
            <li><i className="fa fa-check"></i>Integrate ReadyAPI and TestRail with simple configs</li>
            <li><i className="fa fa-check"></i>Exports ReadyAPI tests and tests results into TestRail</li>
            <li><i className="fa fa-check"></i>Significant boost in testing productivity</li>
            <li><i className="fa fa-check"></i>Real-time updates into TestRail as you run ReadyAPI tests</li>
            <li><i className="fa fa-check"></i>Supports all versions of soapUI, ReadyAPI and TestRail</li>
          </ul>
        </div>
      </div>
      <div className="col-sm-12 col-md-7 col-lg-7 col-sm-offset-0 col-md-offset-0 headerimage2 hidden-xs">
        <div className="header-button margin-bottom40">
          <figure className="margin-bottom40">
            <img src="/images/firefly/Header_Illustration.png" alt="Firefly" style={{width: "110%", marginBottom: "-10px"}} />
          </figure>
        </div>
      </div>
      <div className="col-sm-12 visible-xs">
        <div className="header-button margin-bottom40">
          <figure className="margin-bottom40">
            <img src="/images/firefly/Header_Illustration.png" alt="Firefly" />
          </figure>
        </div>
      </div>
    </div>
  </div>
  )
}
