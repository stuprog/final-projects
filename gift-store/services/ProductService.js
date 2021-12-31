mongoose = require('mongoose');

let Product = require('../models/Product');
let CategoryService = require('../services/CategoryService');

const DIR = './src/images/';

exports.findAllProducts = function (req, res) { // exports public 
    Product.find().then(data => {
        console.log(data)
        if (data.length) {
            res.status(200).json({
                message: "Products retrieved successfully!",
                products: data
            });
        } else {
            res.status(404).json({
                message: "There are no products",
            });
        }
    });
}


exports.saveProduct = function (req, res) {
    
        const url = req.protocol + '://' + req.get('host')
        CategoryService.findCategory(req,res);
      
        let newProduct = new Product({
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            quantity: req.body.quantity
            //image: url + '/public/' +req.body.image
        });

        newProduct.save(newProduct).then(result => {
            console.log("this is the result of a product", result);

            res.status(201).json({
                message: "Product created successfully!",
                productCreated: {
                    _id: result._id,
                    name: result.name,
                    price: result.price,
                    category: result.category,
                    quantity: result.quantity,
                }
            })
        }).catch(err => {
            console.log(err),
                res.status(500).json({
                    error: err
                });
        });
    
}

exports.deleteProduct = function (req, res) {
    Product.deleteOne({_id: req.params.id}).then(result => {
        if (result.deletedCount > 0) {
            res.status(204).json({message: "Product deleted successfully!"});
        } else {
            res.status(404).json({message: "Product not found!"});
        }
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    });
}
exports.updateProduct = function (req, res) {
console.log(req.params)
    Product.findOne({_id: req.params.id})
        .then(data => {
          if(data){
              data.name = req.body.name;
              data.price = req.body.price;
              data.quantity = req.body.quantity;
              CategoryService.findCategory(req,res);
              data.category= req.body.category;
              data.updated=  Date.now()
              Product.updateOne(data).then(result =>{
                if (result) {
                    res.status(200).json({message: "Product updated successfully!"});
                } else {
                    res.status(500).json({message: "ERROR"});
                }
              })

          }
        });
}