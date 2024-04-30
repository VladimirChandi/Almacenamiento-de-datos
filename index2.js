const express = require ('express')

const app = express()

app.get ('/',function (req, res){
 //Envia mensaje de respuesta
 res.send('Hello word')
console.log("El servicio esta corriendo");

});
//2.-Servicio web de tipo get
app.get('/a',function(req,res){
res.send('VOCAL')

});

//3.- Definir con un paramewtro en la url
app.get('/suma/:n1',(req,res)=>{
    const num1=req.params.n1;
    var tot=11+num1;
    res.send(tot)
    
    });

        //4.- Definir con un paramewtro en la url en json
app.get('/suma/:n1',(req,res)=>{
    const num1=parseInt(req.params.n1);
    var tot=11+num1;
    const json={
        resultado:tot
    };

    res.json(jason)
    
    });
    
    //5.- Suma de dos numeros usando parametros Url
    app.get('/suma/:n1/:n2', (req, resp) => {
        const n1 = parseInt(req.params.n1);
        const n2 = parseInt(req.params.n2);
        var suma = n1 + n2;
        resp.send(suma + "");
    });

//6.-Se captura de la url pero no esta definido el parametro
app.get('/nombre',(req,res)=>{
    //Me ayuda a obtener informacion no establecida en la url
const datoObtener=req.query.name;
res.send('Hola'+' '+ datoObtener)

});

//7.---------------------



//SERVICIO DESDE EL PUERTO 3000
app.listen(3000)