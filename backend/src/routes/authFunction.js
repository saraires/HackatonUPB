// const jwt = require('jsonwebtoken');
// const express = require ('express');
// const app = express();

// function tokenValidation(req, res, next){
//     const { token } = req.body;
//     if (!token) return res.status(401).json('No puedes ingresar');

//     try {
//         const verificado = jwt.verify(token, 'RandomSecretKeyParaElTrabajoBonito');
//         console.log(verificado);
//         next();
//     } catch (err) {
//         res.status(400).send('Token invalido');
//     }
// }

// module.exports = tokenValidation;