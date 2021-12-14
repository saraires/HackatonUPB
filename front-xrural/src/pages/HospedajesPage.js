import React, { Fragment } from "react";

export default function HospedajesPage() {
  return (
    <Fragment>
      <div className="container">
        <h1>Hospedajes</h1>
        <div className="row">
          <div className="col border rounded-3 m-3 text-center shadow-none p-3 mb-5">Filtros aquí</div>
        </div>
      </div>

      <div className="container">
        <div className="col text-center shadow-none p-3 mb-5 bg-light border rounded-3">Listado de hospedajes</div>
      </div>
    </Fragment>
  );
}
