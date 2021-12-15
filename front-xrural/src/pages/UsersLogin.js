import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
export default function UsersPage() {
  return (
    <Fragment>
      <div className="container">
        <h1>Login</h1>
        <div className="col shadow-none p-3 mb-5 bg-light border rounded-3">
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Correo electrónico</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Clave</label>
          </div>
          <button type="button" class="btn btn-primary mb-3">
            Conectarme
          </button>
        </div>
        <div class="div">
          <NavLink to="/registro" className="registro">
            Clic aquí para registrarse
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
}
