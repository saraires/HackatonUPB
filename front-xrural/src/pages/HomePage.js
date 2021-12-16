import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Carrusel from "../components/Carrusel";

export default function HomePage() {
  return (
    <Fragment>
      <Carrusel />
      <div className="container cat_home">
        <div className="row">
          <div className="col categoria_experiencia rounded-3 text-center shadow-none m-3 p-0 ">
            <NavLink to="/experiencias" className={"cat"}>
              <div className="cat_texto p-3">
                <h2>Experiencias</h2>
                <span>Atrevete a vivir</span>
              </div>
            </NavLink>
          </div>

          <div className="col categoria_hospedaje rounded-3 text-center shadow-none m-3 p-0 ">
            <NavLink to="/hospedajes" className={"cat"}>
              <div className="cat_texto p-3">
                <span>Los mas originales</span>
                <h2>Hospedajes</h2>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
