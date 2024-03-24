//importamos el modulo asignandolo a la misma variable.
const app =require('./server')
//iniciamos escuchando en el puerto que extraemos desde la configuracion del servidor, para cuando incie el servidor realice la funcion...
app.listen(app.get('port'),()=>{
   console.log("Server on port",app.get('port'))
})