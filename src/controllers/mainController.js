// Acá nos falta nuestra fuente de datos
const path = require('path');
// Acá nos falta un objeto literal con las acciones para cada ruta
const controlador = {
    index: (req, res)=>{
        res.sendFile(path.join(__dirname,'../views/index.html'))},
    detalleMenu: (req, res)=>{
        res.sendFile(path.join(__dirname,'../views/detalleMenu.html'))},
}
// Acá exportamos el resultado
module.exports = controlador;