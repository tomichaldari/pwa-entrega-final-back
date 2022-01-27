const Producto = require('../models/producto');
const c = require('../models/producto');



module.exports={
    all: async function (req, res) {
        //TRAER TODOS LOS PRODUCTOS DE MONGOH
        console.log('entrada /api/producto/all');
        try {
            
            Producto.find().then((products) => {
                res.send(products);
            }).catch((err) => {
                res.status(500).send(err)
            })
            
        } catch (error) {
            console.log(error);
        }
        
    },
    findById: function (req, res) {
        let id = req.params.id;

        Producto.findById(id).then((products) => {
            res.send(products);
        }).catch((err) => {
            res.status(200).send({
                message: 'El producto no existe'
            })
        })
        
    },
 
}








