import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
export default function UsersRegister() {
  return (
    <Fragment>
      <div className="container">
        <h1>Registro</h1>
        <div className="col shadow-none p-3 mb-5 bg-light border rounded-3">
          <div class="mb-3">
            <label for="email" class="form-label">
              Correo electrónico
            </label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">
              Nombre
            </label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre" />
          </div>
          <div class="mb-3">
            <label for="clave" class="form-label">
              Clave
            </label>
            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Clave" />
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
