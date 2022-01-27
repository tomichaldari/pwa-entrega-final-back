const mongoose = require('mongoose');
//modelo de la base dde datos....los atributos de la tabla 
const productoSchema = mongoose.Schema({
    id:{
        type: Number,
        trim: true, //saca los espacios del principio y el fin
    },
    name:{
        type: String,
        trim: true, //saca los espacios del principio y el fin
    },
    img:{
        type: String,
        trim: true, //saca los espacios del principio y el fin
    },
    description:{
        type: String,
        trim: true,
    },
    link:{
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('Producto', productoSchema);