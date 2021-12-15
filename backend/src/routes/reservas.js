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

// Crear una reserva
router.post('/reservacion', async (req, res) => {
    const { ofertante, cliente, idoferta } = req.body;
    const nuevaReserva = new Clientes({
        ofertante,
        cliente,
        idoferta
    })
    try {
        const saveReserva = await nuevaReserva.save();
        res.send(saveReserva);
    } catch (err) {
        console.log(err)
        res.status(400).send(err);
    }
});

// Consutltar "mis reservas"
router.get('/misreservas', async (req, res) => {
    const { id } = req.body;
    try {
        const reservas = await Servicio.find({ cliente: id });
        res.send(reservas);
    } catch (err) {
        res.status(400).send(err);
    }
});


module.exports = router;