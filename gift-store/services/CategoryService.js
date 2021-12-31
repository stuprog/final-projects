mongoose = require('mongoose');

let Category = require('../models/Category');
const { search } = require('../routes/ProductRoutes');


const DIR = './src/images/';

exports.findAllCategories = function (req, res) { // exports public 
    Category.find().then(data => {
        if (data.length) {
            res.status(200).json({
                message: "Categories retrieved successfully!",
                categories: data
            });
        } else {
            res.status(404).json({
                message: "There are no Categories"
            });
        }
    });
}

exports.saveCategory = function (req, res) {
    
    

    let newCategory = new Category({
        title: req.body.title
        
    });

    newCategory.save(newCategory).then(result => {
        console.log("this is the result of a Category", result);

        res.status(201).json({
            message: "Category created successfully!",
            CategoryCreated: {
                _id: result._id,
                title: result.title
                
            }
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    });

}

exports.findCategory = function (req, res) {

    Category.find({title: req.body.category})
        .then(data => {
          if(!data.length){
            let newCategory = new Category({
                title: req.body.category
                
            });
            newCategory.save(newCategory).then(result => {})
          }
        });
}