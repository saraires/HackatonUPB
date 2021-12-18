import React from 'react';
//import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import FormPlanes from './FormPlanes';
import Tags from './Tags';

const Atributos = ({categoria,tags}) => {

    const [Chekeados, setChekeados] = useState(false);
    const [Back, setBack] = useState(false);
    const [Atributos, setAtributos] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    let arrayAtributos = [];

    //necesito capturar el array de atributos y mandalos como props
    function llenarAtributos (){
        let checks = document.querySelectorAll(".btn-check");

        checks.forEach((e)=>{
            if(e.checked == true){
                arrayAtributos.push(e.value);
                setChekeados(true);
            }
        });
        setAtributos(arrayAtributos);
    }

    function back(){
        setBack(true);
    }

    if(Chekeados == true ){ //muestra el componente atributos
        console.log(tags);
        return(<FormPlanes categoria={categoria} tags={tags} atributos={Atributos}></FormPlanes>);
    }else if(Back == true){
        return(<Tags categoria={categoria}></Tags>);
    }else if (categoria == "hospedajes"){
        return (
            <div id="atributos" className="container">
                <div>
                    <form onSubmit={handleSubmit(llenarAtributos)}>
                    <div className='row mt-5'>
                        <label className="float-start">¿Cuáles de estos atributos tiene tu plan? </label>
                        <div className='atributos'>
                            <input type="checkbox" value="mascotas" className="btn-check" name="atributo1" id="mascotas" autocomplete="off" />
                            <label className="btn btn-outline-success m-2" for="mascotas">Acepta mascotas</label>
    
                            <input type="checkbox" value="wifi" className="btn-check" name="atributo2" id="wifi" autocomplete="off" />
                            <label className="btn btn-outline-success m-2" for="wifi">Tiene wifi</label>

                            <input type="checkbox" value="bano" class="btn-check" name="atributo4" id="bano" autocomplete="off" />
                            <label class="btn btn-outline-success m-2" for="bano">Tiene baño</label>
                            
                            <input type="checkbox" value="cocina" class="btn-check" name="atributo5" id="cocina" autocomplete="off" />
                            <label class="btn btn-outline-success m-2" for="cocina">Cocina</label>

                            <input type="checkbox" value="aire" class="btn-check" name="atributo6" id="aire" autocomplete="off" />
                            <label class="btn btn-outline-success m-2" for="aire">Aire acondicionado</label>

                            <input type="checkbox" value="parqueadero" class="btn-check" name="atributo6" id="parqueadero" autocomplete="off" />
                            <label class="btn btn-outline-success m-2" for="parqueadero">Parquedero</label>

                            <input type="checkbox" value="lavadora" class="btn-check" name="atributo6" id="lavadora" autocomplete="off" />
                            <label class="btn btn-outline-success m-2" for="lavadora">Lavadora</label>
                            <br />
                        </div>
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
            <div id="atributos" className="container">
                <div>
                    <form onSubmit={handleSubmit(llenarAtributos)}>
                    <div className='row mt-5'>
                        <label className="float-start">¿Cuáles de estos atributos tiene tu plan? </label>
                        <div className='atributos'>
                            <input type="checkbox" value="mascotas" className="btn-check" name="atributo1" id="mascotas" autocomplete="off" />
                            <label className="btn btn-outline-success m-2" for="mascotas">Puedo llevar mi mascota</label>
    
                            <input type="checkbox" value="wifi" className="btn-check" name="atributo2" id="wifi" autocomplete="off" />
                            <label className="btn btn-outline-success m-2" for="wifi">Refrigerio incluido</label>

                            <input type="checkbox" value="bano" class="btn-check" name="atributo4" id="bano" autocomplete="off" />
                            <label class="btn btn-outline-success m-2" for="bano">Souvenir</label>

                            <br />
                        </div>
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

export default Atributos;