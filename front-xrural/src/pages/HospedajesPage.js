import React, { Fragment, useState, useEffect } from "react";
import Axios from "../axios/axios";

export default function HospedajesPage() {

  const arrpreferencias=[]

  function preferencias(event) {
    const valor = event.target.value
    if (event.target.checked){
      arrpreferencias.push(valor)
    }
    else{
      let identificador = arrpreferencias.indexOf(valor)
      arrpreferencias.splice(identificador, 1)
    }
    console.log(arrpreferencias)
  }
  const [list, setList] = useState([]);
  useEffect(() => {
    Axios.get("/servicios")
      .then((response) => {
        setList(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setList]);
  return (
    <Fragment>
      <div className="container">
        <h1>Hospedajes</h1>
        <div className="row">
          <div className="col border rounded-3 m-3 text-center shadow-none p-3 mb-5">
            <label>Wifi</label>
            <input type="checkbox" value="1" name="o1" id="a" onChange={preferencias}/> 
            <label>Cocina</label>
            <input type="checkbox" value="2" name="o2" id="b" onChange={preferencias}/>
            <label>Aire Acondicionado</label>
            <input type="checkbox" value="3" name="o3" id="c" onChange={preferencias}/>
            <label>Parqueadero</label>
            <input type="checkbox" value="4" name="o4" id="d" onChange={preferencias}/>
            <label>Lavadora</label>
            <input type="checkbox" value="5" name="o5" id="e" onChange={preferencias}/>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="col text-center shadow-none p-3 mb-5 bg-light border rounded-3">
        
        </div>
      </div>
    </Fragment>
  );
}
