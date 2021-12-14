const Joi = require('joi');

// Validacion de registro
const validacionRegistro = Joi.object({
    imagen: Joi.string(),
    nombre: Joi.string().min(3).required(),
    correo: Joi.string().min(6).required().email(),
    contraseña: Joi.string().min(6).required(),
    rol: Joi.number().integer().required(),
}).label('registro');

// Validacion de login
const validacionLogin = Joi.object({
    correo: Joi.string().min(6).required().email(),
    contraseña: Joi.string().min(6).required()
}).label('inicio');

module.exports = {validacionRegistro, validacionLogin}
