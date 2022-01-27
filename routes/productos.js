const express = require('express');
const producto = require('../controllers/producto');

const router = express.Router();


// obtiene todos los proyectos
// api/proyectos
router.get('api/productos/all',
    producto.getproducto.all(producto)
   
)



module.exports = router;