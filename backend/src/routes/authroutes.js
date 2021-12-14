"use strict"
const { Router } = require('express');
const router = Router();
const Usuario = require('../model/usuario');
const { validacionRegistro, validacionLogin } = require('./validationJoi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const claveToken = 'RandomSecretKeyParaElTrabajoBonito';

// Login
router.get('/', async (req, res) => {

    // Validacion con Joi
    const { error } = validacionLogin.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Traemos las variables del body
    const { correo, contraseña } = req.body;

    try {

        // El correo existe?
        const usuarioValido = await Usuario.findOne({ correo: correo });
        if (!usuarioValido) return res.status(400).send('El correo o la contraseña son incorrectos');

        // La contraseña si es la correcta?
        const contraseñaValida = await bcrypt.compare(contraseña, usuarioValido.contraseña);
        if (!contraseñaValida) return res.status(400).send('El correo o la contraseña son incorrectos');

        // JWT
        const token = jwt.sign({ _id: usuarioValido._id }, claveToken);
        res.send({ "usuarioValido": usuarioValido, "authToken": token });

    } catch (err) {
        res.status(400).send(err);
    }
});

// Sing Up
router.post('/singup', async (req, res) => {
    
    // Validacion con Joi
    const { error } = validacionRegistro.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Validar si el correo ya existe
    const emailExistente = await Usuario.findOne({ correo: req.body.correo });
    if (emailExistente) return res.status(400).send('El correo ya existe');

    // Encriptar contraseña
    const salt = await bcrypt.genSalt(10);
    const hashContraseña = await bcrypt.hash(req.body.contraseña, salt);

    // Creacion de usuarios
    const { nombre, correo, imagen, rol } = req.body
    const usuario = new Usuario({
        nombre,
        correo,
        contraseña: hashContraseña,
        imagen,
        rol
    });

    try {
        const savedUser = await usuario.save();
        // JWT
        const token = jwt.sign({ _id: savedUser._id }, claveToken);
        res.send({ "usuarioValido": savedUser, "authToken": token });
    } catch (err) {
        res.status(400).send(err);
    };
});

// Consultar perfil
router.get('/perfil', async (req, res) => {
    const { id } = req.body;
    try {
        const perfil = await Usuario.find({ _id: id });
        res.send(perfil);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Agregar una imagen al usuario --> editar todo el perfil
router.put('/editarimagen', async (req, res) => {
    const { id, imagen } = req.body;
    try {
        const actualizarImagen = await Usuario.findByIdAndUpdate(id, { $set: { 'imagen': imagen } });
        console.log(actualizarImagen);
        res.send(actualizarImagen);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;