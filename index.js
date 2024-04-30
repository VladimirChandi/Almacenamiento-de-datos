
var http=require('http');

var server=http.createServer();

function mensaje(petic,resp){
resp.writeHead(200,{'contet-type':'text/'});
//Escribe el mensaje a presentar
resp.write("Hola Bienvenido al mundo node JS!");
//Da por finalizado el mensaje
resp.end();

}
//Cuando tenga un requrimiento por parte de un cliente 
//Envie a presentar la funcion mensaje
server.on('request',mensaje);
//Cada ves que escuche una peticion puerto 300
server.listen(300,function(){
console.log("se esta ejecutando el servidor");

})
