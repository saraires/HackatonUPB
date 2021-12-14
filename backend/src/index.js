"use strict"

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const cors = require('cors');

const authRoute = require('./routes/authroutes');
const ofertado = require('./routes/ofertadoroutes')

// Configuracion
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use('/', authRoute);
app.use('/', ofertado);

// Conexión a la base de datos (cluster de Mongo)
mongoose.connect(
    'mongodb+srv://SaraiRes:1234@cluster0.5v507.mongodb.net/ecoturismo?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
    () => console.log('Estas conectado a la base de datos')
);

app.listen(5001, () => console.log('Servidor corriendo en el puerto 5001'));