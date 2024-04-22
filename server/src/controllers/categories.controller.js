const mongoose = require('mongoose');
const Category = require('../models/categories/categories.model')
const ObjectId = mongoose.Types.ObjectId;
const Product = require('../models/products/product.model');

const getCategories = async (req, res) => {
    try {
        const categories = await Category.find()
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json({ massage: error.message })
    }
}


const getCategory = async (req, res) => {
    try {
        if (!ObjectId.isValid(req.params.id)) {
            return res.status(404).json({ message: "Invalid category ID" });
        }
        const category = await Category.findById(req.params.id)
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const postCategory= async (req, res) => {
    try {
        const category = await Category.create(req.body)
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json({ massage: error.message })
    }
}

const updateCategory = async (req, res) => {
    try {
        if (!ObjectId.isValid(req.params.id)) {
            return res.status(404).json({ message: "Invalid category ID" });
        }
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        if (!ObjectId.isValid(categoryId)) {
            return res.status(404).json({ message: "Invalid category ID" });
        }

        // Check if there are any products associated with this category
        const productCount = await Product.countDocuments({ category: categoryId });
        if (productCount > 0) {
            // If there are products, prevent deletion
            return res.status(400).json({ message: "Cannot delete category because it has associated products" });
        }

        const category = await Category.findByIdAndDelete(categoryId);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getCategories, getCategory, postCategory, updateCategory, deleteCategory }
