const express = require('express');
require('dotenv').config();
const cors = require('cors');
const conectarDB = require('./db/mongoose');


//Crear el servidor
const app = express();

// base de Datos
conectarDB();

const PORT = process.env.PORT || 4000 


//cors
app.use(cors())


//Lectura y parseo del body
app.use( express.json() );


//rutas



// Escuchar peticiones
// app.listen( process.env.PORT, () => {
    //     console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
    // });
    
    
    
    
//Llamada a al archivo que maneja las rutas
const indexRouter = require('./routes/index')
    
    
    

app.use('/', indexRouter );


app.listen(PORT, () =>{
    console.log(`Server escuchando en PORT: ${PORT}`);
});


