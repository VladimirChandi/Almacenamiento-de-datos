const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // Para analizar cuerpos JSON en solicitudes
app.use(bodyParser.urlencoded({ extended: true })); // Para analizar cuerpos urlencoded

let listaNombres = [];
 listaNombres = [];
 let secuencia = 1; // Inicializa secuencia fuera del manejador de ruta

 app.all('/hola', (req, res) => {
     const method = req.method.toLowerCase();
 
     if (method === 'post') {
         const id = secuencia++; // Incrementa secuencia después de asignar el ID
         const nombre = req.body.nombre; // Obtener nombre desde el cuerpo de la solicitud
         console.log('Nombre recibido:', nombre);
         if (nombre) { // Asegurarse de que el nombre no esté vacío
             listaNombres.push({ id: id, name: nombre });
             // Guardar listaNombres en un archivo JSON
             fs.writeFileSync('nombres.json', JSON.stringify(listaNombres));
             res.send({
                 message: 'Se almaceno el nombre',
             });
         } else {
             res.status(400).send({
                 message: 'El campo "nombre" es obligatorio',
             });
         }
    } else if (method === 'get') {
        // Leer nombres desde el archivo JSON si existe
        if (fs.existsSync('nombres.json')) {
            const data = fs.readFileSync('nombres.json');
            listaNombres = JSON.parse(data);
        }
        res.send({
            message: 'Lista de nombres almacenados',
            nombres: listaNombres
        });
    } else if (method === 'put') {
        const num = parseInt(req.query.id); 
        const n = req.query.name || req.body.nombre;
        console.log('ID recibido (PUT):', num);
        console.log('Nombre recibido (PUT):', n);          
        const p = listaNombres.find(f => f.id === num);

        if (p) {
            p.name = n;
            // Actualizar el archivo JSON con la lista actualizada
            fs.writeFileSync('nombres.json', JSON.stringify(listaNombres));
            res.json({
                message: 'Datos actualizados',
                datos: p
            });
        } else {
            res.status(404).send({
                message: 'Nombre no encontrado'
            });
        }
    } else if (method === 'delete') {
        const num = parseInt(req.query.id); 
        const index = listaNombres.findIndex(l => l.id === num);

        if (index !== -1) {
            const deleted = listaNombres.splice(index, 1);
            // Actualizar el archivo JSON con la lista actualizada
            fs.writeFileSync('nombres.json', JSON.stringify(listaNombres));
            res.json({
                message: 'Nombre eliminado',
                datos: deleted
            });
        } else {
            res.status(404).send({
                message: 'Nombre no encontrado'
            });
        }
    } else {
        res.status(405).send({
            message: 'Método no permitido'
        });
    }
});

app.listen(3000, function() {
    console.log("Se está ejecutando el servidor");
});


