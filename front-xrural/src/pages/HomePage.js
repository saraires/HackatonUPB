import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <Fragment>
      <div className="container">
        <h1>Inicio</h1>
        <div className="row">
          <div className="col categoria_hospedaje bg-light border rounded-3 m-3 text-center shadow-none p-3 mb-5">
            <NavLink to="/hospedajes">
              <div class="card">
                <h2>Hospedaje</h2>
                <span>Los mas originales</span>
              </div>
            </NavLink>
          </div>

          <div className="col categoria_experiencia bg-light border rounded-3 m-3 text-center shadow-none p-3 mb-5">
            <NavLink to="/experiencias">
              <div class="card">
                <h2>Experiencias</h2>
                <span>Los mas originales</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="col text-center shadow-none p-3 mb-5 bg-light border rounded-3">Bloque 3</div>
      </div>
    </Fragment>
  );
}
