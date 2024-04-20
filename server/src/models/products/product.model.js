<<<<<<< HEAD
//models/products/product.model.js
const mongoose = require('mongoose')
const Category = require('../categories/categories.model'); 
=======
const mongoose = require('mongoose')
>>>>>>> d37ef13 (made products simple crud api)
const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: ['true', "enter product name"]
        },
        quantity: {
            type: Number,
<<<<<<< HEAD
            default: 1
=======
            required: true,
            default: 0
>>>>>>> d37ef13 (made products simple crud api)
        },
        price: {
            type: Number,
            required: true,
        },
<<<<<<< HEAD
        images: [{
            type: String,
            required: false
        }],
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: false
        }/*  */
=======
        image: {
            type: String,
            required: false
        }
>>>>>>> d37ef13 (made products simple crud api)
    },
    {
        timestamps:true
    }
)

const Product = mongoose.model("product", productSchema)
module.exports = Product