import React, { useState, useEffect } from "react"
import Router from "next/router"
import Link from "next/link"
import ReCAPTCHA from "react-google-recaptcha"
import PhoneInput from "react-phone-number-input"
import { isValidPhoneNumber, formatPhoneNumberIntl } from "react-phone-number-input"

import axios from "axios"
import "react-phone-number-input/style.css"

const Register = () => {
  const [userinfo, setUserinfo] = useState({
    category: "dragonfly",
    r_fname: "",
    r_lname: "",
    r_company: "",
    r_jobtitle: "",
    r_email: "",
    r_phonenumber: "",
    r_country: "US",
    r_product: "Dragonfly"
  })
  const [verified, setVerified] = useState(false)
  const [error, setError] = useState(false)
  const [isDisabled, setDisable] = useState(true)
  const [emailError, setEmailError] = useState(true)
  const [success, setSuccess] = useState(false)

  const register = () => {
    axios.post("/api/routes/sign", userinfo)
      .then(response => {
        if(response.status === 200 || response.status === 201){
          setSuccess(true)
        }
      })
    .catch((error) => {
      throw error;
    })
  }
  const goHome = () => {
    Router.push("/")
  }
  const goDragonfly = () => {
    Router.push("/dragonfly")
  }
  const validateUserInfo = () => {
    return Object.values(userinfo).every(value => value !== "")
  }
  const validEmail = () => {
    return /^([\w-.]+@(?!gmail)(?!outlook)(?!hotmail)(?!yahoo)(?!yandex)([\w-]+.)+[\w-]{2,4})?$/.test(userinfo.r_email)
  }
  useEffect(() => {
    userinfo.r_email === ""
      ? setEmailError(true)
      : validEmail() ? setEmailError(true) : setEmailError(false)
    if(validEmail() && verified && error !== true && validateUserInfo()) {
      setDisable(false)
    }
    else {
      setDisable(true)
    }
  },[userinfo, verified, error])
  const changeUserinfo = (property, event) => {
    setUserinfo({...userinfo, [property]: event.target.value})
  }
  const handleVerifyRecaptcha = (e) => {
    e !== null 
      ? setVerified(true)
      : setVerified(false)
  }
  const handleCountry = (value) => {
    if(value !== undefined) setUserinfo({...userinfo, r_country : value})
  }
  const changePhoneNumber = (number) => {
    number !== undefined 
      ? isValidPhoneNumber(number)
        ? (setError(false), setUserinfo({...userinfo, r_phonenumber: formatPhoneNumberIntl(number)}))
        : setError(true)
      : setError(true)
  }

  return (
  <div className="agiletestware_body">
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
              <a onClick={goDragonfly} style={{cursor: "pointer"}}>
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
              <li><Link href="/dragonfly/#features" className="smooth-scroll">Features</Link></li>
              <li><Link href="/docs/dragonfly-docs/en/latest/" className="smooth-scroll">Docs</Link></li>
              <li><Link href="/dragonfly/#pricing" className="smooth-scroll">Pricing</Link></li>
              <li><Link href="/dragonfly/#download" className="smooth-scroll">Download</Link></li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">Support <span className="caret"></span></a>
                <ul className="dropdown-menu" style={{marginTop: "-5px"}}>
                  <li><a href="https://agiletestware.atlassian.net/servicedesk/customer/portal/2" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
                  <li><a href="/partners">Partners</a></li>
                </ul>
              </li>
              <li className="trial-cta">
                <a className="free_trial_track" style={{cursor: "pointer"}} title="Dragonfly Trial">
                  Free Trial
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div id="contact" className="margin-bottom40">
      <div className="container">
        <div className="post-heading-center" style={{marginTop: "30px"}}>
          <h2>Try Dragonfly Risk Free for 14 Days</h2>
        </div>
        <div className={success ? "alert alert-success alert-dismissible show" :"alert alert-success alert-dismissible"} role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <div style={{fontSize: "20px"}}>
            Thanks for your request for evaluating Dragonfly. Our support team will send you an evaluation license along with resources for getting started within 24 hours. If you have any questions, please don&apos;t hesitate to
            <a href="https://agiletestware.atlassian.net/servicedesk/customer/portal/2" style={{marginLeft: "5px"}}>contact us</a>
          </div>
        </div>
        <div className={success ? "row register-pannel hide" : "row register-pannel"} id="register-pannel-id">
          <div className="col-md-4 register-form-left-pannel text-center">
            <div>
              <div className="card-body center-block">
                <img src="/images/registration_form.svg" />
                <h2 className="py-3">Registration</h2>
              </div>
            </div>
          </div>
          <div className="col-md-8 py-5 border-dragonfly">
            <div className="container-fluid mx-3">
              <div className="sep-border margin-bottom40"></div>
              <div className="row">
                <div className="fix-padding"></div>
                <form method="post" className="divi-affa-form-contact" id="divi-register-form" encType="multipart/form-data">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-6 col-lg-6 px-3">
                        <div className="form-group">
                          <label htmlFor="r_fname">First Name</label>
                          <input type="text" className="form-control required" name="r_fname" placeholder="Enter First Name" value={userinfo.r_fname} onChange={(event) => changeUserinfo("r_fname", event)}/>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 px-3">
                        <div className="form-group">
                          <label htmlFor="r_lname">Last Name</label>
                          <input type="text" className="form-control required" name="r_lname" placeholder="Enter Last Name" value={userinfo.r_lname} onChange={(event) => changeUserinfo("r_lname", event)} />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 col-lg-12 px-6">
                        <div className="form-group">
                          <label htmlFor="r_email">Email</label>
                          <input type="text" name="r_email" className="form-control required" placeholder="Enter Email Address"  value={userinfo.r_email} onChange={(event) => changeUserinfo("r_email", event)}/>
                          <span style={{display: emailError ? "none" : "block"}} id="r_phonenumber_inputerror" className="r_phonenumber_inputerror">Please use your corporate email.</span>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-12 px-6">
                        <div className="form-group">
                          <label htmlFor="r_phonenumber">Phone Number</label>
                          <PhoneInput
                            international={true}
                            placeholder="Enter phone number"
                            defaultCountry={userinfo.r_country}
                            value={userinfo.r_phonenumber}
                            onCountryChange={handleCountry}
                            onChange={changePhoneNumber}
                          />                  
                          <span style={{display: error ? "block" : "none"}} id="r_phonenumber_inputerror" className="r_phonenumber_inputerror">Phone number is invalid.</span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 col-lg-12 px-6">
                        <div className="form-group">
                          <label htmlFor="r_company">Company Name</label>
                          <input type="text" name="r_company" className="form-control required" placeholder="Enter Company" value={userinfo.r_company} onChange={(event) => changeUserinfo("r_company", event)} />
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-12 px-6">
                        <div className="form-group">
                          <label>Job Title</label>
                          <input type="text" name="r_jobtitle" className="form-control required" placeholder="Enter Job Title" value={userinfo.r_jobtitle} onChange={(event) => changeUserinfo("r_jobtitle", event)} />
                        </div>
                      </div>
                    </div>                    
                    <div className="row">
                      <div className="col-md-6 col-lg-6 px-3">
                        <div className="form-group">
                        <ReCAPTCHA
                          sitekey={process.env.RECAPTCHA_SITE_KEY}
                          onChange={handleVerifyRecaptcha}
                          theme="light"
                        />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="row px-3">
                <div className="container-fluid mb-30 mx-3">
                  <input type="button" name="submit" value="Register" className="reg_btn dragonfly_trial_submit" title="Dragonfly Trial Submit" onClick={register} disabled={isDisabled}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register;