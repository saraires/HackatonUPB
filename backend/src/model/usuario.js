const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    imagen: {
        type: String,
        required: false
    },
    nombre: {
        type: String,
        required: true,
        min: 3
    },
    correo: {
        type: String,
        unique: true,
        required: true,
        min: 10
    },
    contraseña: {
        type: String,
        required: true,
        min: 6,
        max: 300
    },
    rol: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = Usuario = model('Usuario', userSchema);