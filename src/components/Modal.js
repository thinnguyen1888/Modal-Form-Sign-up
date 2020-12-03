import React, { Component } from "react";

export default ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose} className="btn btn-success mt2">
          Sign up
        </button>
      </section>
    </div>
  );
};
