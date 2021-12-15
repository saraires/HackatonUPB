import React from 'react';
//import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import Categorias from './Categorias';
import Atributos from './Atributos';

const Tags = ({categoria}) => {

    const [Chekeados, setChekeados] = useState(false);
    const [Tags, setTags] = useState([]);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    let arrayTags = [];

    //necesito capturar el array de atributos y mandalos como props
    function llenarTags (){
        let checks = document.querySelectorAll(".btn-check");

        checks.forEach((e)=>{
            if(e.checked == true){
                setChekeados(true);
                arrayTags.push(e.value);
                console.log(arrayTags);
            }
        });
        setTags(arrayTags);
    }

    console.log(Tags);

    if(Chekeados == true ){ //muestra el componente atributos
        return(<Atributos categoria={categoria} tags={Tags}></Atributos>);
    }else{ // muestra el la vista de los tags
        return (
            <React.Fragment>
                <div id="tags" className="container">
                    <div className="row justify-content-center">
                    <form className="row" onSubmit={handleSubmit(llenarTags)}>
                        <label className="float-start">Selecciona las opciones que más encajen con tu plan </label>
                        <div className='tags'>
                            <input type="checkbox" value="deporte" class="btn-check" name="tag1" id="deporte" autocomplete="off" />
                            <label class="btn btn-outline-success" for="deporte">Actividades deportivas    <img src="https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg" height="50px" width="50px" /></label>

                            <input type="checkbox" value="relajacion" class="btn-check" name="tag2" id="relajacion" autocomplete="off" />
                            <label class="btn btn-outline-success" for="relajacion">Actividades de relajación  <img src="https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg" height="50px" width="50px" /></label>
                            <br />
                        </div>
                        <div className='float-end'>
                            <button id="boton" type="submit" className="btn btn-warning">Siguiente</button>
                        </div>
                    </form>
                    </div>
                </div>
            </React.Fragment>
        );
    } 
}

/* let btn = document.getElementById("boton");
let checks = document.querySelectorAll(".btn");

btn.addEventListener('click',function(){
    checks.forEach((e)=>{
        if(e.checked === true){
            console.log(e.value);
        }else{
            console.log("no checkeado");
        }
    });
}); */
export default Tags;