// Acá nos falta nuestra fuente de datos
const path = require('path');


let platos =[
    {
        nombre: "Carpaccio fresco",
        descripcion: "Entrada Carpaccio de salmón con cítricos",
        precio: " U$S 65.50"
    }, 
    {
        nombre: "Risotto de berenjena",
        descripcion: "Risotto de berenjena y queso de cabra",
        precio: " U$S 47.00"
    },
    {
        nombre: "Mousse de arroz",
        descripcion: "Mousse de arroz con leche y aroma de azahar",
        precio: " U$S 27.50"
    }, 
    {
        nombre: "Espárragos blancos",
        descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
        precio: " U$S 37.50"
    }, 
]
// Acá nos falta un objeto literal con las acciones para cada ruta
const controlador = {
    index: (req, res)=>{
        res.render('index', {"platos":platos})},   
    detalleMenu: (req, res)=>{
        res.render('detalleMenu')}
}

// Acá exportamos el resultado
module.exports = controlador;

/*

            <!--
            <% for (let i=0; platos.lenght; i++){ %>
              
              <h4>
                <%= platos[i].nombre %>
              </h4>
              <p class="ps-text-grey">
                <%= platos[i].desripcion %><%= platos[i].precio %>
              </p>
            <br />
        
            <% } %>
          -->
*/