import { Fragment } from "react";

import "./buscador.css";

export default function Buscador() {
  return (
    <Fragment>
      <form className="col-12 col-lg-auto mb-lg-0 me-lg-3">
        <input type="search" className="form-control" placeholder="Buscar..." aria-label="Search" />
      </form>
    </Fragment>
  );
}
