import React, { Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "../axios/axios";
import swal from 'sweetalert2';
import { saveToLocal } from "../functions/localstorage";
import { useForm } from "react-hook-form";

export default function UsersPage() {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  
  const onSubmit = data => {
    console.log(data);
    axios.post(`/login`, {
      correo: data.correo,
      contraseña: data.contraseña
    }
    ).then((res) => {
      if (res.status === 200) {
        console.log(res)
        const token = res.data['authToken'];
        const id = res.data['usuarioValido']['_id'];

        saveToLocal("id", id);
        saveToLocal('authtoken', token);

        swal.fire({
          title: "Logueado con éxito!",
          icon: "success",
          confirmButtonText: "¡Entendido!",
          confirmButtonColor: "#F8BF00",
        })
        navigate("/");
      } else {
        swal.fire({
          title: "¡No pudimos iniciar tu sesión!",
          text: "Revisa de nuevo tu información",
          icon: "error",
          confirmButtonText: "¡Entendido!",
          confirmButtonColor: "#F8BF00",
        });
      }
    }).catch((err) => {
      console.log(err);
    });
  }
  return (
    <Fragment>
      <div className="container">
        <h1>Login</h1>
        <form className="col shadow-none p-3 mb-5 bg-light border rounded-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" {...register('correo', { required: true, minLength: 7 })} />
            <label htmlFor="floatingInput">Correo electrónico</label>
            {errors.correo && errors.correo.type === "required" && <p style={{ color: 'red' }}>No puedes dejar vacio este campo</p>}
            {errors.correo && errors.correo.type === "minLength" && <p style={{ color: 'red' }}>¡Tu correo no es válido!</p>}
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" {...register('contraseña', { required: true, minLength: 8 })} />
            <label htmlFor="floatingPassword">Clave</label>
            {errors.contrasena && errors.contrasena.type === "required" && <p style={{ color: 'red' }}>No puedes dejar vacio este campo</p>}
            {errors.contrasena && errors.contrasena.type === "minLength" && <p style={{ color: 'red' }}>¡Tu contraseña debe tener minimo 8 caracteres!</p>}
          </div>
          <button type="subNamemit" className="btn btn-primary mb-3">
            Conectarme
          </button>
        </form>
        <div className="div">
          <NavLink to="/registro" className="registro">
            Clic aquí para registrarse
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
}
