import React from "react"

import FormContainer from "/components/form-container"
import SignUpHero from "/components/Bumblebee/SignUpHero"
import SignUpForm from "/components/Bumblebee/SignUpForm"

import classnames from "classnames/bind"
import * as styles from "./register.module.scss"

const cx = classnames.bind(styles);

const Register = () => {
  return (
    <div style={{backgroundColor: "#0d0f19"}}>      
      <div className={cx('signUpWrapper')}>
        <SignUpHero />
        <FormContainer>
          <SignUpForm />
        </FormContainer>
      </div>    
    </div>
  )
};

export default Register;
