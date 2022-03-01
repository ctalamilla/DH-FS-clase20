// Acá nos falta nuestra fuente de datos
const path = require('path');


let platos =[
    {
        idPlato:0,
        nombre: "Carpaccio fresco",
        descripcion: "Entrada Carpaccio de salmón con cítricos",
        descripcionLarga:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nam tempore. Provident laborum obcaecati aut voluptates sequi sint saepe suscipit possimus exercitationem facilis mollitia consectetur, tempore nobis omnis voluptatibus laudantium.",
        precio: " U$S 65.50",
        img:"/images/Carpaccio-de-salmon.jpg"
    }, 
    {
        idPlato:1,
        nombre: "Risotto de berenjena",
        descripcion: "Risotto de berenjena y queso de cabra",
        descripcionLarga:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nam tempore. Provident laborum obcaecati aut voluptates sequi sint saepe suscipit possimus exercitationem facilis mollitia consectetur, tempore nobis omnis voluptatibus laudantium.",
        precio: " U$S 47.00",
        img:"/images/Risotto-berenjena-queso-cabra.jpg"
    },
    {
        idPlato:2,
        nombre: "Mousse de arroz",
        descripcion: "Mousse de arroz con leche y aroma de azahar",
        descripcionLarga:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nam tempore. Provident laborum obcaecati aut voluptates sequi sint saepe suscipit possimus exercitationem facilis mollitia consectetur, tempore nobis omnis voluptatibus laudantium.",
        precio: " U$S 27.50",
        img:"/images/Mousse-de-arroz-con-leche.jpg"
    }, 
    {
        idPlato:3,
        nombre: "Espárragos blancos",
        descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
        descripcionLarga:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nam tempore. Provident laborum obcaecati aut voluptates sequi sint saepe suscipit possimus exercitationem facilis mollitia consectetur, tempore nobis omnis voluptatibus laudantium.",
        precio: " U$S 37.50",
        img:"/images/esparragos.png"
    }, 
]
// Acá nos falta un objeto literal con las acciones para cada ruta
const controlador = {
    index: (req, res)=>{
        res.render('index', {"platos":platos})},   
/*    detalleMenu: (req, res)=>{
        res.render('detalleMenu')},*/
    detalleMenu: (req, res)=>{
        let idPlato = req.params.idPlato;
        res.render('detalleMenu', {"platos":platos[idPlato]})}, 

    detallePlato: (req, res)=>{
            let idPlato = req.params.idPlato;
            res.render('detallePlato', {"platos":platos[idPlato]})}, 
}

// Acá exportamos el resultado
module.exports = controlador;

