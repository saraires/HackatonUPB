import React, { Fragment } from "react";
import axios from "../axios/axios";
import { useState, useEffect } from "react";

export default function ExperienciasPage() {
  const [experiencias, setExperiencias] = useState([]);

  useEffect(() => {
    axios.get("/categoria/experiencia").then((res) => {
      setExperiencias(res.data);
    });
  }, []);
  return (
    <Fragment>
      <div className="container">
        <h1>Experiencias</h1>
        <div className="row">
          <div className="col border rounded-3 m-3 text-center shadow-none p-3 mb-5">Filtros aquí</div>
        </div>
      </div>

      <div className="container">
        <div className="col text-center shadow-none p-3 mb-5 bg-light border rounded-3">
          <tbody className="text-center table-bordered">
            {experiencias.map((item, index) => {
              return (
                <tr key={index}>
                  <td width="10%">{item.id}</td>
                  <td width="20%">{item.nombre}</td>
                  <td width="20%">{item.descripcion}</td>
                  <td width="20%">{item.fecha_inicio}</td>
                  <td width="20%">{item.fecha_fin}</td>
                </tr>
              );
            })}
          </tbody>
        </div>
      </div>
    </Fragment>
  );
}
