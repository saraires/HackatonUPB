import React, { Fragment, useState, useEffect } from "react";
import Axios from "../axios/axios";

export default function HospedajesPage() {
  

  var arrprovi = [
    {id:1122,atributos: ["wifi", "lavadora"]},
    {id:1133,atributos: ["cocina", "lavadora", "aire"]},
    {id:1144,atributos: ["aire", "lavadora"]},
    {id:1155,atributos: ["parqueadero", "aire"]}
  ]

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
            var idid = arrprovi[i].id
            var siono = arrfinal.find( datoid => datoid.id === idid )
            console.log(siono)
            
            arrfinal.push(arrprovi[i])
          }
        }
      }
    }
    console.log(arrfinal)
  }
  var prueba = 678678
  
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
        <div className="col text-center shadow-none p-3 mb-5 bg-light border rounded-3"></div>
      </div>
    </Fragment>
  );
}
