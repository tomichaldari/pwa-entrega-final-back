const mongoose = require('mongoose');

require('dotenv').config({path:'variables.env'});

const conectarDB = async () => {
    try {

        await mongoose.connect(process.env.DB_MONGO, {
            
        });
        console.log("conectado a MongoDB");
        
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar BD');
        
    }
}

module.exports = conectarDB;