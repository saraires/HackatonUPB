"use strict";
const { Router } = require("express");
const router = Router();
const Reserva = require("../model/servicios");

// Traer ofertas creadas
router.get("/ofertas", async (req, res) => {
  const { id } = req.body; // id del autor
  try {
    const reservas = await Reserva.find({ autor: id });
    res.send(reservas);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Ver una oferta
router.get("/veroferta", async (req, res) => {
  // Enviar por params
  const { id } = req.body; // id de la oferta
  try {
    const reserva = await Reserva.findById(id);
    res.send(reserva);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Crear una oferta
router.post("/nuevaoferta", async (req, res) => {
  const {
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
    autor,
  } = req.body;
  //imagen,
  const oferta = new Reserva({
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
    autor,
  });

  try {
    const saveOferta = await oferta.save();
    res.send(saveOferta);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Editar oferta
router.put("/editaroferta", async (req, res) => {
  const { id } = req.body; // id de la oferta
  try {
    const actualizarOferta = await Reserva.findByIdAndUpdate(id, { $set: req.body });
    res.send(actualizarOferta);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete("/eliminaroferta", async (req, res) => {
  const { id } = req.body;
  try {
    const eliminaroferta = await Reserva.findByIdAndDelete({ _id: id });
    res.json({ message: "Oferta correctamente eliminada" });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
