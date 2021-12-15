"use strict";
const { Router } = require("express");
const router = Router();
const Servicio = require('../model/servicios');

// Packetes requeridos para el procesamiento de la imagen
const bodyParser = require('body-parser');
const Multer = require('multer');
const { format } = require('util');
const gc = require('../../config/');
const bucket = gc.bucket('ecoturismo-imagenes') // should be your bucket name

// Validacion del token
const jwt = require('jsonwebtoken');
const claveToken = 'RandomSecretKeyParaElTrabajoBonito';
let idUsuario = "";

function tokenValidation(req, res, next) {
    const token = req.headers.authtoken;
    if (!token) return res.status(401).json('No puedes ingresar');

    try {
        const verificado = jwt.verify(token, claveToken);
        console.log(verificado)
        idUsuario = verificado;
        res.status(200)
        next();
    } catch (err) {
        console.log(err)
        res.status(400).send('Token invalido');
    }
}


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

// Traer ofertas creadas
router.get('/ofertas', tokenValidation, async (req, res) => {
    const { id } = req.body; // id del autor
    try {
        const reservas = await Servicio.find({ autor: id });
        res.send(reservas);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Ver una oferta
router.get('/veroferta', tokenValidation, async (req, res) => { // Enviar por params
    const { id } = req.body; // id de la oferta
    try {
        const reserva = await Servicio.findById(id);
        res.send(reserva);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Crear una oferta
router.post('/nuevaoferta', tokenValidation, async (req, res) => {
    const { nombre, descripcion, video, departamento, municipio, direccion, detalleUbicacion, costo, categoria, tags, atributos, capacidad, autor } = req.body;
    const imagen = await uploadImage(req.file);
    const oferta = new Servicio({
        nombre,
        descripcion,
        imagen,
        video,
        departamento,
        municipio,
        direccion,
        detalleUbicacion,
        costo,
        categoria,
        tags,
        atributos,
        capacidad,
        autor
    });

    try {
        const saveOferta = await oferta.save();
        res.send(saveOferta);
    } catch (err) {
        console.log(err)
        res.status(400).send(err);
    }
});

// Subir una imagen
router.post('/imagenoferta', async (req, res) => {
    if (!req.file) {
        res.status(400).send('No file uploaded.');
        return;
    }

    try {
        const Myfile = req.file;
        const imageUrl = await uploadImage(Myfile);

        const actualizarImagen = await Servicio.findByIdAndUpdate(idUsuario.id, {
            $set: {
                imagen: imageUrl
            }
        });

        res.send(imageUrl);

    } catch (err) {
        console.log(err);
        res.status(400).send(err)
    }
});

// ----------------------   Peticion de imagenes a un bucket en GCP ---------------------

const uploadImage = (file) => new Promise((resolve, reject) => { // ¿Como se envian los archivos?
    if (!file) {
        reject('No file uploaded.');
        next();
        return;
    }

    const { originalname, buffer } = file

    const blob = bucket.file(originalname.replace(/ /g, "_"))
    const blobStream = blob.createWriteStream({
        resumable: false
    })
    blobStream.on('finish', () => {
        const publicUrl = format(
            `https://storage.googleapis.com/${bucket.name}/${blob.name}`
        )
        resolve(publicUrl)
    })
        .on('error', (err) => {
            reject(`Unable to upload image, something went wrong`)
        })
        .end(buffer)
})

// ----------------------------------------------------------------------------------------

// Editar oferta
router.put('/editaroferta', tokenValidation, async (req, res) => {
    const { id } = req.body; // id de la oferta
    try {
        const actualizarOferta = await Servicio.findByIdAndUpdate(id, { $set: req.body });
        res.send(actualizarOferta);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Eliminar oferta
router.delete('/eliminaroferta', async (req, res) => {
    const { id } = req.body;
    try {
        const eliminaroferta = await Servicio.findByIdAndDelete({ _id: id });
        res.json({ message: 'Oferta correctamente eliminada' });
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = { uploadImage, router }