let express = require('express');
let router = express.Router();

const controllerUrl = '/categories'

let service = require('../services/CategoryService');



// GET All Categories "/api/categories"  
router.get(controllerUrl, (req, res, next) => {
    service.findAllCategories(req,res);
});
// POST add a Category "/api/categories"  
router.post(controllerUrl, (req, res, next) => {
    service.saveCategory(req,res);
});

module.exports = router;