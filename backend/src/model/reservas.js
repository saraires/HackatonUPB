const { Schema, model } = require('mongoose');

const reservaSchema = new Schema({
    ofertante:{
        type: String,
        required: true
    },
    cliente:{
        type: String,
        required: true
    },
    idoferta:{
        type: String,
        required: true
    },
    capacidad: {
        type: Number,
        required: true
    },
    fecha:[
        {
            fechaInicio:{
                type: Date,
                required: true
            },
            fechaFin: {
                type: Date,
                required: true,
                default: Date.now
            }
        }
    ]

});

module.exports = Reserva = model('Reserva', reservaSchema);