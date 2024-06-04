const express = require('express')
const router = express.Router()
const Product = require('../model/product')

router.get('/:productId', async function (req, res) {
    const productId = await req.params.productId
    try {
        foundProduct = await Product.findById(productId)
        return res.json(foundProduct)
    } catch(err) {
        return res.status(422).send({errors: [{title: 'Product error', detail: 'Product not found!'}]})
    }
})

// router.get('/:productId', async function (req, res) {
//     const productId = await req.params.productId
//     foundProduct = await Product.findById(productId)
//     res.json(foundProduct)
// })

router.get('', async function(req, res) {
    foundProducts = await Product.find({})
    res.json(foundProducts)
})

// // 空の時、ok: trueを返す
// router.get('', function(req, res){
//     // 以下、MongoDBのバージョンの関係でfind()にコールバック関数が使用できない
//     Product.find({}, function(err, fouudProducts){
//         res.json(fouudProducts)
//     })

module.exports = router