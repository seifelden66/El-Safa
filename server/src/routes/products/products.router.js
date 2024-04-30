//product.route.js

const express = require("express");

const {
  getProducts,
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
  addRating,
  addComment,
  // upload,
} = require("../../controllers/products.controller");
const { upload } = require("../../services/handleFile");
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", upload.array("image"), postProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.post("/:id/ratings", addRating);
router.post("/:id/comments", addComment);

module.exports = router;
