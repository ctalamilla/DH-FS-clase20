// Acá nos falta express y el router
const express = require('express');
const path = require('path');
// Aća nos falta traer el controller
const controlador = require('../controllers/mainController')
// Acá definimos las rutas
const router = express.Router();
router.get('/', controlador.index);

router.get('/menu/:idPlato', controlador.detalleMenu);


router.get('/detallePlato/:idPlato', controlador.detallePlato);

// Acá exportamos el resultado
module.exports = router;
