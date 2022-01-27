var express = require('express');
var router = express.Router();

const productoController = require('../controllers/producto');


//importacion de controladores



//Definicion de rutas para la API

router.get('/api/producto/all', productoController.all)

router.get('/api/producto/:id', productoController.findById)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
