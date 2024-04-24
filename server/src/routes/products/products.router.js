//product.route.js

const express = require('express')

const { getProducts , getProduct, postProduct, updateProduct, deleteProduct, addRating, addComment} = require('../../controllers/products.controller')
const router = express.Router()

router.get('/', getProducts)
router.get('/:id', getProduct)
router.post('/',postProduct)
router.put('/:id',updateProduct)
router.delete('/:id', deleteProduct)
router.post('/:id/ratings', addRating)
router.post('/:id/comments', addComment);


module.exports = router