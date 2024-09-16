import React from "react";
import { Link } from "react-router-dom";

export const DeleteDayModal = () => {

    return(
        <div className="modal" tabindex="-1" id="deleteDayModal" aria-labelledby="deleteDayModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">ShareTrips</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>¿Está seguro de eliminar este día?</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" className="btn btn-primary">Aceptar</button>
                </div>
                </div>
            </div>
        </div>
    );
};