//models/products/product.model.js
const mongoose = require('mongoose')
const Category = require('../categories/categories.model');
const productSchema = mongoose.Schema(

    {
        name: {
            type: String,
            required: ['true', "enter product name"]
        },
        short_desc: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
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
        price: {
            type: Number,
            required: true,
          },
          originalPrice: {
            type: Number,
            required: true,
          },
          discount: {
            type: Number,
            default: 0, 
          },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: false
        },
        comments: [{
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            text: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            }
        }],
        ratings: [{
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            value: {
                type: Number,
                required: true,
                min: 1,
                max: 5
            },
            date: {
                type: Date,
                default: Date.now
            }
        }]
    },
    {
        timestamps: true
    }
)


const Product = mongoose.model("product", productSchema)
module.exports = Product