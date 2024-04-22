const mongoose = require('mongoose');
const Category = require('../models/categories/categories.model')
const ObjectId = mongoose.Types.ObjectId;

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

const deleteCategory= async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id)
        if (!category) {
            return res.status(404).json({ message: "category not found" })
        }
        res.status(200).json({ message: "category deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { getCategories, getCategory, postCategory, updateCategory, deleteCategory }
