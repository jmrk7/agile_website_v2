import React from "react"

const Pricing = () => {
  return (
    <div id="pricing" className="wrap-container400 bg-pricing-bk">
    <div className="container">
      <div className="tbl-pricing tbl-prc-recommended">
        <div className="row">
          <div className="col-sm-12 col-lg-6-pri col-md-offset-3 tbl-prc-col tbl-prc-col-org pricing-item2 text-center-sm" data-animation="animation-fade-in-down" data-delay="600">
            <div className="tbl-prc-wrap">
              <div className="tbl-prc-heading">
                <h4>Enterprise License</h4>
              </div>
              <div className="tbl-prc-price">
                <h5><a href="https://agiletestware.atlassian.net/servicedesk/customer/portal/2">Contact Us</a></h5>
              </div>
              <hr style={{color: "#00f", borderTop: "2px solid #d4c6c6"}} />
              <ul className="tbl-prc-list enter-price">
                <li><i className="fa fa-check"></i>&nbsp;&nbsp;&nbsp;&nbsp;Email and GoToMeeting Support</li>
                <li><i className="fa fa-check"></i>&nbsp;&nbsp;&nbsp;&nbsp;48 hour support SLA</li>
                <li><i className="fa fa-check"></i>&nbsp;&nbsp;&nbsp;&nbsp;TestRail API support</li>
                <li><i className="fa fa-check"></i>&nbsp;&nbsp;&nbsp;&nbsp;Unlimited users/machines</li>
                <li><i className="fa fa-check"></i>&nbsp;&nbsp;&nbsp;&nbsp;Unlimited tests uploads/day</li>

                <li><i className="fa fa-check"></i>&nbsp;&nbsp;&nbsp;&nbsp;Prioritized bug fixes and feature requests</li>
              </ul>
              <div className="tbl-prc-footer">
                <a href="https://agiletestware.atlassian.net/servicedesk/customer/portal/2" className="btn-custom btn-purchase">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Pricing;