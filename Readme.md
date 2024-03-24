# Notes App 
![Notes logo](./img/apple-notes-hero.jpg)

## Usando MongoDb Express Nodejs
>[!NOTE]
> Finalidad: Usar los conocimientos desarrollados en Express Nodejs Mongodb.
---
* Modulos en uso:
    - Express
    - Connect-flash
    - bcryptjs
    - express-handlebars
    - express-session
    - method-override
    - mongoose
    - passport
    - passport-local

* Modulos de **Desarrollo**
    - dotenv : Implementacion de varibles de entorno.
    - nodemon : Hot reload coding.
    - npm-check-updates : verificacion de archivos **NPM**.
---

* Clasificacion de archivos:
    * `Index.js`
        1. Archivo dedicado a la implementacion del codigo fuente de la applicacion.
    * `Server.js`
        1. Archivo dedicado a la implementacion de codigo dirigido al servidor usando Express y sus modulos complementarios.
     * `database.js`
        1. Archivo dedicado a la implementacion de codigo dedicado a interactuar con la Base de Datos **MongoDB**.
    * `CONFIG` 
        1. Carpeta dedicada para la configuracion de la App.
    * `CONTROLLERS` 
        1. Carpeta dedicada a almacenar funciones que ocurren con la interaccion de la App.
    * `HELPERS` 
        1. Carpeta dedicada para funciones desde la vista del usario //handlebars.
    * `MODELS`
        1. Carpeta dedicada para los modelos de datos usados en los esquermas para la base de datos.
    * `PUBLIC`
        1. Carpeta dedicada para archivos estaticos (HTML,CSS, FONTS...).
    * `ROUTES`
        1. Carpeta dedicada para almacenar las rutas o urls que usaremos.
    * `VIEWS`
        1. Carpeta dedicada para guardar los archivos de handlebars.
