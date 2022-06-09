import React from "react"

const Introduce = () => {
  return (
    <div id="introduce" className="bg-grey-ag">
      <div className="container">
        <div className="row header-text-dragonfly">
          <div className="col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-5">
            <div className="margin-top50">
              <ul className="list-icon">
                <li>
                  <i className="fa fa-check"></i>Integrate ReadyAPI with HP ALM in 5
                  mins
                </li>
                <li>
                  <i className="fa fa-check"></i>Significant boost in testing
                  productivity
                </li>
                <li>
                  <i className="fa fa-check"></i>Real-time updates to HP ALM from
                  ReadyAPI
                </li>
                <li>
                  <i className="fa fa-check"></i>Supports all versions of ReadyAPI
                  and HP ALM
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-7 col-sm-offset-0 col-md-offset-0 headerimage2 hidden-xs">
            <div className="header-button margin-bottom40">
              <figure className="margin-bottom40">
                <img
                  src="/images/dragonfly/Header_Illustration.png"
                  alt="Dragonfly"
                />
              </figure>
            </div>
          </div>
          <div className="col-sm-12 visible-xs">
            <div className="header-button margin-bottom40">
              <figure className="margin-bottom40">
                <img
                  src="/images/dragonfly/Header_Illustration.png"
                  alt="Dragonfly"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;