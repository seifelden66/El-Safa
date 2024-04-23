const cartSchema = require("./cart.mongo");
const Product = require("../products/product.model");
// ANCHOR add product to cart , if the product already in the cart Just update the quantity if it is updated
async function addToCart(item) {
  const cart = await cartSchema.findOne({
    userId: item.userId,
    "items.productId": item.product.id,
  });
  if (cart) {
    return await cartSchema.findOneAndUpdate(
      { userId: item.userId, "items.productId": item.product.id },
      { $set: { "items.$.quantity": item.product.quantity } },
      { new: true }
    );
  }
  return await cartSchema.findOneAndUpdate(
    { userId: item.userId },
    {
      $push: {
        items: {
          productId: item.product.id,
          quantity: item.product.quantity,
        },
      },
    },
    { upsert: true, new: true }
  );
}

//ANCHOR - delete product from cart
async function DeleteFromCart(item) {
  return await cartSchema.findOneAndUpdate(
    {
      userId: item.userId,
      "items.productId": item.productId,
    },
    { $pull: { items: { productId: item.productId } } },
    { new: true }
  );
}

// ANCHOR -  GET user items cart and some of data related the product
async function allItemsInCart(id) {
  const cartItems = await cartSchema.findOne({ userId: id });
  if (cartItems) {
    const productId = cartItems.items.map((item) => item.productId);
    const product = await Product.find(
      { _id: { $in: productId } },
      { createdAt: 0, updatedAt: 0, __v: 0 }
    );

    const result = product.map((product) => {
      const cartItem = cartItems.items.find(
        (item) => item.productId.toString() === product._id.toString()
      );

      return {
        id: product._id,
        name: product.name,
        images: product.images,
        quantity: cartItem.quantity,
        price: product.price,
        totalPrice: product.price * cartItem.quantity,
      };
    });
    const totalPrice = result.reduce(
      (total, item) => total + item.totalPrice,
      0
    );
    return {
      items: result,
      totalPrice,
    };
  }
}

module.exports = { addToCart, DeleteFromCart, allItemsInCart };
