//products.controler
const mongoose = require('mongoose');
const Product = require("../models/products/product.model")
const User = require("../models/users/users.mongo")
const ObjectId = mongoose.Types.ObjectId;

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {

        res.status(500).json({message:error.message})

    }
}


const getProduct = async (req, res)=>{
    try {
        if (!ObjectId.isValid(req.params.id)) {
            return res.status(404).json({message:"Invalid product ID"});
        }
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


const postProduct = async (req, res)=>{
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ massage: error.message })
    }
}

const updateProduct = async (req, res) => {
    try {
        if (!ObjectId.isValid(req.params.id)) {
            return res.status(404).json({ message: "Invalid product ID" });
        }
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if (!product) {
            return res.status(404).json({ message: "product not found" })
        }
        res.status(200).json({ message: "product deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const addComment = async (req, res) => {
    try {
        const { userId, text } = req.body;
        
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        product.comments.push({ user: userId, text });
        await product.save();

        res.status(201).json({ message: "Comment added successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addRating = async (req, res) => {
    try {
        const { userId, value } = req.body;
        
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check if the user has already rated the product
        const existingRatingIndex = product.ratings.findIndex(rating => rating.user.equals(userId));
        if (existingRatingIndex !== -1) {
            // Update existing rating
            product.ratings[existingRatingIndex].value = value;
        } else {
            // Add new rating
            product.ratings.push({ user: userId, value });
        }

        await product.save();

        res.status(201).json({ message: "Rating added successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = {getProducts, getProduct, postProduct, updateProduct, deleteProduct, addComment, addRating}
