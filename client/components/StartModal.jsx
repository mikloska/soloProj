import React from "react";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";
  // if(!props.show){
  //   return null;
  // }

  return (
    <div id = 'modal' className={showHideClassName}>
      <div className="modal-container">
        <div className = 'modal-header-footer'/>
        <div className = 'modal-body'>
          {children}
        </div>
        <a href="javascript:;" className="modal-close" onClick={handleClose}>
          
        </a>
        <div className = 'modal-header-footer' id = 'start-modal-footer'></div>
      </div>
    </div>
  );
};

export default Modal;