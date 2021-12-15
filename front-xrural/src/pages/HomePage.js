import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col categoria_experiencia rounded-3 text-center shadow-none m-3 p-0 ">
            <NavLink to="/experiencias" className={"cat"}>
              <div class="cat_texto p-3">
                <h2>Experiencias</h2>
                <span>Atrevete a vivir</span>
              </div>
            </NavLink>
          </div>

          <div className="col categoria_hospedaje rounded-3 text-center shadow-none m-3 p-0 ">
            <NavLink to="/hospedajes" className={"cat"}>
              <div class="cat_texto p-3">
                <span>Los mas originales</span>
                <h2>Hospedaje</h2>
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
