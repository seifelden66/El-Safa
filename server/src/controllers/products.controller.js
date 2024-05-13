//products.controler
const mongoose = require("mongoose");
const multer = require("multer");
const Product = require("../models/products/product.model");
const User = require("../models/users/users.mongo");

const ObjectId = mongoose.Types.ObjectId;

const getProducts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = 10;

  try {
    const totalCount = await Product.countDocuments();
    const totalPages = Math.ceil(totalCount / pageSize);
    const products = await Product.find({})
      .skip((page - 1) * pageSize)
      .populate("category")
      .limit(pageSize);

    res.status(200).json({
      currentPage: page,
      totalPages: totalPages,
      pageSize: pageSize,
      totalCount: totalCount,
      products: products,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ message: "Invalid product ID" });
    }
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postProduct = async (req, res) => {
  try {
    const { name, quantity, price, category, discount, ...rest } = req.body;

    const uploadedImages = [];
    if (req.files) {
      for (const file of req.files) {
        uploadedImages.push(file.filename);
      }
    }

    // Calculate discounted price
    const originalPrice = price;
    const discountedPrice = price - (price * discount) / 100;

    const productData = {
      name,
      quantity,
      price: discountedPrice, // Update to use discounted price
      originalPrice,
      discount,
      category,
      images: uploadedImages,
      ...rest,
    };
    const product = await Product.create(productData);
    console.log(product);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ message: "Invalid product ID" });
    }
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }
    res.status(200).json({ message: "product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addComment = async (req, res) => {
  try {
    const userId = req.user.id;
    const { text } = req.body;

    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const existingComment = product.comments.find(
      (comment) => comment.user.toString() === userId
    );

    if (existingComment) {
      return res
        .status(400)
        .json({ message: "You have already commented on this product" });
    } else {
      product.comments.push({ user: userId, text });
    }

    await product.save();

    res.status(201).json({ message: "Comment added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addRating = async (req, res) => {
  try {
    const userId = req.user.id;
    const { value } = req.body;

    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const existingRating = product.ratings.find(
      (rating) => rating.user.toString() === userId
    );

    if (existingRating) {
      return res
        .status(400)
        .json({ message: "You have already rated this product" });
    } else {
      product.ratings.push({ user: userId, value });
    }

    await product.save();

    res.status(201).json({ message: "Rating added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTopRatedProducts = async (req, res) => {
  try {
    const topRatedProducts = await Product.find({})
      .sort({ "ratings.value": -1 })
      .limit(5);
    res.status(200).json(topRatedProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const searchProduct = async (req, res) => {
  const searchQuery = req.query.search;
  try {
    const searchResult = await Product.aggregate([
      {
        $search: {
          index: "productSearch",
          text: {
            query: searchQuery,
            path: "name",
          },
        },
      },
    ]);
    res.status(200).json(searchResult);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

async function httpLatestProducts(req, res) {
  try {
    const latestAdded = await Product.find().sort({ createdAt: -1 }).limit(2);
    res.status(200).json(latestAdded);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getProducts,
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
  addComment,
  addRating,
  getTopRatedProducts,
  searchProduct,
  httpLatestProducts,
};
