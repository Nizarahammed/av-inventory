const {
    Schema,
    model
  } = require("mongoose");
  
  const ProductSchema = new Schema({
    type: {
      type: String,
      required: true,
      maxlength: 50
    },
    model: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        required: true,
    },
    costPrice: {
        type: Number,
        required: true,
    },
    sellingPrice: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    brand: {
      type: String,
      required: false,
    }
  });
  
  const ProductModel = model("product", ProductSchema)
  
  module.exports = ProductModel;