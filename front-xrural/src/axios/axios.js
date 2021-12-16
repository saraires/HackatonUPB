import axios from "axios";

export default axios.create({ baseURL: `http://experienciarural.co:3000` });

// import axios from '../axios/axios';
// axios.get('/ruta del back tal cual', {
//    'your code here'
//    'Aqui envias los datos para la peticion o lo que requieras'
// }).then(res => {
//     'haces algo con la respuesta aqui'
// });
