import React, { Fragment, useState, useEffect } from "react";
import axios from "../axios/axios";

export default function hola() {

    const [list, setList] = useState([]);

    const formulario = () => {
        axios.get("/servicios")
            .then((response) => {
                setList(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setList];

    return (
        <div>
            <div className="input-group">
                <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">enviar</button>
            </div>
        </div>
    )
}