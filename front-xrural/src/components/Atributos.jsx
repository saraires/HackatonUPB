import React from 'react';
//import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import FormPlanes from './FormPlanes';

const Atributos = ({categoria,tags}) => {

    const [Chekeados, setChekeados] = useState(false);
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

    if(Chekeados == true ){ //muestra el componente atributos
        console.log(tags);
        return(<FormPlanes categoria={categoria} tags={tags} atributos={Atributos}></FormPlanes>);
    }else{
        return (<React.Fragment>
            {
                console.log(categoria+" desde atributos")
            }
            <div id="atributos" className="container">
                <div>
                    <form onSubmit={handleSubmit(llenarAtributos)}>
                    <div className='row mt-5'>
                        <label className="float-start">¿Cuáles de estos atributos tiene tu plan? </label>
                        <div className='atributos'>
                            <input type="checkbox" value="mascotas" class="btn-check" name="atributo1" id="mascotas" autocomplete="off" />
                            <label class="btn btn-outline-success" for="mascotas">Acepta mascotas</label>
    
                            <input type="checkbox" value="wifi" class="btn-check" name="atributo2" id="wifi" autocomplete="off" />
                            <label class="btn btn-outline-success" for="wifi">Tiene wifi</label>
    
                            <input type="checkbox" value="bano" class="btn-check" name="atributo3" id="bano" autocomplete="off" />
                            <label class="btn btn-outline-success" for="bano">Tiene baño</label>

                            <input type="checkbox" value="bano" class="btn-check" name="atributo4" id="bano" autocomplete="off" />
                            <label class="btn btn-outline-success" for="bano">Tiene baño</label>
                            
                            <input type="checkbox" value="cocina" class="btn-check" name="atributo5" id="cocina" autocomplete="off" />
                            <label class="btn btn-outline-success" for="cocina">Cocina</label>

                            <input type="checkbox" value="aire" class="btn-check" name="atributo6" id="aire" autocomplete="off" />
                            <label class="btn btn-outline-success" for="aire">Aire acondicionado</label>

                            <input type="checkbox" value="parqueadero" class="btn-check" name="atributo6" id="parqueadero" autocomplete="off" />
                            <label class="btn btn-outline-success" for="parqueadero">Parquedero</label>

                            <input type="checkbox" value="lavadora" class="btn-check" name="atributo6" id="lavadora" autocomplete="off" />
                            <label class="btn btn-outline-success" for="lavadora">Lavadora</label>
                            <br />
                        </div>
                    </div>
                    <div className='float-end'>
                        <button type="submit" className="btn btn-warning">Siguiente</button>
                    </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
        );
    }
}

export default Atributos;