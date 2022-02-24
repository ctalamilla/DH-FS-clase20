// Acá nos falta express y el router
const express = require('express');
const path = require('path');
// Aća nos falta traer el controller
const controlador = require('../controllers/mainController')
// Acá definimos las rutas
const router = express.Router();
router.get('/', controlador.index);

router.get('/detalleMenu', controlador.detalleMenu);
// Acá exportamos el resultado
module.exports = router;
