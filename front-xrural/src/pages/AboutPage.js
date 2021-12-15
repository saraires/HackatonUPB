import React, { Fragment } from "react";
import Gallery from "../components/Gallery";

export default function AboutPage() {
  return (
    <Fragment>
      <div className="container">
        <h1>Nosotros</h1>
        <div className="col text-center shadow-none p-3 mb-5 bg-light border rounded-3">Sobre nosotros</div>
      </div>
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
        <Gallery />
      </div>
    </Fragment>
  );
}
