//Iniciamos usando el modulo express, el cual representa una funcion.
const express = require('express');
//modulo de path o rutas
const path =require('path');

//almacenamos la respuesta del servidor en una constante.
const app = express();

//Configuracion basica del server Express//Settings
        //configuramos el puerto para hacer uso de la variable de entorno del sistema operativo con el nombre PORT.
app.set('port', process.env.PORT || 4000)
        //
app.set('views', path.join(__dirname,'views'))


//Configuracion de Respuestas o Middlewares
        //urlencoded para transformar todo tipo de ingreso de data en opjeto JSON.
app.use(express.urlencoded({extended:false}));





//Global variables




//Routes 
        //respuesta a la ruta inicial '/' 
        //como parametros request y response 
        app.get('/',(req,res)=>{
            //usando response enviamos un  mensaje
            res.send("hello world");
})



//Static Files
    //hacemos uso de los archivos estaticos en la carpeta public
app.use(express.static(path.join(__dirname,'pubic')));







//exportamos el modulo de arranque del servidor express;
module.exports=app;