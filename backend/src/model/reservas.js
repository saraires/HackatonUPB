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
    }

});

module.exports = Reserva = model('Reserva', reservaSchema);