const { Schema, model } = require('mongoose');

const servicioSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        min: 3
    },
    descripcion: {
        type: String,
        unique: true,
        required: true,
        min: 10
    },
    imagen: {
        type: String,
        required: false
    },
    video:{
        type: String,
        required: false
    },
    departamento: {
        type: String,
        required: true,
    },
    municipio:{
        type: String,
        required: true,
    },
    direccion:{
        type: String,
        required: false,
    },
    detalleUbicacion:{
        type: String,
        required: false
    },
    costo: {
        type: Number,
        required: true,
    },
    categoria:{
        type: String,
        require: true
    },
    tags:{
        type: Array,
        default: []
    },
    atributos:{
        type: Array,
        default: []
    },
    capacidad:{
        type: Number,
        required: true
    }
});

// Categorias --> 1. hospedaje, 2. Experiencias (solo 1)
// Tags --> Deporte, relajacion (tipos de planes) ()
// Atributos --> wifi, baño, pet friendly (varios)

module.exports = Servicio = model('Servicio', servicioSchema);