import React, { useState } from "react"

const Modal = () => {
  const [onClose, setOnClose] = useState(false);

  const close = () => {
    setOnClose(true);
  }

  return (
    <div className={onClose ? "modal-popup-container fade" : "modal-popup-container"} style={{display: onClose? "none" : "flex"}}>
      <div className="modal-popup" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <header className="modal-popup-header" id="modalTitle">
          <p>Pangolin is now Railflow!</p>
          <button type="button" className="modal-popup-btn-close" onClick={close} aria-label="Close modal">
            x
          </button>
        </header>

        <div className="modal-popup-body">
          <section className="modal-popup-text" id="modalDescription">
          <p>We are pleased to announce that Pangolin has been redesigned from the ground up and is now called <a href="https://railflow.io/">Railflow.</a></p>
            <p>Reason why we did this:</p>
            <ol>
            <li>Simplify the overall installation. (Railflow requires no server!)</li>
            <li>Support for all CICD systems like Jenkins, TeamCity, Github, Gitlab, CircleCI etc.</li>
            <li>New and improved pricing and licensing options.</li>
            <li>Tons of new features and capabilities.</li>
            </ol>
            <a href="https://railflow.io" className="modal-popup-btn-checkout">Check out Railflow</a>
          </section>

          <section className="modal-popup-image" id="modalImage">
          <a href="https://railflow.io/">
            <img src="/images/pangolin/pangolin_railflow.jpg" alt="Pangolin is now Railflow" />
          </a>
          </section>
        </div>
      </div>
      <div className="modal-popup-backdrop" onClick={close}/>
    </div>
  )
}

export default Modal;
