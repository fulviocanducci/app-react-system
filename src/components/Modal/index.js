import React, { useState } from "react";

export const useModal = () => {
  const [open, setOpen] = useState(false);
  const toggleModal = () => setOpen(!open);
  return [open, toggleModal];
};

export default function Modal({ open, toogleModal }) {
  return (
    <div
      className={
        open
          ? "modal fade bd-example-modal-sm show"
          : "modal fade bd-example-modal-sm"
      }
      tabIndex="-1"
      role="dialog"
      aria-labelledby="mySmallModalLabel"
      aria-hidden="true"
      style={{ display: open ? "block" : "none" }}
    >
      <div className="modal-dialog modal-sm">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title" id="exampleModalCenterTitle">
              Pesquisa?
            </h6>
          </div>
          <div className="modal-body">Repositório não encontrado</div>
          <div className="modal-footer">
            <button
              onClick={toogleModal}
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
