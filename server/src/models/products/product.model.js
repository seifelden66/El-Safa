//models/products/product.model.js
const mongoose = require('mongoose')
const Category = require('../categories/categories.model'); 
const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: ['true', "enter product name"]
        },
        quantity: {
            type: Number,
            default: 1
        },
        price: {
            type: Number,
            required: true,
        },
        images: [{
            type: String,
            required: false
        }],
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: false
<<<<<<< HEAD
        }/*  */
=======
        }
>>>>>>> dc5aaaf5760eb39abd12eca63e5e136819a73707
    },
    {
        timestamps:true
    }
)

const Product = mongoose.model("product", productSchema)
module.exports = Product