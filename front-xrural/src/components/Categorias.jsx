import React from 'react';
//import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import Tags from './Tags';


const Categorias = () => {

    const [Data, setData] = useState(0);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        if( data.categorias !== null){
            setData(data.categorias);            
        }
    }

    if(Data === "hospedajes" || Data=== "experiencias"){
        return(<Tags categoria={Data}></Tags>);
    }else{
        return (<React.Fragment>
            <div id="categorias" className="container">
                <form className="row" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row justify-content-center">
                        <div>
                            <input type="radio" value="hospedajes" className="btn-check m-5" name="categoria" id="hospedajes" autocomplete="off" {...register("categorias")}/>
                            <label className="btn btn-outline-success m-5" for="hospedajes">Hospedajes    <img src="https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg" height="50px" width="50px" /></label>
    
                            <input type="radio" value="experiencias" className="btn-check" name="categoria" id="experiencias" autocomplete="off" {...register("categorias")}/>
                            <label className="btn btn-outline-success" for="experiencias">Experiencias rurales   <img src="https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg" height="50px" width="50px" /></label>
                            <br />
                        </div>
                    </div>
                    <div className='float-end'>
                        <button type="submit" className="btn btn-warning">Siguiente</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
        );
    }
}


export default Categorias;