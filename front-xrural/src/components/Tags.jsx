import React from 'react';
//import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import Categorias from './Categorias';
import Atributos from './Atributos';

const Tags = ({categoria}) => {

    const [Chekeados, setChekeados] = useState(false);
    const [Back, setBack] = useState(false);
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

    function back(){
        setBack(true);
    }

    //console.log(Tags);

    if(Chekeados == true ){ 
        return(<Atributos categoria={categoria} tags={Tags}></Atributos>);
    }else if(Back == true){
        return(<Categorias></Categorias>);
    }else if(categoria == "hospedajes"){ 
        return (
                <div id="tags" className="container">
                    <div className="row justify-content-center">
                    <form className="row" onSubmit={handleSubmit(llenarTags)}>
                        <label className="float-start">Selecciona las opciones que más encajen con tu plan </label>
                        <div className='tags'>
                            <input type="checkbox" value="cabaña" className="m-2 btn-check" name="tag1" id="cabaña" autocomplete="off" />
                            <label className="btn btn-outline-success m-3" for="cabaña">Cabañas    <img src="https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg" height="50px" width="50px" /></label>

                            <input type="checkbox" value="camping" class="m-2 btn-check" name="tag2" id="camping" autocomplete="off" />
                            <label class="btn btn-outline-success m-3" for="camping">Camping  <img src="https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg" height="50px" width="50px" /></label>

                            <input type="checkbox" value="finca" class="m-2 btn-check" name="tag3" id="finca" autocomplete="off" />
                            <label class="btn btn-outline-success m-3" for="finca">Alquilar finca  <img src="https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg" height="50px" width="50px" /></label>

                            <input type="checkbox" value="glamping" class="m-2 btn-check" name="tag4" id="glamping" autocomplete="off" />
                            <label class="btn btn-outline-success m-3" for="glamping">Glamping  <img src="https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg" height="50px" width="50px" /></label>

                            <input type="checkbox" value="originales" class="m-2 btn-check" name="tag5" id="originales" autocomplete="off" />
                            <label class="btn btn-outline-success m-3" for="originales">Hospedajes originales  <img src="https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg" height="50px" width="50px" /></label>

                            <input type="checkbox" value="rusticos" class="m-2 btn-check" name="tag6" id="rusticos" autocomplete="off" />
                            <label class="btn btn-outline-success m-3" for="rusticos">Rústicos <img src="https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg" height="50px" width="50px" /></label>

                            <br />
                        </div>
                        <div className='d-flex justify-content-end'>
                            <button type="button" className="btn btn-warning m-2"><i class="fas fa-step-backward"></i> Atrás</button>
                            <button type="submit" className="btn btn-success m-2">Siguiente <i class="fas fa-step-forward"></i></button>
                        </div>
                    </form>
                    </div>
                </div>
        );
    }else{
        return (
            <div id="tags" className="container">
                <div className="row justify-content-center">
                <form className="row" onSubmit={handleSubmit(llenarTags)}>
                    <label className="float-start">Selecciona las opciones que más encajen con tu plan </label>
                    <div className='tags'>
                        <input type="checkbox" value="deporte" className="m-2 btn-check" name="tag1" id="deporte" autocomplete="off" />
                        <label className="btn btn-outline-success m-3" for="deporte">Actividades deportivas    <img src="https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg" height="50px" width="50px" /></label>

                        <input type="checkbox" value="relajacion" class="m-2 btn-check" name="tag2" id="relajacion" autocomplete="off" />
                        <label class="btn btn-outline-success m-3" for="relajacion">Actividades de relajación  <img src="https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg" height="50px" width="50px" /></label>

                        <input type="checkbox" value="educativas" class="m-2 btn-check" name="tag3" id="educativas" autocomplete="off" />
                        <label class="btn btn-outline-success m-3" for="educativas">Actividades educativas  <img src="https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg" height="50px" width="50px" /></label>

                        <input type="checkbox" value="culturales" class="m-2 btn-check" name="tag4" id="culturales" autocomplete="off" />
                        <label class="btn btn-outline-success m-3" for="culturales">Actividades culturales  <img src="https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg" height="50px" width="50px" /></label>

                        <input type="checkbox" value="eventos" class="m-2 btn-check" name="tag5" id="eventos" autocomplete="off" />
                        <label class="btn btn-outline-success m-3" for="eventos">Eventos  <img src="https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg" height="50px" width="50px" /></label>

                        <input type="checkbox" value="parejas" class="m-2 btn-check" name="tag6" id="parejas" autocomplete="off" />
                        <label class="btn btn-outline-success m-3" for="parejas">Actividades en parejas <img src="https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg" height="50px" width="50px" /></label>

                        <input type="checkbox" value="grupales" class="m-2 btn-check" name="tag7" id="grupales" autocomplete="off" />
                        <label class="btn btn-outline-success m-3" for="grupales">Actividades grupales <img src="https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg" height="50px" width="50px" /></label>

                        <br />
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button type="button" onClick={back} className="btn btn-warning m-2"><i class="fas fa-step-backward"></i> Atrás</button>
                        <button type="submit" className="btn btn-success m-2">Siguiente <i class="fas fa-step-forward"></i></button>
                    </div>
                </form>
                </div>
            </div>
        );
    } 
}

export default Tags;