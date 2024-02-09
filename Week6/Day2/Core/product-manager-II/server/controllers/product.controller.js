const Product= require("../models/product.model")

// CREATE
module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then((oneProduct) => {
            console.log("CREATED PRODUCT", oneProduct)
            res.status(200).json(oneProduct)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}
// READ ALL
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            console.log(req.body)
            console.log(allProducts)
            res.status(200).json(allProducts)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => {
            res.status(200).json(oneSingleProduct)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

