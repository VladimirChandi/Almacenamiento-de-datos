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

//8.- Se captura la url pero el parametro no esta definido suma de dos numeros

app.get('/suma4',(req,res)=>{
//Me ayuda a obtener infomacion no definida.

const num1 = parseInt(req.query.n1);
const num2 = parseInt(req.query.n2);
var sumatot = num1 + num2;
 res.send('Hola'+ ""+sumatot);
});

//9.- Resta sin parametros y jhon
//url http:localhost:3000/restar?n11=20&n22=10
app.get('/resta',(req,res)=>{
    const num1 = parseInt(req.query.n11);
    const num2 = parseInt(req.query.n22);
    var resul = 0;
    if(num1>num2){
     resul=num1-num2;
   
    }else{

        resul=num2-num1;
    } 

     const resultado={total:resul};
     res.json(resultado);
});


//SERVICIO DESDE EL PUERTO 3000
app.listen(3000)