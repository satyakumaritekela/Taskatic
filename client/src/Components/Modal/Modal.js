import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./Modal.scss";

const Modal = ({ visible, children, client }) => {
  return (
    <Fragment>
      {visible ? (
        <div className="ModalWrapper">
          <div className="ModalBoxSetup" width={client}>
            {children}
          </div>
          <div className="ModalBg"></div>
        </div>
      ) : null}
    </Fragment>
  );
};

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
};
export default Modal;
