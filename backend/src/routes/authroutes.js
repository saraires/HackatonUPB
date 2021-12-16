"use strict"

const { Router } = require('express');
const router = Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const bodyParser = require('body-parser');
const Multer = require('multer');
const { format } = require('util');
const gc = require('../../config/');
const bucket = gc.bucket('ecoturismo-imagenes')

const { validacionRegistro, validacionLogin } = require('./validationJoi');
const Usuario = require('../model/usuario');
const funcion = require('./ofertadoroutes');

const claveToken = 'RandomSecretKeyParaElTrabajoBonito';

// Validacion del token
function tokenValidation(req, res, next) {
    const token = req.headers.authtoken;
    if (!token) return res.status(401).json('No puedes ingresar');

    try {
        const verificado = jwt.verify(token, claveToken);
        res.status(200)
        next();
    } catch (err) {
        res.status(400).send('Token invalido');
    }
}

// Login
router.post('/login', async (req, res) => {

    // Validacion con Joi
    const { error } = validacionLogin.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Traemos las variables del body
    const { correo, contraseña } = req.body;

    try {
        // El correo existe?
        const usuarioValido = await Usuario.findOne({ correo: correo });
        console.log(usuarioValido)
        if (!usuarioValido) return res.status(400).send('El correo o la contraseña son incorrectos');

        // La contraseña si es la correcta?
        const contraseñaValida = await bcrypt.compare(contraseña, usuarioValido.contraseña);
        if (!contraseñaValida) return res.status(400).send('El correo o la contraseña son incorrectos');

        // JWT
        const token = jwt.sign({ _id: usuarioValido._id }, claveToken);
        res.json({ "usuarioValido": usuarioValido, "authToken": token });

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
        res.json({ "usuarioValido": savedUser, "authToken": token });
    } catch (err) {
        res.status(400).send(err);
    };
});

// Consultar perfil
router.get('/perfil', tokenValidation, async (req, res) => {
    const { id } = req.body;
    try {
        const perfil = await Usuario.find({ _id: id });
        res.send(perfil);
    } catch (err) {
        res.status(400).send(err);
    }
});

// --------------------------- Configuracion de multer para imagenes ----------------------

const multerMid = Multer({
    storage: Multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
    },
});

router.use(multerMid.single('file'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// ----------------------------------------------------------------------------------------

// Subir una imagen de perfil
router.post('/fotoperfil', async (req, res) => {
    try {
        if (!req.file) {
            res.status(400).send('No file uploaded.');
            return;
        }

        const {id} = req.header.id

        const Myfile = req.file;
        const imageUrl = await funcion.uploadImage(Myfile);
        const fotoperfil = await Usuario.findByIdAndUpdate(id, { $set: req.body });

        res.send(imageUrl);

    } catch (err) {
        console.log(err);
        res.status(400).send(err)
    }
});

// Editar datos de usuario
router.put('/editarperfil', tokenValidation, async (req, res) => {
    const { id } = req.body; // id del usuario
    try {
        const actualizarperfil = await Usuario.findByIdAndUpdate(id, { $set: req.body });
        res.send(actualizarperfil);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router