import React, { Fragment } from "react";
import axios from "../axios/axios";
import { useState, useEffect } from "react";

export default function HospedajesPage() {

  const [orden, setOrden] = useState([]);

    useEffect(() => {
        axios.get('/categoria/hospedaje')
            .then((res) => {
                setOrden(res.data);
            });
    }, []);

  var arrprovi = orden

  var arrpreferencias=[]
  var arrfinal = arrprovi

  function preferencias(event) {
    const valor = event.target.value
    if (event.target.checked){
      arrpreferencias.push(valor)
    }
    else{
      let identificador = arrpreferencias.indexOf(valor)
      arrpreferencias.splice(identificador, 1)
    }
    arrfinal = []
    console.log(arrpreferencias)
    for (var k=0;k<arrpreferencias.length;k++){
      var prefesolas=arrpreferencias[k]
      console.log(prefesolas)
      for (var i=0;i<arrprovi.length;i++){
        var atribs = arrprovi[i].atributos
        for(var j=0;j<atribs.length;j++){
          var unoauno = atribs[j]
          if (unoauno===prefesolas){            
            arrfinal.push(arrprovi[i])
          }
        }
      }
    }
    console.log(arrfinal)
  }
  return (
    <Fragment>
      <div className="container">
        <h1>Hospedajes</h1>
        <div className="row">
          <div className="col border rounded-3 m-3 text-center shadow-none p-3 mb-5">
          <label>Wifi</label>
            <input type="checkbox" value="wifi" name="o1" id="a" onChange={preferencias}/> 
            <label>Cocina</label>
            <input type="checkbox" value="cocina" name="o2" id="b" onChange={preferencias}/>
            <label>Aire Acondicionado</label>
            <input type="checkbox" value="aire" name="o3" id="c" onChange={preferencias}/>
            <label>Parqueadero</label>
            <input type="checkbox" value="parqueadero" name="o4" id="d" onChange={preferencias}/>
            <label>Lavadora</label>
            <input type="checkbox" value="lavadora" name="o5" id="e" onChange={preferencias}/>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="col text-center shadow-none p-3 mb-5 bg-light border rounded-3">
        <tbody className="text-center table-bordered" >
                        {orden.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td width="10%">{item.nombre}</td>
                                    <td width="10%">{item.descripcion}</td>
                                    <td width="10%">{item.departamento}</td>
                                    <td width="10%">{item.municipio}</td>
                                    <td width="10%">{item.direccion}</td>
                                    <td width="10%">{item.detalleUbicacion}</td>
                                </tr>
                            )
                        })}
                    </tbody>
        </div>
      </div>
    </Fragment>
  );
}
