import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Modal() {
    const navigate = useNavigate();

    const no = () => {
        navigate("/login", {
            replace: true,
        });
    };

    return (
        <div>
            {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Extender sesión</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Llevas un buen rato en nuestra página y eso nos encanta, ¿quieres extender tu sesion?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" onClick = {no}>No</button>
                            <button type="button" class="btn btn-primary"  data-bs-dismiss="modal">Si</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}