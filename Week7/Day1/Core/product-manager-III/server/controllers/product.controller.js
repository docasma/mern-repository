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
// READONE
module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => {
            res.status(200).json(oneSingleProduct)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

// UPDATE
module.exports.updateExistentProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updateProduct => {
            res.json(updateProduct)
        })
        .catch(err => {
            res.json(err)
        })
}



// DELETE
module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
}

