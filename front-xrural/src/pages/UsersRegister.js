import React, { Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "../axios/axios";
import swal from 'sweetalert2';
import { saveToLocal } from "../functions/localstorage";
import { useForm } from "react-hook-form";


export default function UsersRegister() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data);
    axios.post(`/singup`, {
      nombre: data.nombre,
      correo: data.correo,
      contraseña: data.contraseña,
      rol: 0
    }
    ).then((res) => {
      console.log(res)
      if (res.status === 200) {
        console.log(res)
        const token = res.data['authToken'];
        const id = res.data['usuarioValido']['_id'];

        saveToLocal("id", id);
        saveToLocal('authtoken', token);

        swal.fire({
          title: "Registrado con éxito!",
          icon: "success",
          confirmButtonText: "¡Entendido!",
          confirmButtonColor: "#F8BF00",
        })
        navigate("/");
      } else {
        swal.fire({
          title: "¡No pudimos crear tu usuario!",
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
        <h1>Registro</h1>
        <form className="col shadow-none p-3 mb-5 bg-light border rounded-3" onSubmit={handleSubmit(onSubmit)} >
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" {...register('correo', { required: true, minLength: 7 })} />
            <label for="floatingEmail" className="form-label">
              Correo electrónico
            </label>
          </div>
            {errors.correo && errors.correo.type === "required" && <p style={{ color: 'red' }}>No puedes dejar vacio este campo</p>}
            {errors.correo && errors.correo.type === "minLength" && <p style={{ color: 'red' }}>¡Tu correo no es valido!</p>}
          
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingNombre" placeholder="Nombre" {...register('nombre', { required: true, minLength: 3 })} />
            <label for="floatingNombre" className="form-label">
              Nombre
            </label>
          </div>
          {errors.nombre && errors.nombre.type === "required" && <p style={{ color: 'red' }}>No puedes dejar vacio este campo</p>}
          {errors.nombre && errors.nombre.type === "minLength" && <p style={{ color: 'red' }}>¡Tu nombre es muy corto!</p>}
          
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPass" placeholder="Clave" {...register('contraseña', { required: true, pattern: (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) })}/>
            <label for="floatingPass" className="form-label">
              Clave
            </label>
          </div>
          {errors.contraseña && errors.contraseña.type === "required" && <p style={{ color: 'red' }}>No puedes dejar vacio este campo</p>}
          {errors.contraseña && errors.contraseña.type === "pattern" && <p style={{ color: 'red' }}>¡Tu contraseña es insegura debe tener al menos un caracter en mayuscula, un número!</p>}
          <button type="submit" className="btn btn-primary mb-3">
            Registrarme
          </button>
        </form>
        <div className="div">
          <NavLink to="/login" className="registro">
            Clic aquí para conectarse
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
}
