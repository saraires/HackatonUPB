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
                        <h2>Elige una de estas categorías</h2>
                        <div>
                            <input type="radio" value="hospedajes" className="btn-check m-5" name="categoria" id="hospedajes" autocomplete="off" {...register("categorias")}/>
                            <label className="btn btn-outline-success m-5" for="hospedajes">Hospedajes    <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/308348191.jpg?k=767b22022b0c52e52bb71f030ca1b382266d9eac0b3a76b44dad661233a46a25&o=&hp=1" height="80px" width="80px" /></label>
    
                            <input type="radio" value="experiencias" className="btn-check" name="categoria" id="experiencias" autocomplete="off" {...register("categorias")}/>
                            <label className="btn btn-outline-success" for="experiencias">Experiencias rurales   <img src="https://cotopaxi-travel.com/blog/wp-content/uploads/2019/03/comu2.jpeg" height="80px" width="90px" /></label>
                            <br />
                        </div>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button type="submit" className="btn btn-success m-2">Siguiente <i class="fas fa-step-forward"></i></button>
                    </div>
                </form>
            </div>
        </React.Fragment>
        );
    }
}


export default Categorias;