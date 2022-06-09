import React from "react"

const Feature2 = () => {
  return (
    <div id="features3" className="wrap-container400 bg-grey-ag">
      <div className="container">
        <div className="row vertical-align">
          <div className="col-sm-12 col-md-6 col-lg-7 col-sm-offset-0 col-md-offset-0 hidden-xs">
            <figure className="margin-bottom40">
              <img src="/images/dragonfly/dragonfly_realtime_updates.png" alt="Realtime Updates"/>
            </figure>
          </div>
          <div className="col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0 col-lg-5">
            <div className="margin-bottom20">
              <div className="margin-bottom20">
                <h2 className="head-h2">Real-time Updates</h2>
                <p>Automatically send all test results from ReadyAPI to HP ALM without having to lift a finger</p>
              </div>
              <div className="list-row">
                <ul className="list-icon">
                  <li><i className="fa fa-check"></i>Dragonfly automatically captures test status, teststep details, groovy logs, and much more</li>
                  <li><i className="fa fa-check"></i>Information from ReadyAPI is processed and sent to HP ALM at the end of each testcase run</li>
                  <li><i className="fa fa-check"></i>View streaming test results status in ReadyAPI logs</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 visible-xs">
            <figure className="margin-bottom40">
              <img src="/images/dragonfly/dragonfly_realtime_updates.png" alt="Realtime Updates" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature2;
