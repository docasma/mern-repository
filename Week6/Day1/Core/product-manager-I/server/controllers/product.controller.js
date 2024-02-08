const Product= require("../models/product.model")


module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then((oneProduct) => {
            console.log("CREATED PRODUCT", oneProduct)
            res.json(oneProduct)
        })
        .catch((err) => {
            res.json(err)
        })
}