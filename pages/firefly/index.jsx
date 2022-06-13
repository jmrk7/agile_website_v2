import React from "react"

import Header from "/components/Firefly/Header"
import Content from "/components/Firefly/Content"
import Modal from "/components/Firefly/Modal"

const Firefly = () => {
  return (
    <div className="agiletestware_body firefly">
      <Header />
      <Content />      
      <Modal/>
    </div>
  )
}

export default Firefly;