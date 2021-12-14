import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <Fragment>
      <div className="container">
        <h1>Inicio</h1>
        <div className="row">
          <div className="col bg-light border rounded-3 m-3 text-center shadow-none p-3 mb-5">
            <NavLink to="/hospedajes"> Hospedajes</NavLink>
          </div>

          <div className="col bg-light border rounded-3 m-3 text-center shadow-none p-3 mb-5">
            <NavLink to="/experiencias"> Experiencias</NavLink>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="col text-center shadow-none p-3 mb-5 bg-light border rounded-3">Bloque 3</div>
      </div>
    </Fragment>
  );
}
