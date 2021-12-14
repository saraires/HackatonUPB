import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

export default function UserPage() {
  const params = useParams();

  return (
    <Fragment>
      <div className="container">
        <h1>Usuario</h1>

        <div className="col text-center shadow-none p-3 mb-5 bg-light border rounded-3">
          Usuario: <h1>{params.id}</h1>
        </div>
      </div>
    </Fragment>
  );
}
