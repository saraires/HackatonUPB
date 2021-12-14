import React, { Fragment } from "react";

export default function ExperienciasPage() {
  return (
    <Fragment>
      <div className="container">
        <h1>Experiencias</h1>
        <div className="row">
          <div className="col border rounded-3 m-3 text-center shadow-none p-3 mb-5">Filtros aquí</div>
        </div>
      </div>

      <div className="container">
        <div className="col text-center shadow-none p-3 mb-5 bg-light border rounded-3">Listado de Experiencias</div>
      </div>
    </Fragment>
  );
}
