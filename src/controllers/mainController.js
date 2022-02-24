// Acá nos falta nuestra fuente de datos
const path = require('path');
// Acá nos falta un objeto literal con las acciones para cada ruta
const controlador = {
    index: (req, res)=>{
        res.render('index')},
    detalleMenu: (req, res)=>{
        res.render('detalleMenu')},
}
// Acá exportamos el resultado
module.exports = controlador;