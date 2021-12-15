"use strict"
const { Router } = require('express');
const router = Router();
const Servicio = require('../model/servicios');

// Packetes requeridos para el procesamiento de la imagen
const bodyParser = require('body-parser');
const Multer = require('multer');
const { format } = require('util');
const gc = require('../../config/');
const bucket = gc.bucket('ecoturismo-imagenes') // should be your bucket name

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
router.get('/ofertas', async (req, res) => {
    const { id } = req.body; // id del autor
    try {
        const reservas = await Servicio.find({ autor: id });
        res.send(reservas);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Ver una oferta
router.get('/veroferta', async (req, res) => { // Enviar por params
    const { id } = req.body; // id de la oferta
    try {
        const reserva = await Servicio.findById(id);
        res.send(reserva);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Crear una oferta
router.post('/nuevaoferta', async (req, res) => {
    const { nombre, descripcion, video, departamento, municipio, direccion, detalleUbicacion, costo, categoria, tags, atributos, capacidad, autor } = req.body;
    //¿imagen,
    const oferta = new Servicio({
        nombre,
        descripcion,
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
    try {
        if (!req.file) {
            res.status(400).send('No file uploaded.');
            return;
        }

        const Myfile = req.file;
        const imageUrl = await uploadImage(Myfile);

        res.send(imageUrl);

    } catch (err) {
        console.log(err);
        res.status(400).send(err)
    }
});

// ----------------------   Peticion de imagenes a un bucket en GCP ---------------------

const uploadImage = (file) => new Promise((resolve, reject) => { // ¿Como se envian los archivos?

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
router.put('/editaroferta', async (req, res) => {
    const { id } = req.body; // id de la oferta
    try {
        const actualizarOferta = await Servicio.findByIdAndUpdate(id, { $set: req.body });
        res.send(actualizarOferta);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.delete('/eliminaroferta', async (req, res) => {
    const { id } = req.body;
    try {
        const eliminaroferta = await Servicio.findByIdAndDelete({ _id: id });
        res.json({ message: 'Oferta correctamente eliminada' });
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;