import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
export default function UsersRegister() {
  return (
    <Fragment>
      <div className="container">
        <h1>Registro</h1>
        <div className="col shadow-none p-3 mb-5 bg-light border rounded-3">
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com" />
            <label for="floatingEmail" class="form-label">
              Correo electrónico
            </label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingNombre" placeholder="Nombre" />
            <label for="floatingNombre" class="form-label">
              Nombre
            </label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPass" placeholder="Clave" />
            <label for="floatingPass" class="form-label">
              Clave
            </label>
          </div>
          <button type="button" class="btn btn-primary mb-3">
            Registrarme
          </button>
        </div>
        <div class="div">
          <NavLink to="/login" className="registro">
            Clic aquí para conectarse
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
}
