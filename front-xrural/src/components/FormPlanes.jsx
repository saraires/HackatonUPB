import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
// import './subirPlanes.css';
import Swal from "sweetalert2";

export default function FormPlanes(categoria, tags, atributos) {
  const [Checkeados, setCheckeados] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setCheckeados(data);
    //enviarDatos();
  };

  let enviarDatos = (e) => {
    e.preventDefault();
    //console.log(Checkeados);

    let datos = {
      tags: categoria.tags,
      atributos: categoria.atributos,
      nombre: Checkeados.nombre,
      descripcion: Checkeados.descripcion,
      video: Checkeados.video,
      departamento: Checkeados.departamento,
      municipio: Checkeados.municipio,
      direccion: Checkeados.direccion,
      ubicacion: Checkeados.ubicacion,
      costo: parseInt(Checkeados.precio),
      categoria: categoria.categoria,
      capacidad: parseInt(Checkeados.capacidad),
      autor: "",
    };

    let options = {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    /* let status=addProd(options);//la API
        status.then((data)=>{
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: data.status,
                showConfirmButton: false,
                timer: 1500
            });
            onLoad();
        }); */
  };

  return (
    <div className="container">
      <form id="formPlanes" className="row" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-12">
          <label className="float-start mt-4" htmlFor="nombre">
            Elige un título para tu plan
          </label>
          <input
            name="nombre"
            className="form-control"
            type="text"
            {...register("nombre", { required: true, maxLegth: 100 })}
          />
          {errors.nombre && (
            <div className="alert alert-danger" role="alert">
              El campo es requerido
            </div>
          )}

          <label className="float-start mt-4" htmlFor="video">
            Si quieres compartir un video de youtube, pega el link!
          </label>
          <input nombre="video" className="form-control" type="text" />

          <label className="float-start mt-4" htmlFor="descripcion">
            Cuéntanos lo que incluye el plan
          </label>
          <textarea
            name="descripcion"
            className="form-control"
            type="text"
            cols="40"
            rows="5"
            {...register("descripcion", { required: true, maxLegth: 1000 })}
          />
          {errors.descripcion && (
            <div className="alert alert-danger" role="alert">
              El campo es requerido
            </div>
          )}

          <label className="float-start mt-4" htmlFor="departamento">
            En qué departamento se encuentra
          </label>
          <input
            name="departamento"
            className="form-control"
            type="text"
            {...register("departamento", { required: true, maxLegth: 50 })}
          />
          {errors.departamento && (
            <div className="alert alert-danger" role="alert">
              El campo es requerido
            </div>
          )}

          <label className="float-start mt-4" htmlFor="municipio">
            En qué municipio se encuentra
          </label>
          <input
            name="municipio"
            className="form-control"
            type="text"
            {...register("municipio", { required: true, maxLegth: 50 })}
          />
          {errors.municipio && (
            <div className="alert alert-danger" role="alert">
              El campo es requerido
            </div>
          )}

          <label className="float-start mt-4" htmlFor="direccion">
            Si el lugar que ofreces tiene dirección, escribela aquí
          </label>
          <input
            name="direccion"
            className="form-control"
            type="text"
            {...register("direccion", { required: true, maxLegth: 100 })}
          />
          {errors.direccion && (
            <div className="alert alert-danger" role="alert">
              El campo es requerido
            </div>
          )}

          <label className="float-start mt-4" htmlFor="detalleUbicacion">
            Si el lugar que ofreces no cuenta con dirección, dale a tus visitantes indicaciones sobre cómo llegar
          </label>
          <input
            name="detalleUbicacion"
            className="form-control"
            type="text"
            {...register("detalleUbicacion", { required: true, maxLegth: 100 })}
          />
          {errors.detalleUbicacion && (
            <div className="alert alert-danger" role="alert">
              El campo es requerido
            </div>
          )}

          <label className="float-start mt-4" htmlFor="capacidad">
            ¿Para cuántas personas tiene capacidad?
          </label>
          <input
            name="capacidad"
            className="form-control"
            type="number"
            {...register("capacidad", { required: true, maxLegth: 20 })}
          />
          {errors.capacidad && (
            <div className="alert alert-danger" role="alert">
              El campo es requerido
            </div>
          )}

          <label className="float-start mt-4" htmlFor="precio">
            ¿Cuál es el precio del plan?
          </label>
          <input
            name="precio"
            className="form-control"
            type="number"
            {...register("precio", { required: true, maxLegth: 20 })}
          />
          {errors.precio && (
            <div className="alert alert-danger" role="alert">
              El campo es requerido
            </div>
          )}

          {/* <button className='btn btn-success btn-sm' onClick={this.enviarDatos} type="button" >Save!</button> */}
          <input className="btn btn-success btn-sm" type="submit" value="Save!" />
        </div>
      </form>
    </div>
  );
}
