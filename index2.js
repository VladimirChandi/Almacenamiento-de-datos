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
//url http:localhost:3000/resta?n11=20&n22=10
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

//10.- Ejercicio Conejos
// url : http:localhost:3000/conejos?p=3&nPar=5&nCri=3&tMor=20

app.get('/conejos',(req,res)=>{
    var pActual=0,pMuere=0,pTotal=0,numCrias=0,parejas=0;
    //periodo
    const peri=parseInt(req.query.p);
    //número de parejas conejos
    const nParejas=parseInt(req.query.nPar);
    //número de crías
    const nCrias=parseInt(req.query.nCri);
    //tasa de Mortalidad
    const tMort=parseInt(req.query.tMor);

    for(let i=0;i<=peri;i++){
        if(i==0){
        parejas=nParejas;
        pActual=nParejas*2;
        pMuere=pActual*tMort/100;
        pTotal=pActual-pMuere;}
        else{
            numCrias=nParejas*nCrias;
            pActual+=numCrias;
            pMuere=pActual*tMort/100;
            pTotal=pActual-pMuere;
            parejas=pTotal/2;
        }
        const resultados={pAnual:pActual,
                          pMorir:pMuere,
                          pRestante:pTotal,
                          nParejas:parejas,
                          nCrias:numCrias};
        res.json(resultados);
    }
    

});
//11.- ejercicio 10 Genarando array 

app.get('/conejos', (req, res) => {
    const resultados = [];
    
    const peri = parseInt(req.query.p);
    const nParejas = parseInt(req.query.nPar);
    const nCrias = parseInt(req.query.nCri);
    const tMort = parseInt(req.query.tMor);

    let pActual = nParejas * 2;

    for (let i = 0; i <= peri; i++) {
        const pMuere = pActual * tMort / 100;
        const pTotal = pActual - pMuere;
        const parejas = pTotal / 2;
        const numCrias = nParejas * nCrias;

        resultados.push({
            pAnual: pActual,
            pMorir: pMuere,
            pRestante: pTotal,
            nParejas: parejas,
            nCrias: numCrias
        });

        pActual = pTotal + numCrias;
    }

    res.json(resultados);
});



//SERVICIO DESDE EL PUERTO 3000
app.listen(3000)