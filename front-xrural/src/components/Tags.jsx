import React from 'react';
//import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';


const Tags = () => {

    const [Data, setData] = useState(0);
    const [Tag, setTag] = useState(0);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data.categorias);
        if( data.categorias !== null){
            setData(data.categorias);
            
            mostrarTags();
        }
        //console.log(data.categorias);
    }

    const onSubmitTag = dato =>{
        if( dato.tag !== null){
            setTag(dato);
            
            console.log(dato.tag);
            mostrarForm();
        }
        //console.log(data.categorias);
    }

    const mostrarTags = (e) => {
        let divCategorias = document.getElementById("categorias");
        divCategorias.style.display = "none";
        let divTags = document.getElementById("tags");
        divTags.style.display = "block";
        //onSubmit();
    }

    const mostrarForm = (e) => {
        let divForm = document.getElementById("formPlanes");
        divForm.style.display = "block";
        let divTags = document.getElementById("tags");
        divTags.style.display = "none";
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        const { onLoad } = this.props; //capturando la fn del padre que en este caso es sólo la fn que lee los pds desde una API (se encuentra en List y desde allí se invoca al componente ProductsView y se le pasa la fn como propiedad

        let datos = {
            description: this.state.description,
            price: parseInt(this.state.price),
            category: this.state.category,
            qty: parseInt(this.state.qty)
        };

        let options = {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        };

    }


    return (<React.Fragment>
        <div id="categorias" className="container">
            <form className="row" onSubmit={handleSubmit(onSubmit)}>
                <div className="row justify-content-center">
                    <div>
                        <input type="radio" value="hospedajes" class="btn-check m-5" name="categoria" id="hospedajes" autocomplete="off" {...register("categorias")}/>
                        <label class="btn btn-outline-success m-5" for="hospedajes">Hospedajes    <img src="https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg" height="50px" width="50px" /></label>

                        <input type="radio" value="experiencias" class="btn-check" name="categoria" id="experiencias" autocomplete="off" {...register("categorias")}/>
                        <label class="btn btn-outline-success" for="experiencias">Experiencias rurales   <img src="https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg" height="50px" width="50px" /></label>
                        <br />
                    </div>
                </div>
                <div className='float-end'>
                    <button type="submit" className="btn btn-warning">Siguiente</button>
                </div>
            </form>
        </div>

        <div id="tags" className="container">
            <div className="row justify-content-center">
            <form className="row" onSubmit={handleSubmit(onSubmitTag)}>
                <label className="float-start">Selecciona las opciones que más encajen con tu plan </label>
                <div className='tags'>
                    <input type="checkbox" value="deporte" class="btn-check" name="tag" id="deporte" autocomplete="off" />
                    <label class="btn btn-outline-success" for="deporte">Actividades deportivas    <img src="https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg" height="50px" width="50px" /></label>

                    <input type="checkbox" value="relajacion" class="btn-check" name="tag" id="relajacion" autocomplete="off" />
                    <label class="btn btn-outline-success" for="relajacion">Actividades de relajación  <img src="https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg" height="50px" width="50px" /></label>
                    <br />
                </div>
                <div className='float-end'>
                    <button type="submit" className="btn btn-warning">Siguiente</button>
                </div>
            </form>

                <div className='row mt-5'>
                    <label className="float-start">¿Cuáles de estos atributos tiene tu plan? </label>
                    <div className='atributos'>
                        <input type="checkbox" value="mascotas" class="btn-check" name="atributo1" id="mascotas" autocomplete="off" />
                        <label class="btn btn-outline-success" for="mascotas">Acepta mascotas</label>

                        <input type="checkbox" value="wifi" class="btn-check" name="atributo2" id="wifi" autocomplete="off" />
                        <label class="btn btn-outline-success" for="wifi">Tiene wifi</label>

                        <input type="checkbox" value="bano" class="btn-check" name="atributo3" id="bano" autocomplete="off" />
                        <label class="btn btn-outline-success" for="bano">Tiene baño</label>
                        <br />
                    </div>
                </div>
            </div>
            <div className='float-end'>
                <button type="button" className="btn btn-warning">Siguiente</button>
            </div>
        </div>
    </React.Fragment>
    );
}


export default Tags;