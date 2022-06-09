import React from "react"

const Feature5 = () => {
  return (
  <div id="features5" className="wrap-container400 bg-grey-ag">
    <div className="container">
      <div className="row vertical-align">
        <div className="col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-0">
          <div className="margin-bottom20">
            <div className="margin-bottom20">
              <h2 className="head-h2">Custom Fields Wizard</h2>
              <p>Firefly has extensive support for TestRail custom field mapping. Our simple yet powerful wizard makes configuration a breeze</p>
            </div>
            <div className="list-row">
              <ul className="list-icon">
                <li><i className="fa fa-check"></i>Map custom fields in TestRail test cases to ReadyAPI test cases</li>
                <li><i className="fa fa-check"></i>Use Fireflys&apos;s powerful custom field configuration wizard to easily configure all tests with a few clicks</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-7 col-sm-offset-0 col-md-offset-0 col-lg-offset-0">
          <figure className="margin-bottom40">
            <img src="/images/firefly/custom_fields_wizard.png" alt="ReadyAPI Compatibility" />
          </figure>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Feature5;