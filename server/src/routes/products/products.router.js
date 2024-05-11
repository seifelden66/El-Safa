//product.route.js

const express = require("express");

const {
  passportAuthenticate,
  passportInitialize,
} = require("../../services/auth/isLogin");

const {
  getProducts,
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
  addRating,
  addComment,
  getTopRatedProducts,
  searchProduct,
} = require("../../controllers/products.controller");
const { upload } = require("../../services/handleFile");
const router = express.Router();

router.get("/search", searchProduct);

router.get("/top-rated", getTopRatedProducts);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", upload.array("image"), postProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

router.post(
  "/:id/ratings",
  passportInitialize,
  passportAuthenticate,
  addRating
);
router.post(
  "/:id/comments",
  passportInitialize,
  passportAuthenticate,
  addComment
);

module.exports = router;
