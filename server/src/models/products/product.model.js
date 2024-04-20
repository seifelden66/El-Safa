const mongoose = require('mongoose')
const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: ['true', "enter product name"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: false
        }
    },
    {
        timestamps:true
    }
)

const Product = mongoose.model("product", productSchema)
module.exports = Product