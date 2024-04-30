const express = require ('express')

const app = express()

app.get ('/',function (req, res){
 //Envia mensaje de respuesta
 res.send('Hello word')
console.log("El servicio esta corriendo");

})
//2.-Servicio web de tipo get
app.get('/a',function(req,res){
res.send('VOCAL')

})
//SERVICIO DESDE EL PUERTO 3000
app.listen(3000)