const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const items = require("./cart_item");

const cart = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    cart: [items],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cart);
