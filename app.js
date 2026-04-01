//importamos la dependencia
const express = require('express');

//instanciamos nuestra app
const app = express();

//configuramos la ruta raiz
app.get('/',
    (req, res) => res.send("Hola Mundo")
);

//iniciamos el servidor
app.listen(3000, 
    ()=> console.log("Servidor corriendo en el puerto 3000")
);
