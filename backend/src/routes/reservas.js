"use strict"
const { Router } = require('express');
const router = Router();
const Clientes = require('../model/reservas');
const Servicio = require('../model/servicios');

// Traer todas las ofertas creadas
router.get('/servicio', async (req, res) => {
    try {
        const ofertas = await Servicio.find();
        res.send(ofertas);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Hacer consulta por los filtros mas grandes (hospedaje y experiencia)
router.get('/categoria/:categoria', async (req, res) => {
    const { categoria } = req.params;
    console.log(categoria);
    try {
        const hospedajes = await Servicio.find({ categoria: categoria });
        res.send(hospedajes);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;